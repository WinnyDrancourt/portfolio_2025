<script setup lang="ts">
import logo from '~/assets/images/logo-green.png'
import { Handshake } from 'lucide-vue-next'

defineProps<{
  messages: Record<string, string | Record<string, string>>
}>()
const handlePreferencesUpdate = (preferences: Record<string, boolean>) => {
  console.log('Préférences mises à jour :', preferences)
  // Gérer ici les actions nécessaires (par exemple, initialiser Matomo ou désactiver des services tiers)
}
</script>

<template>
  <div class="flex flex-col lg:h-screen pt-4">
    <header class="w-full lg:w-4/5 mx-auto">
      <section
        class="flex flex-col lg:flex-row justify-between w-full gap-5 h-full px-4"
        aria-label="Introduction"
      >
        <div class="flex gap-4 items-center w-full lg:w-1/6 text-start">
          <Handshake class="h-6 w-6 text-foreground" />
          <p>Ouvert pour toutes collaborations et offres</p>
        </div>
        <Link href="/" class="flex-grow">
          <img :src="logo" class="h-10 w-auto mx-auto" alt="Winny Drancourt Logo" />
        </Link>
        <p class="flex lg:flex-col lg:w-1/6 w-full justify-end text-end">
          Folio&nbsp;<span>Vol.1-2025</span>
        </p>
      </section>
    </header>
    <main
      class="flex-grow pt-20 justify-center overflow-hidden font-text text-foreground text-balance bg-rock bg-cover bg-center"
    >
      <slot />
    </main>
    <CookieConsent @update:preferences="handlePreferencesUpdate" />
    <Footer />
    <ToastManager :messages="messages" />
  </div>
</template>
