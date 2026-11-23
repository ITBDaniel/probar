<template>
    <div>
      <p>El valor del comptador és: {{ count }}</p>
    </div>
  </template>
  
  <script setup>
  import { inject } from "vue";
  
  const count = inject("count");
  </script>
  