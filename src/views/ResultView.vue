<script setup lang="ts">
import { computed } from 'vue'
import TheResults from '../components/TheResults.vue'
import { useResultsStore } from '../stores/results'
import LoadingSpinnerOverlay from '../components/LoadingSpinnerOverlay.vue'

const results = useResultsStore()

const draw = computed(() => results.draw)
const loading = results.loading
</script>

<template>
  <section class="w-full flex flex-col">
    <h1 class="text-2xl font-bold">Draws</h1>
    <LoadingSpinnerOverlay v-if="loading" />
    <section v-if="draw" class="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row">
      <TheResults v-for="(result, index) in draw" :key="index" :draw="result" />
    </section>
  </section>
</template>
