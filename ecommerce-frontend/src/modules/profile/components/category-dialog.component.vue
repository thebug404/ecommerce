<template>
  <v-dialog v-model="dialog" width="370" persistent>
    <v-card class="pa-5">
      <v-form ref="form">
        <v-text-field
          autofocus
          class="my-2"
          label="Nombre"
          autocomplete="off"
          v-model="editedItem.name"
          placeholder="Ejemplo: Computadoras"
        ></v-text-field>
        <v-select
          :items="colors"
          label="Selecciona un color"
          v-model="editedItem.color"
          item-text="title"
          item-value="color"
        ></v-select>
      </v-form>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="close" text color="primary" class="mx-2">Cancelar</v-btn>
        <v-btn @click="save" color="primary" class="mx-2">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Category } from "../../../core/services/category.service";

import categoryModule from "../../../store/modules/category.store";

@Component
export default class CategoryDialogComponent extends Vue {
  colors = [
    { title: "Azul", color: "primary" },
    { title: "Rojo", color: "error" },
    { title: "Amarillo", color: "warning" },
    { title: "Verde", color: "success" },
    { title: "Celeste", color: "info" },
    { title: "Morado", color: "purple" },
    { title: "Cafe", color: "brown" },
    { title: "Rosado", color: "pink" },
    { title: "Cyan", color: "cyan" },
  ];

  async save(): Promise<void> {
    if (categoryModule.editedIndex < 0) {
      categoryModule.create(this.editedItem as Category);
    } else {
      categoryModule.update(this.editedItem as Category);
    }
    this.close();
  }

  close(): void {
    setTimeout(() => {
      categoryModule.SET_DIALOG({ status: false, data: {} });
      (this.$refs.form as HTMLFormElement).reset();
    }, 200);
  }

  get editedItem(): Partial<Category> {
    return categoryModule.editedItem;
  }

  get dialog(): boolean {
    return categoryModule.dialog;
  }
}
</script>
