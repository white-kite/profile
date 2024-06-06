<template>
  <v-app>
    <CustomHeader/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import CustomHeader from './components/Header.vue';
</script>
