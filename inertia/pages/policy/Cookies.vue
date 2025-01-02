<script setup lang="ts">
import PolicyNav from './PolicyNav.vue'
import data from '~/lib/content.json'

const cdata = data.cookies
</script>

<template>
  <AppHead
    title="Cookies"
    description="Politique de l'utilisation de cookies sur le site wdrancourt.fr"
  />
  <section class="flex flex-col-reverse lg:grid lg:grid-cols-3 w-3/4 mx-auto mt-9 gap-5">
    <div class="col-span-2">
      <h1 class="font-title font-bold underline text-4xl text-center">{{ cdata.heading.title }}</h1>
      <p class="mb-9">{{ cdata.heading.content }}</p>
      <div v-for="section in cdata.sections" :key="section.title">
        <h2 class="text-xl underline italic font-bold">• {{ section.title }}</h2>
        <div v-for="content in section.content" :key="content.subtitle" class="mb-2">
          <h3 v-if="content.subtitle" class="underline pl-4">{{ content.subtitle }}</h3>
          <p>{{ content.text }}</p>
        </div>
      </div>
    </div>
    <PolicyNav />
  </section>
</template>
