<template>
    <header class="header">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <Navigation />
    </header>
  </template>
  
  <script setup>
  import Navigation from './Navigation.vue';
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #333;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .logo {
    height: 50px;
  }
  </style>
  