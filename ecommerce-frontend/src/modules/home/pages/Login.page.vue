<template>
  <v-sheet color="purple darken-1">
    <v-layout wrap align-center justify-center style="min-height: 100vh">
      <v-flex xs11 sm8 md10 lg7>
        <v-card>
          <v-layout wrap>
            <v-flex xs12 md6 class="purple pa-5 d-none d-md-block">
              <div class="d-flex align-center" style="min-height: 100%">
                <div>
                  <img
                    :src="require('@/assets/login.svg')"
                    alt="Login banner"
                    class="mb-5"
                    width="100%"
                  />
                  <span class="white--text">
                    © {{ new Date().getFullYear() }} Ecommerce.Todos los
                    derechos reservados.
                  </span>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 md6 class="pa-5 pa-sm-8 pa-md-10">
              <div class="py-5">
                <h1>
                  <strong>Iniciar sesion</strong>
                </h1>
                <p class="grey--text">
                  Autenticate y obten todos los productos que necesitas.
                </p>
              </div>
              <LoginFormComponent />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import LoginFormComponent from "../components/Login.form.vue";

@Component({
  components: { LoginFormComponent },
})
export default class LoginPage extends Vue {}
</script>
