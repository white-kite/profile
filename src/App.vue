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

<style>
div{
    position: relative;
    top:25px;
    letter-spacing: 3px; /* 자간 설정 */
    font-size: 20px; /* 글씨 크기 설정 */
}
</style>