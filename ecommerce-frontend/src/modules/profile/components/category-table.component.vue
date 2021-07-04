<template>
  <v-data-table class="elevation-2" :items="categories" :headers="headers" @pagination="pagination">
    <template v-slot:item.color="{ item }">
      <v-chip :color="item.color" dark>{{ item.color }}</v-chip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn @click="deleteCategory" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn @click="openDialogEdit(item)" icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Category } from "../../../core/services/category.service";
import categoryStore from "../../../store/modules/category.store";

import categoryModule from "../../../store/modules/category.store";

const CategoryProps = Vue.extend({
  props: { categories: Array },
});

@Component
export default class CategoryTableComponent extends CategoryProps {
  headers = [
    { text: "Nombre de la categoria", value: "name" },
    { text: "Color", value: "color" },
    { text: "Acciones", value: "actions", sortable: false },
  ];

  openDialogEdit(category: Category): void {
    categoryModule.showDialog(category);
  }

  deleteCategory(id: string): void {
    if (confirm("La categoria sera eliminada. ¿Estas seguro?")) {
      categoryModule.remove(id);
    }
  }

  pagination(): void {
    categoryStore.find({ $skip: this.categories.length });
  }
}
</script>
