<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { Info, Loader } from 'lucide-vue-next'
import FormInput from '~/components/FormInput.vue'

defineProps<{ isSent: boolean }>()
const form = useForm({
  name: '',
  email: '',
  message: '',
})
</script>

<template>
  <AppHead
    title="Contact"
    description="Contact Wdrancourt, pour donner vie a tes outils numériques"
  />
  <Alert v-if="isSent">
    <Info class="w-4 h-4" />
    <AlertTitle>Message envoyé !</AlertTitle>
    <AlertDescription>
      Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.
    </AlertDescription>
  </Alert>
  <section
    class="flex justify-center items-center min-h-[calc(100vh-10rem)] w-3/4 mx-auto"
    aria-label="formulaire de contact"
  >
    <div class="w-full">
      <h1 class="font-title text-5xl text-center my-5">Contact</h1>
      <div class="w-full md:w-2/5 text-center mx-auto">
        <form
          @submit.prevent="
            form.post('/contact', { onSuccess: () => form.reset(), preserveScroll: true })
          "
          class="grid gap-3"
        >
          <FormInput
            v-model="form.name"
            label="Votre nom :"
            :error="form.errors.name"
            :disabled="form.processing"
          />
          <FormInput
            v-model="form.email"
            type="email"
            label="Votre email :"
            :error="form.errors.email"
            :disabled="form.processing"
          />
          <FormInput
            v-model="form.message"
            label="Votre message :"
            :error="form.errors.message"
            :disabled="form.processing"
          />
          <Button type="submit" :disabled="form.processing">
            <Loader v-if="form.processing" class="mr-2 h-4 w-4 animate-spin" />
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>
