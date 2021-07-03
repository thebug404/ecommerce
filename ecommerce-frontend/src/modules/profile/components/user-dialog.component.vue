<template>
  <v-dialog v-model="dialog" persistent width="500">
    <v-card>
      <div class="pa-5">
        <v-layout wrap>
          <v-flex xs12 md6 class="px-3">
            <v-text-field
              label="Nombres"
              v-model="user.first_name"
              autocomplete="off"
              autofocus
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6 class="px-3">
            <v-text-field
              label="Apellidos"
              v-model="user.last_name"
              autocomplete="off"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6 class="px-3">
            <v-text-field
              label="Email"
              disabled
              v-model="user.email"
              autocomplete="off"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md6 class="px-3">
            <v-select
              :items="['ADMIN', 'WRITER', 'READER']"
              label="Seleccionar rol"
              :selected="user.role"
              v-model="user.role"
            ></v-select>
          </v-flex>
        </v-layout>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="close" class="mx-2" text color="primary">Cancelar</v-btn>
        <v-btn @click="save" class="mx-2" color="primary">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { User } from "../../../core/services/user.service";

import userStore from "../../../store/modules/user.store";

@Component
export default class UserDialogComponent extends Vue {
  save(): void {
    userStore.patch({  });
  }

  close(): void {
    userStore.closeDialog();
  }

  get user(): User {
    return userStore.editedItem as User;
  }

  get dialog(): boolean {
    return userStore.dialog;
  }
}
</script>
