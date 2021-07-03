<template>
  <div>
    <v-sheet v-if="!loading" :color="showTemplate.color">
      <v-container>
        <v-layout justify-center align-center style="min-height: 100vh">
          <v-flex xs12 sm8 lg6 class="text-center">
            <v-card elevation="0" class="py-5 px-sm-5">
              <div class="text-center">
                <img :src="showTemplate.img" width="150px" />
              </div>
              <h1 class="text-center">{{ showTemplate.title }}</h1>
              <p class="text-center">{{ showTemplate.text }}</p>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-sheet>
    <div
      v-else
      class="d-flex align-center justify-center"
      style="min-height: 100vh"
    >
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          width="10"
          size="80"
        ></v-progress-circular>
        <p class="py-4">
          Tu cuenta esta siendo verificada en este momento, espere unos
          segundos.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "vue-router";

import authModules from "../../../store/modules/auth.store";

@Component
export default class VerifyEmailPage extends Vue {
  async mounted(): Promise<void> {
    const { token } = this.$route.params;
    if (!token) return;

    await authModules.verifySignUp(token);
  }

  get loading(): boolean {
    return authModules.loading;
  }

  get showTemplate(): Record<string, string> {
    if (authModules.currentUser)
      return {
        img: "https://image.flaticon.com/icons/png/512/3050/3050426.png",
        title: "Correo electronico verificado",
        text: "Tu cuenta de correo electronico ha sido verificada con exito. Ahora puedes iniciar sesion.",
        color: "primary",
      };

    return {
      img: "https://image.flaticon.com/icons/png/512/554/554248.png",
      title: "Verificacion invalida",
      text: "Ha sucedido un error en la verificacion",
      color: "error",
    };
  }
}
</script>
