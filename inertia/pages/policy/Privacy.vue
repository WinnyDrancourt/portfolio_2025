<script setup lang="ts">
import PolicyNav from './PolicyNav.vue'
import data from '~/lib/content.json'

const pdata = data.privacy
</script>

<template>
  <AppHead
    title="Politique de confidentialité"
    description="Politique de confidentialité sur le site wdrancourt.fr"
  />
  <section
    class="flex flex-col-reverse lg:grid lg:grid-cols-3 w-3/4 mx-auto mt-9 gap-5"
    aria-label="Politique de confidentialité"
  >
    <div class="col-span-2">
      <h1 class="font-title font-bold underline text-4xl text-center mb-2">
        {{ pdata.heading.title }}
      </h1>
      <p class="mb-9">{{ pdata.heading.content }}</p>
      <div v-for="section in pdata.sections" :key="section.title" class="mb-9">
        <h2 class="text-xl underline italic font-bold">{{ section.title }}</h2>
        <div v-for="content in section.content" :key="content.subtitle" class="mb-2">
          <h3 v-if="content.subtitle" class="underline pl-4">• {{ content.subtitle }}</h3>
          <p>{{ content.text }}</p>
          <ul v-if="content.list">
            <li v-for="list in content.list">• {{ list }}</li>
          </ul>
        </div>
      </div>
    </div>
    <PolicyNav />
  </section>
</template>
