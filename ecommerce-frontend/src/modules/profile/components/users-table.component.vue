<template>
  <v-data-table
    @pagination="paginate"
    class="elevation-2"
    :headers="headers"
    :items="users"
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
import { User } from "../../../core/services/user.service";

import userStore from "../../../store/modules/user.store";

const UsersTableProps = Vue.extend({
  props: {
    users: Array,
  },
});

@Component
export default class UsersTableComponent extends UsersTableProps {
  headers = [
    { text: "Nombres", value: "first_name" },
    { text: "Apellidos", value: "last_name" },
    { text: "Email", value: "email" },
    { text: "Role", value: "role" },
    { text: "Verificado", value: "isVerified" },
  ];
  roles: string[] = [Roles.Admin, Roles.Reader, Roles.Writer];

  save(data: User): void {
    userStore.patch({
      _id: data._id,
      role: data.role,
    });
  }

  paginate(): void {
    userStore.find({ $skip: this.users.length });
  }
}
</script>

