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
  ],
};
