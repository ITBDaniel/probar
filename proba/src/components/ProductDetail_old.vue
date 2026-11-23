<template>
    <div>
      <h2>Detall del Producte</h2>
      <p>ID: {{ productId }}</p>
      <p>Nom del producte: {{ product?.name }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  
  // Obtenemos el `productId` desde los parámetros de la ruta
  const productId = computed(() => Number(route.params.productId));
  
  // Aquí puedes hacer una búsqueda del producto en una lista local o incluso llamar a una API
  const products = [
    { id: 1, name: "Producte 1" },
    { id: 2, name: "Producte 2" },
    { id: 3, name: "Producte 3" },
  ];
  
  // Buscamos el producto basado en el `productId`
  const product = computed(() =>
    products.find((item) => item.id === productId.value)
  );
  </script>
  