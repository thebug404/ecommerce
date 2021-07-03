<template>
  <main>
    <v-navigation-drawer app v-model="drawer">
      <UserCardComponent v-bind:user="user" />
      <v-list shaped dense class="mt-3">
        <v-list-item-group
          v-for="(item, i) in links"
          :key="i"
          :color="item.color"
        >
          <v-list-item :to="{ name: item.path }" exact>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ecommerce</v-toolbar-title>
    </v-app-bar>
    <main>
      <v-container fluid>
        <router-view />
      </v-container>
    </main>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { User } from "../../core/services/users/user.service";
import { Roles } from "../../core/interfaces/general.interfaces";

import authModules from "../../store/modules/auth.store";

import UserCardComponent from "../../core/components/user-card.component.vue";

interface Link {
  path: string;
  icon: string;
  text: string;
  color: string;
  roles: string[];
}

@Component({
  components: { UserCardComponent },
})
export default class ProfileLayout extends Vue {
  drawer = true;
  items: Array<Link> = [
    {
      path: "Dashboard",
      icon: "mdi-home",
      roles: [Roles.Admin, Roles.Reader, Roles.Writer],
      color: "primary",
      text: "Dashboard",
    },
    {
      path: "Categories",
      icon: "mdi-format-list-bulleted-square",
      roles: [Roles.Admin, Roles.Writer],
      color: "success",
      text: "Categorias",
    },
    {
      path: "Users",
      icon: "mdi-account-group",
      roles: [Roles.Admin],
      color: "warning",
      text: "Usuarios",
    },
  ];

  created(): void {
    authModules.reAuthenticate();
  }

  get user(): User {
    return authModules.currentUser || ({} as User);
  }

  get links(): Array<Link> {
    return this.items.filter((item) =>
      item.roles.find((role) => role === this.user.role)
    );
  }
}
</script>
