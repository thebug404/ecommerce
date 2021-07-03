import { Service } from "@feathersjs/feathers";
import app from "@/core/config/feathers";

import { FeathersError } from "@/core/interfaces/general.interfaces";
import { User } from "../users/user.service";

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResult {
  accessToken: string;
  authentication: {
    accessToken: string;
    strategy: string;
  };
  user: User;
}

export class AuthService {
  async login(
    email: string,
    password: string
  ): Promise<[AuthResult | null, FeathersError | null]> {
    try {
      const result = (await app.authenticate({
        strategy: "local",
        email,
        password,
      })) as AuthResult;
      return [result, null];
    } catch (error) {
      return [null, error];
    }
  }

  async verifySignUp(token: string) {
    const service: Service<any> = app.service("authManagement");
    return await service.create({
      action: "verifySignupLong",
      value: token,
    });
  }

  async reAuthenticate(force = true): Promise<AuthResult> {
    return (await app.reAuthenticate(force)) as AuthResult;
  }

  async logout(): Promise<AuthResult> {
    return (await app.authentication.logout()) as AuthResult;
  }
}
