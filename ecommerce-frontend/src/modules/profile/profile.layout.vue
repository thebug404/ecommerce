<template>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class ProfileLayout extends Vue {}
</script>
