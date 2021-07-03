<template>
  <v-data-table
    class="elevation-2"
    :headers="headers"
    :items="users"
    hide-default-footer
  >
    <template v-slot:item.isVerified="{ item }">
      <v-chip :color="item.isVerified ? 'success' : 'error'">{{
        item.isVerified
      }}</v-chip>
    </template>
    <template v-slot:item.role="props">
      <v-edit-dialog
        :return-value.sync="props.item.role"
        @save="save(props.item)"
      >
        {{ props.item.role }}
        <template v-slot:input>
          <v-select
            :selected="props.item.role"
            v-model="props.item.role"
            :items="roles"
          ></v-select>
        </template>
      </v-edit-dialog>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Roles } from "../../../core/interfaces/general.interfaces";

import { User } from "../../../core/services/users/user.service";
import authStore from "../../../store/modules/auth.store";

import userStore from "../../../store/modules/user.store";

@Component
export default class UsersPage extends Vue {
  headers = [
    { text: "Nombres", value: "first_name" },
    { text: "Apellidos", value: "last_name" },
    { text: "Email", value: "email" },
    { text: "Role", value: "role" },
    { text: "Verificado", value: "isVerified" },
  ];
  roles: string[] = [Roles.Admin, Roles.Reader, Roles.Writer];

  created(): void {
    userStore.find({});
  }

  save(data: User): void {
    userStore.patch({
      _id: data._id,
      role: data.role,
    });
  }

  get users(): Array<User> {
    const user = authStore.currentUser as User;
    return userStore.items.filter((item) => item._id !== user._id);
  }
}
</script>
