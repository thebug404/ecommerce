import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import { HomeRoutes } from "@/modules/home/home.routes";
import { ProfileRoute } from "@/modules/profile/profile.routes";

import authStore from "@/store/modules/auth.store";

import { AuthService } from "@/core/services/auth/auth.service";
import { User } from "@/core/services/user.service";

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

  let user: User | null = authStore.currentUser;
  const authService = new AuthService();

  if (!authStore.currentUser) {
    const [res, error] = await authService.reAuthenticate();
    if (error) return next({ name: "Login" });
    user = res?.user as User;
  }

  if (requiresAuth && roles.indexOf(user?.role) >= 0) return next();

  return next({ name: "Login" });
});

export default router;
