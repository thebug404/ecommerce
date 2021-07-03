import { DirectiveFunction } from "vue";

import { User } from "../services/user.service";

import authStore from "@/store/modules/auth.store";

import { AuthService } from "../services/auth/auth.service";

export const permissionsDirective: DirectiveFunction = async (el, biding) => {
  let user: User | null = authStore.currentUser;

  if (!user) {
    const authService = new AuthService();
    const [res, error] = await authService.reAuthenticate();
    if (!res || error) throw new Error("No se permitio la autenticacion");

    user = res.user as User;
  }

  const result = (biding.value as string[]).indexOf(user.role);
  if (result < 0) el.style.display = "none";
};
