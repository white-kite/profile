<template>
    <div>
      <h1>Hello, SSR!</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const message = ref('This is a message from the script setup block.');
  </script>
  