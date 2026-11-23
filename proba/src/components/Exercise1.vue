<template>
    <div>
      <h1>Llistat de Productes</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <!-- Enlace a la subruta dinámica -->
          <!--RouterLink :to="`${product.id}`">{{ product.name }}</RouterLink-->
          <RouterLink :to="{name:'ProductDetail',params:{productId:product.id}}">{{ product.name }}</RouterLink>
        </li>
      </ul>
      <!-- Pasamos el array de productos como propiedad a los hijos -->
      <RouterView :products="products" />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
import ProductDetail from "./ProductDetail.vue";
  
  const products = ref([
    { id: 1, name: "Producte 1", description: "Descripció del producte 1." },
    { id: 2, name: "Producte 2", description: "Descripció del producte 2." },
    { id: 3, name: "Producte 3", description: "Descripció del producte 3." },
  ]);
  </script>
  