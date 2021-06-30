<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      outlined
      required
      autofocus
      class="my-2"
      label="Email"
      color="purple"
      autocomplete="off"
      v-model="data.email"
      placeholder="Ejem: abc@gmail.com"
      prepend-inner-icon="mdi-account-circle"
      :rules="[rules.required, rules.email]"
    ></v-text-field>
    <v-text-field
      outlined
      required
      autofocus
      class="my-2"
      color="purple"
      type="password"
      label="Contraseña"
      autocomplete="off"
      v-model="data.password"
      prepend-inner-icon="mdi-lock"
      :rules="[rules.required, rules.password]"
    ></v-text-field>
    <v-btn @click="login" color="purple" :disabled="!valid" rounded block dark
      >Iniciar sesion</v-btn
    >
    <div class="pt-5">
      <router-link to="/" class="purple--text text-decoration-none">
        <small>¿Has olvidado la contraseña?</small>
      </router-link>
      <router-link
        :to="{ name: 'Register' }"
        class="purple--primary text-decoration-none"
      >
        <small> ¿Aun no poseo una cuenta?</small>
      </router-link>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { rules as myRules } from "@/core/dump/rules";

import { AuthService } from "../../../core/services/auth/auth.service";

@Component
export default class LoginFormComponent extends Vue {
  data = { email: "", password: "" };
  readonly rules = myRules;
  valid = false;

  async login(): Promise<void> {
    try {
      const result = await new AuthService().login(this.data.email, this.data.password);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
