<template>
  <v-sheet color="primary">
    <v-layout
      wrap
      align-center
      justify-center
      class="px-5"
      style="min-height: 100vh"
    >
      <v-flex xs12 sm8 md6 class="px-md-5">
        <div class="white--text py-3">
          <h1 class="my-3">
            <strong>Administrar tu negocio nunca habia sido tan facil.</strong>
          </h1>
          <p>
            Accede ya a nuestro servicio, y obtiene todos tus articulos a la
            puerta de tu casa. Create una cuenta, si aun no lo has hecho.
          </p>
        </div>
        <v-btn
          :to="{ name: 'Register' }"
          rounded
          large
          class="primary--text ma-2"
        >
          <v-icon class="mr-2">mdi-account</v-icon>
          <span>Crear una cuenta</span>
        </v-btn>
        <v-btn :to="{ name: 'Login' }" text color="white" large class="ma-2">
          <v-icon class="mr-2">mdi-login</v-icon>
          <span>Iniciar sesion</span>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm8 md6 class="text-center">
        <img :src="require('@/assets/banner.svg')" width="80%" alt="" />
      </v-flex>
    </v-layout>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HomePage extends Vue {}
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }
}
</style>
