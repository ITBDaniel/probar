<template>
    <div>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </template>
  
  <script setup>
  import { inject } from "vue";
  
  const count = inject("count");
  const increment = () => count.value++;
  const decrement = () => count.value--;
  </script>
  