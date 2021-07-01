import { RouteConfig } from "vue-router";

export const HomeRoutes: RouteConfig = {
  path: "",
  component: () => import("@/modules/home/layouts/Home.layout.vue"),
  children: [
    {
      path: "",
      name: "Home",
      component: () => import("@/modules/home/pages/Home.page.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/modules/home/pages/Login.page.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/modules/home/pages/Register.page.vue"),
    },
    {
      path: "/verifyEmail/:token",
      name: "Verify-Email",
      component: () => import("./pages/VerifyEmail.page.vue"),
    },
  ],
};
