<script setup lang="ts">
defineProps<{
  draw: any
}>()

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}
</script>

<template>
  <div class="flex flex-col gap-4 list min-w-100" v-if="draw && draw.draws">
    <div v-for="(draw, index) in draw.draws" :key="index" class="flex flex-col gap-4 result border-solid border-bottom border-1 rounded p-6 border-gray-300 bg-white text-gray-800 shadow-md
    ">
      <h2 class="mt-2">
        {{ formatDate(draw.date) }}
      </h2>

      <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-2">
          <div>Winning numbers:</div>
          <div v-for="(number, index) in draw.numbers" :key="index">
            <span>{{ number }}</span>
          </div>
        </div>

        <div class="flex flex-row gap-2">
          <div>Euro numbers:</div>
          <div v-for="(number, index) in draw.additionalNumbers" :key="index">
            <span>{{ number }}</span>
          </div>
        </div>
      </div>

      <div>
        <span class="font-bold">Jackpot:</span>
        {{ formatCurrency(draw.jackpot) }}
      </div>
    </div>
  </div>
</template>
