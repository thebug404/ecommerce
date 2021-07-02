<template>
  <div>
    <v-toolbar elevation="0">
      <v-spacer />
      <v-btn text color="primary">
        <v-icon>mdi-plus</v-icon>
        <span class="ml-3">Agregar producto</span>
      </v-btn>
    </v-toolbar>

    <main>
      <v-layout wrap>
        <v-flex xs12 sm6>
          <v-card class="my-card pa-3">
            <v-layout wrap>
              <v-flex xs12 md5>
                <v-img
                  src="https://images-na.ssl-images-amazon.com/images/I/615jEC3oisL._AC_SY450_.jpg"
                  height="200px"
                  contain
                ></v-img>
              </v-flex>
              <v-flex xs12 md7>
                <v-card-title class="">Laptop Microsoft</v-card-title>
                <v-card-subtitle class="grey--text"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis dolores illum at temporibus voluptates
                  enim</v-card-subtitle
                >
                <div class="">
                  <v-chip class="mx-4" outlined color="success"
                    >Computadoras</v-chip
                  >
                  <h1 class="px-4 pt-2"><strong>$890</strong></h1>
                </div>
                  
                <v-card-actions class="pb-0">
                  <v-rating
                    background-color="grey lighten-2"
                    color="yellow"
                    half-increments
                    hover
                    length="5"
                    readonly
                    size="20"
                    value="3"
                    class="py-2 px-3"
                    dense
                  ></v-rating>
                  <v-spacer></v-spacer>
                  <span>29.oct.2021</span>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ProductsPage extends Vue {
  show = false;
}
</script>

<style scoped>
.my-card {
  position: relative;
}

.my-card-content-image {
  position: absolute;
  left: 0;
  right: 0;
  top: -25px;
}
</style>
