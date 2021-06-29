<template>
  <v-form>
    <v-layout wrap>
      <v-flex xs12 lg6 class="pa-3 py-2">
        <v-text-field
          outlined
          autofocus
          label="Nombres"
          prepend-inner-icon="mdi-account"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 lg6 class="pa-3 py-2">
        <v-text-field
          outlined
          label="Apellidos"
          prepend-inner-icon="mdi-account"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 class="pa-3 py-2">
        <v-text-field
          outlined
          label="Email"
          prepend-inner-icon="mdi-account-circle"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 class="pa-3 py-2">
        <v-text-field
          outlined
          type="password"
          label="Contraseña"
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <div class="d-sm-flex align-center w-100">
      <v-btn text color="primary" :to="{ name: 'Login' }" class="my-2"
        >Prefiero iniciar sesion</v-btn
      >
      <v-spacer />
      <v-btn color="primary" class="my-2">Crear cuenta</v-btn>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class RegisterFormComponent extends Vue {}
</script>
