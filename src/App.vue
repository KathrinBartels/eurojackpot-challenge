<script setup lang="ts">
import './assets/main.css'
import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <div class="flex min-h-[100vh] flex-col min-h-screen">
    <header class="md:container md:mx-auto p-4 flex flex-col">
      <TheNavigation />
    </header>
    <main class="md:container md:mx-auto p-4 flex flex-col">
      <RouterView />
    </main>
  </div>
</template>
