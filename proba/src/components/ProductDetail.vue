<template>
    <div>
      <h2>Detall del Producte</h2>
      <p>ID: {{ productId }}</p>
      <p>Nom del producte: {{ product?.name }}</p>
      <p>Descripció: {{ product?.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  
  // Recibimos el array de productos como prop
  const props = defineProps({
    products: {
      type: Array,
      required: true,
    },
  });
  
  // Obtenemos el `productId` desde los parámetros de la ruta
  const route = useRoute();
  const productId = computed(() => Number(route.params.productId));
  
  // Buscamos el producto basado en el `productId`
  const product = computed(() =>
    props.products.find((item) => item.id === productId.value)
  );
  </script>
  