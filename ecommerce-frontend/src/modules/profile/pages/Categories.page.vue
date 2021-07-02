<template>
  <div>
    <v-toolbar elevation="0">
      <v-spacer />
      <v-btn @click="openDialog" text color="primary">
        <v-icon>mdi-plus</v-icon>
        <span class="ml-3">Agregar categoria.</span>
      </v-btn>
    </v-toolbar>
    <v-container>
      <CategoryTableComponent v-bind:categories="categories" />
    </v-container>
    <CategoryDialogComponent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Category } from "../../../core/services/categories/category.service";

import categoryStore from "../../../store/modules/category.module";

import CategoryDialogComponent from "../components/category-dialog.component.vue";
import CategoryTableComponent from "../components/category-table.component.vue";

@Component({
  components: {
    CategoryDialogComponent,
    CategoryTableComponent,
  },
})
export default class CategoriesPage extends Vue {
  created(): void {
    categoryStore.getList();
  }

  openDialog(): void {
    categoryStore.openDialog({});
  }

  get categories(): Array<Category> {
    return categoryStore.categories;
  }
}
</script>
