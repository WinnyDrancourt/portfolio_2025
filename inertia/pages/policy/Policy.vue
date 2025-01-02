<script setup lang="ts">
import PolicyNav from './PolicyNav.vue'
import data from '~/lib/content.json'

const pdata = data.policy
</script>
<template>
  <AppHead title="Mentions Légales" description="Mentions Legales." />
  <section
    class="flex flex-col-reverse lg:grid lg:grid-cols-3 w-3/4 mx-auto mt-9 gap-5"
    aria-label="Mentions Légales"
  >
    <div class="flex flex-col col-span-2 gap-2">
      <h1 class="font-title font-bold underline text-4xl text-center">Mentions Légales :</h1>
      <div v-for="item in pdata" :key="item.title" class="mb-4">
        <h2 class="text-xl underline italic font-bold">{{ item.title }}</h2>
        <p v-for="text in item.text" :key="text">{{ text }}</p>
      </div>
    </div>
    <PolicyNav />
  </section>
</template>
