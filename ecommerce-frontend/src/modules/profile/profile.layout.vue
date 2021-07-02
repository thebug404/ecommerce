<template>
  <main>
    <v-navigation-drawer app v-model="drawer">
      <UserCardComponent v-bind:user="user" />
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

import authModules from "../../store/modules/auth.modules";

import UserCardComponent from "../../core/components/user-card.component.vue";

@Component({
  components: { UserCardComponent },
})
export default class ProfileLayout extends Vue {
  drawer = true;

  created(): void {
    authModules.reAuthenticate();
  }

  get user(): User {
    return authModules.currentUser || {} as User;
  }
}
</script>
