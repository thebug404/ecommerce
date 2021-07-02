<template>
  <div>
    <v-toolbar elevation="0">
      <v-spacer />
      <v-btn text color="primary">
        <v-icon>mdi-plus</v-icon>
        <span class="ml-3">Agregar producto</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ProductsPage extends Vue {}
</script>
