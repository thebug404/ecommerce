<template>
  <div>
    <v-toolbar
      v-permissions="['ADMIN', 'WRITER']"
      elevation="0"
      color="transparent"
    >
      <v-spacer />
      <v-btn @click="showDialog" text color="primary">
        <v-icon>mdi-plus</v-icon>
        <span class="ml-3">Nuevo producto</span>
      </v-btn>
    </v-toolbar>

    <main>
      <v-layout wrap>
        <v-flex v-for="(item, i) in products" class="pa-3" :key="i" xs12 sm6>
          <ProductCardComponent v-bind:product="item" />
        </v-flex>
      </v-layout>
      <ProductDialogComponent />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Product } from "../../../core/services/product.service";

import productStore from "../../../store/modules/product.store";

import ProductCardComponent from "../components/product-card.component.vue";
import ProductDialogComponent from "../components/product-dialog.component.vue";

@Component({
  components: {
    ProductCardComponent,
    ProductDialogComponent,
  },
})
export default class ProductsPage extends Vue {
  created(): void {
    productStore.find({});
    productStore.watchStateEntity("created");
    productStore.watchStateEntity("removed");
    productStore.watchStateEntity("updated");
  }

  showDialog(): void {
    productStore.showDialog({});
  }

  get products(): Array<Product> {
    return productStore.items;
  }
}
</script>
