<template>
    <div>
      <h1>Comptador</h1>
      <CounterButtons />
      <CounterDisplay />
    </div>
  </template>
  
  <script setup>
  import { provide, ref } from "vue";
  import CounterButtons from "@/components/CounterButtons.vue";
  import CounterDisplay from "@/components/CounterDisplay.vue";
  
  const count = ref(0);
  provide("count", count);
  </script>
  