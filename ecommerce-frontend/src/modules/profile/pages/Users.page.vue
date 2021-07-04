<template>
  <v-container>
    <UsersTableComponent v-bind:users="users" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { User } from "../../../core/services/user.service";
import authStore from "../../../store/modules/auth.store";

import userStore from "../../../store/modules/user.store";

import UsersTableComponent from "../components/users-table.component.vue";

@Component({
  components: {
    UsersTableComponent
  }
})
export default class UsersPage extends Vue {
  created(): void {
    userStore.find({});
    userStore.watchStateEntity("created");
    userStore.watchStateEntity("patched");
  }

  get users(): Array<User> {
    const user = authStore.currentUser as User;
    return userStore.items.filter((item) => item._id !== user._id);
  }
}
</script>
