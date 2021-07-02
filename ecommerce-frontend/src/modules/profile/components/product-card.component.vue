<template>
  <v-card class="my-card pa-3">
    <v-layout wrap align-center>
      <v-flex xs12 md5>
        <v-img :src="product.image" height="200px" contain />
      </v-flex>
      <v-flex xs12 md7>
        <div class="d-flex">
          <div>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle class="grey--text pb-2">{{
              product.description
            }}</v-card-subtitle>
          </div>
          <v-spacer></v-spacer>
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon color="grey" class="mt-4" v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="editProduct" dense>
                  <v-list-item-icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Editar producto</v-list-item-title>
                </v-list-item>
                <v-list-item @click="removeProduct" dense>
                  <v-list-item-icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Eliminar producto</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="px-3">
          <v-chip
            v-for="(category, i) in product.categories"
            :key="i"
            outlined
            class="ma-1"
            :color="category.color"
            >{{ category.name }}</v-chip
          >
          <div class="d-flex align-center">
            <h1 class="px-1 pt-2">${{ product.price }}</h1>
            <v-spacer></v-spacer>
            <v-rating
              background-color="grey lighten-2"
              :value="product.rating"
              class="py-2"
              color="yellow"
              length="5"
              size="18"
              dense
            ></v-rating>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { Product } from "../../../core/services/product.service";

import productStore from "../../../store/modules/product.store";

const PorductProps = Vue.extend({
  props: {
    product: Object,
  },
});

@Component
export default class ProductCardComponent extends PorductProps {
  editProduct(): void {
    productStore.showDialog(this.product as Product);
  }

  removeProduct(): void {
    const message = `El producto ${this.product.title} sera eliminado. ¿Desea continuar?`;

    if (confirm(message)) {
      productStore.remove(this.product._id);
    }
  }
}
</script>
