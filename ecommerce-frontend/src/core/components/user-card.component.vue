<template>
  <v-card text elevation="0">
    <div class="text-center pt-5">
      <v-avatar size="100">
        <img
          :src="`https://ui-avatars.com/api/?name=${user.first_name}&rounded=true&size=100px`"
          alt=""
        />
      </v-avatar>
    </div>
    <v-card-title class="d-block text-center">{{
      user.first_name
    }}</v-card-title>
    <v-card-subtitle class="d-block text-center">{{
      user.email
    }}</v-card-subtitle>
    <v-card-actions class="pt-0">
      <v-spacer></v-spacer>
      <v-btn @click="logout" icon color="error" class="mx-2">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn @click="changeTeam" icon class="mx-2">
        <v-icon>mdi-lamp</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "vuetify";

import authStore from "../../store/modules/auth.store";

const UserCardProps = Vue.extend({
  props: { user: Object },
});

@Component
export default class UserCardComponent extends UserCardProps {
  changeTeam(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }

  logout(): void {
    authStore.logout();
  }
}
</script>
