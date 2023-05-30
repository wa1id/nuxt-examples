<template>
  <div v-if="pending">Loading ...</div>
  <div v-else>
    <h1>SSR Lazy</h1>
    <h2>"{{ quote.content }}"</h2>
    <h3>- {{ quote.author }}</h3>
  </div>
</template>
<script setup>
const { pending, data: quote } = useLazyFetch('https://api.quotable.io/random')
</script>
