<script setup lang="ts">
const pages = [
  { url: '/policy', name: 'Mention Légales' },
  { url: '/privacy', name: 'Politique de confidentialité' },
  { url: '/cookies', name: 'Cookies' },
]
</script>

<template>
  <div class="lg:text-end">
    <h2 class="underline font-title text-2xl mb-2">Politique et Mentions Légales</h2>
    <ul>
      <li v-for="page in pages" :key="page.name">
        <Link :href="page.url" class="opacity-70 hover:opacity-100 hover:underline"
          >{{ page.name }}
        </Link>
      </li>
    </ul>
  </div>
</template>
