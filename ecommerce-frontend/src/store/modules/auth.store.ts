import * as VuexDecorators from "vuex-module-decorators";
import router from "@/router";
import store from "../index";

import { GeneralDialog } from "@/core/interfaces/components.interfaces";
import { FeathersError } from "@/core/interfaces/general.interfaces";

import { AuthService, Credentials } from "@/core/services/auth/auth.service";
import * as ServiceUser from "@/core/services/user.service";

@VuexDecorators.Module({
  name: "auth",
  namespaced: true,
  dynamic: true,
  store,
})
export class AuthStore extends VuexDecorators.VuexModule {
  private authService: AuthService = new AuthService();
  error: FeathersError | null = null;
  currentUser: ServiceUser.User | null = null;
  loading = false;
  generalDialog: Partial<GeneralDialog> = {
    status: false,
    data: { message: "", img: "" },
  };

  @VuexDecorators.Mutation
  SET_CURRENT_USER(user: ServiceUser.User): void {
    this.error = null;
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

  @VuexDecorators.Mutation
  SET_LOGOUT(): void {
    this.error = null;
    this.currentUser = null;
  }

  @VuexDecorators.Action
  async signup(data: ServiceUser.ParamsCreateUser): Promise<void> {
    const userService = new ServiceUser.UserService();

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
    const [result, error] = await this.authService.login(
      data.email,
      data.password
    );
    if (error) return this.context.commit("SET_ERROR", error);

    this.context.commit("SET_CURRENT_USER", result?.user);
    router.replace({ name: "Dashboard" });
  }

  @VuexDecorators.Action
  async reAuthenticate(force = true): Promise<void> {
    const [data, error] = await this.authService.reAuthenticate(force);
    if (!data) return this.context.commit("SET_ERROR", error);

    this.context.commit("SET_CURRENT_USER", data.user);
  }

  @VuexDecorators.Action
  async verifySignUp(token: string): Promise<void> {
    this.context.commit("SET_LOADING", true);

    const [data, error] = await this.authService.verifySignUp(token);
    if (!data) {
      this.context.commit("SET_ERROR", error);
      this.context.commit("SET_LOADING", false);
    }

    this.context.commit("SET_CURRENT_USER", data);
    this.context.commit("SET_LOADING", false);
  }

  @VuexDecorators.Action
  async logout(): Promise<void> {
    // Logout
    const [data, error] = await this.authService.logout();
    if (!data) console.error(error);

    // change route
    router.replace({ name: "Login" });
    setTimeout(() => this.context.commit("SET_LOGOUT"), 1000);
  }
}

export default VuexDecorators.getModule(AuthStore);
