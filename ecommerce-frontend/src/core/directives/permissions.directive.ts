import { DirectiveFunction } from "vue";

import authStore from "@/store/modules/auth.store";
import { AuthService } from "../services/auth/auth.service";

export const permissionsDirective: DirectiveFunction = async (el, biding) => {
  const { currentUser } = authStore;
  const user = currentUser ? currentUser : (await new AuthService().reAuthenticate()).user;

  const result = (biding.value as string[]).indexOf(user.role);
  if (result < 0) el.style.display = "none";
}
