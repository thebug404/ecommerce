import { RouteConfig } from "vue-router";

export const ProfileRoute: RouteConfig = {
  path: "/profile",
  component: () => import("./profile.layout.vue"),
  children: [
    {
      path: "",
      name: "Dashboard",
      component: () => import("./pages/Dashboard.page.vue"),
    },
  ],
};
