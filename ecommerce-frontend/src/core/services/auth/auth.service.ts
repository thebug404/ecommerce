import { Service } from "@feathersjs/feathers";
import app from "@/core/config/feathers";

import { FeathersError } from "@/core/interfaces/general.interfaces";
import { User } from "../user.service";
import { standarizePromise } from "@/core/helpers/standarizePromise";

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
    return await standarizePromise(
      app.authenticate({
        strategy: "local",
        email,
        password,
      }) as Promise<AuthResult>
    );
  }

  async verifySignUp(token: string) {
    const service: Service<any> = app.service("authManagement");
    return await standarizePromise(
      service.create({ action: "verifySignupLong", value: token })
    );
  }

  async reAuthenticate(
    force = true
  ): Promise<[AuthResult | null, FeathersError | null]> {
    return await standarizePromise(
      app.reAuthenticate(force) as Promise<AuthResult>
    );
  }

  async logout(): Promise<[AuthResult | null, FeathersError | null]> {
    return await standarizePromise(app.logout() as Promise<AuthResult>);
  }
}
