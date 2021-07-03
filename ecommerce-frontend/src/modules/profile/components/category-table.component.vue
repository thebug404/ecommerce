<template>
  <v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Nombre de la categoria</th>
            <th class="text-left">Color</th>
            <th class="text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in categories" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>
              <v-chip :color="item.color" dark>{{ item.color }}</v-chip>
            </td>
            <td>
              <v-btn @click="deleteCategory(item._id)" icon class="mx-2">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn @click="openDialogEdit(item)" icon class="mx-2">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Category } from "../../../core/services/categories/category.service";

import categoryModule from "../../../store/modules/category.store";

const CategoryProps = Vue.extend({
  props: { categories: Array },
});

@Component
export default class CategoryTableComponent extends CategoryProps {
  openDialogEdit(category: Category): void {
    categoryModule.showDialog(category);
  }

  deleteCategory(id: string): void {
    if (confirm("La categoria sera eliminada. ¿Estas seguro?")) {
      categoryModule.remove(id);
    }
  }
}
</script>
