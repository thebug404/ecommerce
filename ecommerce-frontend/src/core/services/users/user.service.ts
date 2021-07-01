import { Service } from "@feathersjs/feathers";
import app from "@/core/config/feathers";

import { FeathersError } from "@/core/interfaces/general.interfaces";

export interface ParamsCreateUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface User extends Omit<ParamsCreateUser, "password"> {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class UserService {
  private service: Service<User>;

  constructor() {
    this.service = app.service("/api/users");
  }

  async create(
    data: ParamsCreateUser
  ): Promise<[User | null, FeathersError | null]> {
    try {
      const user = await this.service.create(data);
      return [user, null];
    } catch (error) {
      return [null, error];
    }
  }
}
