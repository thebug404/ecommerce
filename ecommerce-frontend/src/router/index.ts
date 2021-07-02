import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { HomeRoutes } from "@/modules/home/home.routes";
import { ProfileRoute } from "@/modules/profile/profile.routes";
import { roles } from "@/core/interfaces/general.interfaces";
import authModules from "@/store/modules/auth.modules";
import { AuthService } from "@/core/services/auth/auth.service";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [HomeRoutes, ProfileRoute];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const { requiresAuth, roles } = to.meta || {};
  if (!requiresAuth) return next();

  try {
    let { currentUser } = authModules;
    const authService = new AuthService();
    currentUser = !currentUser ? (await authService.reAuthenticate()).user : currentUser;

    if (requiresAuth && roles.indexOf(currentUser.role) >= 0) {
      if (to.meta) to.meta.role = currentUser.role;
      return next();
    };
  } catch (error) {
    return next({ name: "Login" });
  }
});

export default router;
