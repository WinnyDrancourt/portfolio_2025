<script setup lang="ts">
defineProps<{
  routes: {
    url: string
    name: string
  }[]
}>()
</script>
<template>
  <AppHead title="Plan du site" description="Liste des pages de notre site" />
  <section class="my-9 w-3/4 mx-auto text-center">
    <h1 class="font-title font-bold underline text-4xl text-center mb-2">Plan du site</h1>
    <ul>
      <li v-for="route in routes" :key="route.url">
        <Link :href="route.url" class="opacity-70 hover:opacity-100 hover:underline mb-2"
          >{{ route.name }}
        </Link>
      </li>
    </ul>
  </section>
</template>
