import * as VuexDecorators from "vuex-module-decorators";
import router from "@/router";
import store from "../index";

import { FeathersError } from "@/core/interfaces/general.interfaces";

import {
  ParamsCreateUser,
  User,
  UserService,
} from "@/core/services/users/user.service";
import { AuthService, Credentials } from "@/core/services/auth/auth.service";

@VuexDecorators.Module({
  name: "auth",
  namespaced: true,
  dynamic: true,
  store,
})
export class AuthStore extends VuexDecorators.VuexModule {
  error: FeathersError | null = null;
  currentUser: User | null = null;

  @VuexDecorators.Mutation
  SET_CURRENT_USER(user: User): void {
    this.currentUser = user;
  }

  @VuexDecorators.Mutation
  SET_ERROR(error: FeathersError): void {
    this.error = error;
    setTimeout(() => (this.error = null), 5000);
  }

  @VuexDecorators.Action
  async signup(data: ParamsCreateUser): Promise<void> {
    const userService: UserService = new UserService();

    const [user, error] = await userService.create(data);
    if (error) return this.context.commit("SET_ERROR", error);

    this.context.commit("SET_CURRENT_USER", user);
  }

  @VuexDecorators.Action
  async login(data: Credentials): Promise<void> {
    const service = new AuthService();

    const [result, error] = await service.login(data.email, data.password);
    if (error) return this.context.commit("SET_ERROR", error);

    this.context.commit("SET_CURRENT_USER", result?.user);
    router.replace({ name: "Dashboard" });
  }
}

export default VuexDecorators.getModule(AuthStore);
