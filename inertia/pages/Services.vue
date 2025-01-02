<template>
  <AppHead title="Services" description="Découvrez les services proposé par Wdrancourt.fr" />
  <section class="py-16 px-4">
    <!-- En-tête de section -->
    <div class="max-w-4xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-bold mb-6">L'Art de Construire votre Présence Web</h2>
      <p class="text-xl text-foreground/80">
        Une approche modulaire pour des solutions web évolutives
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <Accordion type="single" collapsible :default-value="activeSection">
        <AccordionItem value="vision">
          <AccordionTrigger>Ma Vision du Développement Web</AccordionTrigger>
          <AccordionContent>
            <div class="space-y-8 p-4">
              <!-- Introduction -->
              <div class="prose max-w-none">
                <p class="text-lg">
                  Tout comme les Mayas ont bâti leurs cités pierre par pierre, je conçois votre
                  présence web de manière modulaire. Chaque composant est pensé pour s'intégrer
                  harmonieusement dans un ensemble évolutif.
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
                  <p class="text-gray-600">
                    {{ pilier.description }}
                  </p>
                </div>
              </div>

              <!-- Champs d'action -->
              <div class="rounded-lg shadow-lg p-6 mt-8">
                <h3 class="text-xl font-semibold mb-4">Champs d'action</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  <div
                    v-for="(domain, index) in domaines"
                    :key="index"
                    class="flex items-start space-x-3"
                  >
                    <component :is="domain.icon" class="w-6 h-6 text-blue-500 mt-1" />
                    <div>
                      <h4 class="font-medium">{{ domain.title }}</h4>
                      <p class="text-gray-600">{{ domain.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <!-- Offres et Packages -->
        <AccordionItem value="packages">
          <AccordionTrigger>Les Solutions</AccordionTrigger>
          <AccordionContent>
            <div class="p-4">
              <div class="grid md:grid-cols-3 gap-8">
                <div
                  v-for="(pkg, index) in packages"
                  :key="index"
                  class="rounded-lg shadow-lg"
                  :class="{ 'border-2 border-primary': pkg.recommended }"
                >
                  <div class="p-6">
                    <div v-if="pkg.recommended" class="text-center -mt-8 mb-4">
                      <span
                        class="bg-background text-foreground border-1 border-primary px-4 py-1 rounded-full text-sm"
                      >
                        Recommandé
                      </span>
                    </div>
                    <div class="flex justify-center">
                      <component :is="pkg.icon" class="w-12 h-12 mb-4" :class="pkg.iconClass" />
                    </div>
                    <h3 class="text-2xl text-center font-bold mb-2">{{ pkg.title }}</h3>
                    <p class="text-center text-lg font-semibold text-foreground/70 mb-4">
                      {{ pkg.price }}
                    </p>
                    <p class="text-foreground/70 mb-6 text-center">{{ pkg.description }}</p>
                    <ul class="space-y-3">
                      <li
                        v-for="(feature, i) in pkg.features"
                        :key="i"
                        class="flex items-start space-x-2"
                      >
                        <svg
                          class="w-5 h-5 text-green-500 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span class="text-foreground/70">{{ feature }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="text-center mt-8">
                <button
                  @click="handleContact"
                  class="py-3 px-8 bg-primary hover:bg-primary text-background rounded-md text-lg transition-colors"
                >
                  Discuter de votre projet
                </button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import { BarChart, Database, Globe, LineChart, Puzzle, Settings, Workflow } from 'lucide-vue-next'
import AppHead from '~/components/AppHead.vue'

const activeSection = ref('vision')
const piliers = ref([
  {
    title: 'Architecture Modulaire',
    description: 'Des composants indépendants et réutilisables pour une flexibilité maximale.',
    icon: Puzzle,
    iconClass: 'text-blue-500',
  },
  {
    title: 'Évolution Progressive',
    description: 'Une croissance organique de votre plateforme selon vos besoins.',
    icon: Workflow,
    iconClass: 'text-purple-500',
  },
  {
    title: 'Performance Durable',
    description: 'Des solutions optimisées pour des performances à long terme.',
    icon: LineChart,
    iconClass: 'text-green-500',
  },
])

const domaines = ref([
  {
    title: 'Sites Web Complets',
    description: 'De la vitrine au e-commerce, des solutions sur mesure.',
    icon: Globe,
  },
  {
    title: 'Fonctionnalités Spécifiques',
    description: 'Modules complémentaires pour enrichir votre site.',
    icon: Puzzle,
  },
  {
    title: 'API & Intégrations',
    description: 'Connexion avec vos outils existants.',
    icon: Database,
  },
  {
    title: 'Tableaux de Bord',
    description: 'Visualisation et analyse de vos données.',
    icon: BarChart,
  },
])

const packages = ref([
  {
    title: 'Site Vitrine',
    price: 'À partir de 1000€',
    features: [
      'Design responsive personnalisé',
      '4-6 pages essentielles',
      'Blog basique intégré',
      'Optimisation SEO de base',
    ],
    icon: Globe,
    iconClass: 'text-blue-500',
    description: 'La base solide pour votre présence en ligne.',
  },
  {
    title: 'Site Business',
    price: 'À partir de 2500€',
    features: [
      'Tout le pack Site Vitrine +',
      'Blog avancé',
      'Système de réservation',
      'Tableau de bord analytics',
    ],
    icon: BarChart,
    iconClass: 'text-purple-500',
    description: "Pour les entreprises qui veulent plus qu'une simple vitrine.",
    recommended: true,
  },
  {
    title: 'Site Sur-Mesure',
    price: 'Sur devis',
    features: [
      'Architecture personnalisée',
      'Fonctionnalités avancées',
      'Intégrations sur mesure',
      'API personnalisée',
    ],
    icon: Settings,
    iconClass: 'text-green-500',
    description: 'Une solution unique pour des besoins spécifiques.',
  },
])

const handleContact = () => {
  router.visit('/contact', {
    method: 'get',
  })
}
</script>
