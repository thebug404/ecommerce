<template>
  <v-card text elevation="0">
    <div class="text-center pt-5">
      <v-avatar size="100">
        <img
          :src="`https://ui-avatars.com/api/?name=${user.first_name}&rounded=true&size=100px`"
          alt=""
        />
      </v-avatar>
    </div>
    <v-card-title class="d-block text-center">{{
      user.first_name
    }}</v-card-title>
    <v-card-subtitle class="d-block text-center">{{
      user.email
    }}</v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

const UserCardProps = Vue.extend({
    props: { user: Object }
})

@Component
export default class UserCardComponent extends UserCardProps {}
</script>
