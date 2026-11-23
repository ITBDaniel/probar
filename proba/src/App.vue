<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/exercise1">Exercici 1: Productes</RouterLink> |
      <RouterLink to="/exercise2">Exercici 2: Comptador</RouterLink> |
      <RouterLink to="/exercise3">Exercici 3: Usuaris</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
console.log("Aplicació iniciada");
</script>

<style>
nav {
  margin-bottom: 20px;
}
</style>
