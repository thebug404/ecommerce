<template>
  <div>
    <v-sheet color="primary">
      <v-layout align-center justify-center wrap style="min-height: 100vh">
        <v-flex xs11 sm8 lg10>
          <v-card>
            <v-layout wrap>
              <v-flex xs12 md6 class="blue darken-1 pa-5 d-none d-md-block">
                <div class="d-flex align-center" style="min-height: 100%">
                  <div>
                    <img
                      :src="require('@/assets/register.svg')"
                      alt="Register banner"
                      width="100%"
                    />
                  </div>
                </div>
              </v-flex>
              <v-flex xs12 md6 class="pa-5 pa-sm-10">
                <div class="my-5 mb-10">
                  <h1 style="font-weight: 300">Crea una cuenta</h1>
                  <p class="grey--text">
                    Inicia sesion y accede a todos los productos que necesitas.
                  </p>
                </div>
                <RegisterFormComponent />
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-sheet>
    <GeneralDialogComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import RegisterFormComponent from "../components/Register.form.vue";
import GeneralDialogComponent from "../../../core/components/general-dialog.component.vue";

@Component({
  components: { RegisterFormComponent, GeneralDialogComponent },
})
export default class LoginPage extends Vue {}
</script>
