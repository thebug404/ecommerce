<template>
  <v-dialog v-model="dialog" persistent width="500px">
    <v-card>
      <div class="pa-5">
        <v-form ref="form" v-model="valid">
          <v-layout wrap>
            <v-flex xs12 lg6 class="px-3">
              <v-text-field
                autofocus
                label="Titulo"
                autocomplete="off"
                :rules="[rules.required]"
                v-model="product.title"
                placeholder="Ejemplo: Laptops HP"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 lg6 class="px-3">
              <v-text-field
                type="number"
                label="Precio"
                v-model="product.price"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-select
                chips
                multiple
                item-text="name"
                item-value="_id"
                :items="categories"
                :rules="[rules.maxItems(3)]"
                v-model="product.categoriesIds"
                label="Seleccionar categorias"
              ></v-select>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-text-field
                type="url"
                label="Imagen"
                autocomplete="off"
                v-model="product.image"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="px-3">
              <v-textarea
                counter
                rows="3"
                label="Descripcion"
                :rules="[rules.required, rules.maxLength(120)]"
                v-model="product.description"
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-form>
      </div>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="close" text color="primary" class="ma-1">Cancelar</v-btn>
        <v-btn @click="save" :disabled="!valid" color="primary" class="ma-1"
          >Guardar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Category } from "../../../core/services/categories/category.service";

import { rules as myRules } from "../../../core/dump/rules";
import { Product } from "../../../core/services/product.service";

import categoryModule from "../../../store/modules/category.store";
import productStore from "../../../store/modules/product.store";

@Component
export default class ProductDialogComponent extends Vue {
  readonly rules = myRules;
  valid = false;

  created(): void {
    categoryModule.find({});
  }

  save(): void {
    if (productStore.editedIndex < 0) {
      productStore.create(this.product);
    } else {
      productStore.update(this.product);
    }
    this.close();
  }

  close(): void {
    setTimeout(() => productStore.closeDialog(), 300);
  }

  get product(): Product {
    return productStore.editedItem as Product;
  }

  get categories(): Array<Category> {
    return categoryModule.items;
  }

  get dialog(): boolean {
    return productStore.dialog;
  }
}
</script>
