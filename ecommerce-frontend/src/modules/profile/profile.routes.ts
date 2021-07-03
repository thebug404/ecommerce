import { Roles } from "@/core/interfaces/general.interfaces";
import { RouteConfig } from "vue-router";

export const ProfileRoute: RouteConfig = {
  path: "/profile",
  component: () => import("./profile.layout.vue"),
  children: [
    {
      path: "",
      name: "Dashboard",
      meta: {
        requiresAuth: true,
        roles: [Roles.Admin, Roles.Reader, Roles.Writer],
      },
      component: () => import("./pages/Products.page.vue"),
    },
    {
      path: "categories",
      name: "Categories",
      meta: {
        requiresAuth: true,
        roles: [Roles.Admin, Roles.Writer],
      },
      component: () => import("./pages/Categories.page.vue"),
    },
    {
      path: "users",
      name: "Users",
      meta: {
        requiresAuth: true,
        roles: [Roles.Admin],
      },
      component: () => import("./pages/Users.page.vue"),
    },
  ],
};
