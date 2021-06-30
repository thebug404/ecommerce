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
}
