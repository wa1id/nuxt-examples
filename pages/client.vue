<template>
  <div v-if="pending">Loading...</div>
  <div v-else>
    <h1>Client</h1>
    <h2>"{{ quote.content }}"</h2>
    <h3>- {{ quote.author }}</h3>
  </div>
</template>

<script setup>
const { pending, data: quote } = useFetch('https://api.quotable.io/random', {
  lazy: true,
  server: false,
})
</script>
