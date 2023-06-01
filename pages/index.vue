<template>
  <!-- <div class="spacer"></div> -->
  <header>
    <nav>
      <ul>
        <li><NuxtLink href="/default-ssr">Default SSR</NuxtLink></li>
        <li><NuxtLink href="/ssr-lazy">SSR Lazy</NuxtLink></li>
        <li><NuxtLink href="/client">Client</NuxtLink></li>
        <li><NuxtLink href="/preload">SSG (caveat)</NuxtLink></li>
        <li><a href="/preload">SSG (without NuxtLink)</a></li>
        <li><NuxtLink href="/isr">ISR</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
useHead({
  title: 'Nuxt Demo',
})
</script>
