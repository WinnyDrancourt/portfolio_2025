<script setup lang="ts">
import data from '~/lib/data.json'
import logo from '~/assets/images/logo-green.png'
import { ref } from 'vue'
import { Menu } from 'lucide-vue-next'

defineProps<{
  messages: Record<string, string | Record<string, string>>
}>()
const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
const menuItems = data.menuData
</script>

<template>
  <header
    class="flex sticky top-2 justify-end md:justify-center md:gap-5 md:px-4 py-2 md:shadow-lg md:bg-background/20 md:backdrop-blur-md z-20"
    aria-label="Navigation"
  >
    <Link href="/" class="">
      <img :src="logo" class="h-10 w-auto" alt="Winny Drancourt Logo" />
    </Link>
    <ul class="hidden md:flex h-full gap-5 z-10">
      <li v-for="(item, index) in menuItems" :key="index" class="group h-full flex">
        <Link :href="item.link" :title="item.title" class="flex flex-col hover:scale-110">
          <p
            class="font-bold font-text text-foreground/80 text-sm flex flex-col group-hover:text-foreground"
          >
            <span class="text-foreground/50 text-xs group-hover:text-foreground/30">{{
              item.number
            }}</span
            >{{ item.label }}
          </p>
        </Link>
      </li>
    </ul>
    <button @click="isMenuOpen = !isMenuOpen" class="p-2 transition md:hidden" aria-label="Menu">
      <Menu />
    </button>
    <div v-if="isMenuOpen" class="fixed inset-0 z-50 flex" @click.self="closeMenu">
      <aside
        class="fixed w-48 right-0 bg-background/90 shadow-xl h-full text-end px-4 transform transition-transform duration-300"
        :class="{ '-translate-x-full': !isMenuOpen }"
      >
        <div class="p-4">
          <button @click="closeMenu" class="p-2 rounded-md hover:bg-gray-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul class="flex flex-col gap-4 p-4">
          <li v-for="(item, index) in data.menuData" :key="index" class="relative">
            <Link :href="item.link" :title="item.title">
              {{ item.label }}
            </Link>
          </li>
          <li>
            <Link href="/sitemap">Plan de site</Link>
          </li>
          <li>
            <Link href="/policy">Mentions légales</Link>
          </li>
          <li>
            <Link href="/">©2025 - Winny Drancourt</Link>
          </li>
        </ul>
      </aside>
    </div>
  </header>
  <main class="flex-1 justify-center font-text text-foreground text-balance">
    <slot />
  </main>
  <Footer />
  <ToastManager :messages="messages" />
</template>
