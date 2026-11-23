<template>
    <div>
      <h1>Llistat d'Usuaris</h1>
      <input type="text" v-model="search" placeholder="Filtra usuaris" />
      <ul>
        <li v-for="user in filteredUsers" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from "vue";
  
  const users = ref([
    { id: 1, name: "Francesc" },
    { id: 2, name: "Marta" },
    { id: 3, name: "Pere" },
  ]);
  
  const search = ref("");
  const filteredUsers = computed(() =>
    users.value.filter((user) =>
      user.name.toLowerCase().includes(search.value.toLowerCase())
    )
  );
  
  watch(search, (newValue) => {
    console.log("Filtre canviat:", newValue);
  });
  </script>
  