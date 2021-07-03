<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-layout wrap>
      <v-flex xs12 lg6 class="pa-3 py-2">
        <v-text-field
          outlined
          required
          autofocus
          label="Nombres"
          autocomplete="off"
          v-model="data.first_name"
          prepend-inner-icon="mdi-account"
          :rules="[rules.required, rules.name]"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 lg6 class="pa-3 py-2">
        <v-text-field
          outlined
          required
          label="Apellidos"
          autocomplete="off"
          v-model="data.last_name"
          prepend-inner-icon="mdi-account"
          :rules="[rules.required, rules.name]"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 class="pa-3 py-2">
        <v-text-field
          outlined
          required
          label="Email"
          autocomplete="off"
          v-model="data.email"
          :error-messages="errorMessage"
          :rules="[rules.required, rules.email]"
          prepend-inner-icon="mdi-account-circle"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 class="pa-3 py-2">
        <v-text-field
          outlined
          required
          type="password"
          label="Contraseña"
          v-model="data.password"
          prepend-inner-icon="mdi-lock"
          :rules="[rules.required, rules.password]"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <div class="d-sm-flex align-center w-100">
      <v-btn text color="primary" :to="{ name: 'Login' }" class="my-2"
        >Prefiero iniciar sesion</v-btn
      >
      <v-spacer />
      <v-btn @click="register" color="primary" :disabled="!valid" class="my-2"
        >Crear cuenta</v-btn
      >
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { rules as myRules } from "@/core/dump/rules";

import { ParamsCreateUser } from "../../../core/services/users/user.service";

import authStore from "../../../store/modules/auth.store";

@Component
export default class RegisterFormComponent extends Vue {
  data: ParamsCreateUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  readonly rules = myRules;
  valid = false;

  async register(): Promise<void> {
    await authStore.signup(this.data);
  }

  get errorMessage(): string | undefined {
    return authStore.error?.message;
  }
}
</script>
