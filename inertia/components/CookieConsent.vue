<script setup>
import { onMounted, ref } from 'vue'

const showBanner = ref(false)
const preferences = ref({
  necessary: true, // Toujours activé
  analytics: false,
  marketing: false,
})

const emit = defineEmits(['update:preferences'])

onMounted(() => {
  // Vérifie si le consentement existe déjà
  const savedConsent = localStorage.getItem('cookie-consent')
  if (!savedConsent) {
    showBanner.value = true
  } else {
    preferences.value = JSON.parse(savedConsent)
  }
})

const savePreferences = (accepted = false) => {
  if (accepted) {
    // Si l'utilisateur accepte tout
    preferences.value = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
  }

  localStorage.setItem('cookie-consent', JSON.stringify(preferences.value))

  // Émet les préférences pour le parent
  emit('update:preferences', preferences.value)

  // Cache la bannière
  showBanner.value = false

  // Appel à l'API pour sauvegarder côté serveur
  fetch('/api/cookie-preferences', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preferences.value),
  })
}
</script>

<template>
  <div
    v-if="showBanner"
    class="fixed bottom-10 right-1 bg-white shadow-md p-4 border rounded-lg w-80"
    style="z-index: 1000"
  >
    <div class="flex flex-col space-y-2">
      <h3 class="text-sm font-semibold">🍪 Gestion des cookies</h3>
      <p class="text-xs text-foreground/70">
        Nous utilisons des cookies pour améliorer votre expérience sur notre site. Gérez vos
        préférences ici :
      </p>

      <div class="flex flex-col space-y-1">
        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="necessary"
            v-model="preferences.necessary"
            disabled
            class="rounded border-gray-300"
          />
          <label for="necessary" class="text-xs">Nécessaires (obligatoires)</label>
        </div>

        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="analytics"
            v-model="preferences.analytics"
            class="rounded border-gray-300"
          />
          <label for="analytics" class="text-xs">Analytiques</label>
        </div>

        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="marketing"
            v-model="preferences.marketing"
            class="rounded border-gray-300"
          />
          <label for="marketing" class="text-xs">Marketing</label>
        </div>
      </div>

      <div class="flex justify-end space-x-2 mt-2">
        <button
          @click="savePreferences(true)"
          class="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
        >
          Tout accepter
        </button>
        <button
          @click="savePreferences()"
          class="px-3 py-1 bg-gray-200 text-xs rounded hover:bg-gray-300"
        >
          Enregistrer
        </button>
      </div>
    </div>
  </div>
</template>
