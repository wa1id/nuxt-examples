<template>
  <div>
    <h1>Preload (SSG)</h1>
    <h2>"{{ quote.content }}"</h2>
    <h3>- {{ quote.author }}</h3>
  </div>
</template>

<script setup>
const { data: quote } = await useFetch('https://api.quotable.io/random')
</script>
