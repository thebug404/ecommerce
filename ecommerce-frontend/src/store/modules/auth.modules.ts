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
import { GeneralDialog } from "@/core/interfaces/components.interfaces";

@VuexDecorators.Module({
  name: "auth",
  namespaced: true,
  dynamic: true,
  store,
})
export class AuthStore extends VuexDecorators.VuexModule {
  error: FeathersError | null = null;
  currentUser: User | null = null;
  loading = false;
  generalDialog: Partial<GeneralDialog> = {
    status: false,
    data: { message: "", img: "" },
  };

  @VuexDecorators.Mutation
  SET_CURRENT_USER(user: User): void {
    this.currentUser = user;
  }

  @VuexDecorators.Mutation
  SET_GENERAL_DIALOG(data: GeneralDialog): void {
    this.generalDialog = data;
  }

  @VuexDecorators.Mutation
  SET_ERROR(error: FeathersError): void {
    this.error = error;
    setTimeout(() => (this.error = null), 5000);
  }

  @VuexDecorators.Mutation
  SET_LOADING(loading = false): void {
    this.loading = loading;
  }

  @VuexDecorators.Action
  async signup(data: ParamsCreateUser): Promise<void> {
    const userService: UserService = new UserService();

    const [user, error] = await userService.create(data);
    if (error) return this.context.commit("SET_ERROR", error);

    this.context.commit("SET_GENERAL_DIALOG", {
      status: true,
      data: {
        message: `Te damos la bienvenida ${user?.first_name}, te hemos enviado un email a tu cuenta para verificar que eres tu.`,
        img: "https://image.flaticon.com/icons/png/512/1244/1244683.png",
      },
    } as GeneralDialog);
  }

  @VuexDecorators.Action
  async login(data: Credentials): Promise<void> {
    const service = new AuthService();

    const [result, error] = await service.login(data.email, data.password);
    if (error) return this.context.commit("SET_ERROR", error);

    this.context.commit("SET_CURRENT_USER", result?.user);
    router.replace({ name: "Dashboard" });
  }

  @VuexDecorators.Action
  async verifySignUp(token: string): Promise<void> {
    this.context.commit("SET_LOADING", true);

    try {
      const service = new AuthService();
      const data = await service.verifySignUp(token);

      this.context.commit("SET_CURRENT_USER", data);
      this.context.commit("SET_LOADING", false);
    } catch (error) {
      this.context.commit("SET_ERROR", error);
      this.context.commit("SET_LOADING", false);
    }
  }
}

export default VuexDecorators.getModule(AuthStore);
