<script setup="ts">
import data from '~/lib/content.json'

const piliers = data.services.piliers

const domaines = data.services.domains
</script>

<template>
  <div class="space-y-8 p-4">
    <div class="prose max-w-none">
      <p class="text-lg">
        Tout comme les Mayas ont bâti leurs cités pierre par pierre, je conçois votre présence web
        de manière modulaire. Chaque composant est pensé pour s'intégrer harmonieusement dans un
        ensemble évolutif.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-8 mt-8">
      <div
        v-for="(pilier, index) in piliers"
        :key="index"
        class="rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
      >
        <component :is="pilier.icon" class="w-12 h-12 mb-4" :class="pilier.iconClass" />
        <h3 class="text-xl font-semibold mb-3">
          {{ pilier.title }}
        </h3>
        <p class="text-foreground/70">
          {{ pilier.description }}
        </p>
      </div>
    </div>

    <!-- Champs d'action -->
    <div class="rounded-lg shadow-lg p-6 mt-8">
      <h3 class="text-xl font-semibold mb-4">Champs d'action</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="(domain, index) in domaines" :key="index" class="flex items-start space-x-3">
          <component :is="domain.icon" class="w-6 h-6 text-blue-500 mt-1" />
          <div>
            <h4 class="font-medium">{{ domain.title }}</h4>
            <p class="text-foreground/70">{{ domain.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
