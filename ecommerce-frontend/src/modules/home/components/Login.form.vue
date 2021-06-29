<template>
  <v-form>
    <v-text-field
      outlined
      autofocus
      label="Email"
      color="purple"
      autocomplete="off"
      placeholder="Ejem: abc@gmail.com"
      prepend-inner-icon="mdi-account-circle"
    ></v-text-field>
    <v-text-field
      outlined
      autofocus
      color="purple"
      type="password"
      label="Contraseña"
      autocomplete="off"
      prepend-inner-icon="mdi-lock"
    ></v-text-field>
    <v-btn color="purple" rounded block dark>Iniciar sesion</v-btn>
    <div class="text-center pt-5">
      <router-link to="/" class="purple--text">
        <span class="">¿Has olvidado la contraseña?</span>
      </router-link>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class LoginFormComponent extends Vue {}
</script>
