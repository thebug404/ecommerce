<template>
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class HomeLayout extends Vue {}
</script>
