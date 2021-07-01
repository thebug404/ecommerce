<template>
  <v-dialog v-model="dialog.status" :width="dialog.width || 400">
    <v-card>
      <div class="text-center py-5">
        <v-avatar size="125">
          <img :src="dialog.data.img" />
        </v-avatar>
      </div>
      <v-card-text>
        <v-card-subtitle class="py-0">{{
          dialog.data.message
        }}</v-card-subtitle>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="dialog.status = false" block color="primary" dark
          >Cerrar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { GeneralDialog } from "../../core/interfaces/components.interfaces";

import authModules from "../../store/modules/auth.modules";

@Component
export default class GeneralDialogComponent extends Vue {
  get dialog(): Partial<GeneralDialog> {
    return authModules.generalDialog;
  }
}
</script>
