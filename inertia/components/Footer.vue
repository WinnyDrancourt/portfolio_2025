<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import logo from '~/assets/images/logo-green.png'

const links = [
  { label: 'Email', href: 'mailto:contact@wdrancourt.fr', icon: Mail, target: '_self' },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/winny-drancourt/',
    icon: Linkedin,
    target: '_blank',
  },
  { label: 'GitHub', href: 'https://github.com/WinnyDrancourt', icon: Github, target: '_blank' },
]
</script>

<template>
  <footer
    class="flex items-center justify-end md:justify-around w-full gap-5 mb-1 border-0 border-t border-foreground/10 py-1 z-20"
    aria-label="Footer"
  >
    <a href="/" title="home">
      <img :src="logo" alt="logo" class="w-12 h-auto opacity-70 hover:opacity-100 hover:rotate-6" />
    </a>
    <div
      class="hidden md:flex items-center text-center gap-1 font-text text-xs text-balance text-foreground/70"
    >
      <a href="/" class="hover:text-foreground hover:scale-105">©2025 - Winny Drancourt</a>
      <p>|</p>
      <a href="/sitemap" class="hover:text-foreground hover:scale-105">Plan de site</a>
      <p>|</p>
      <a href="/policy" class="hover:text-foreground hover:scale-105">Mentions légales</a>
    </div>
    <ul class="flex gap-2">
      <li v-for="link in links" :key="link.label">
        <a
          :href="link.href"
          :title="link.label"
          :target="link.target"
          class="flex items-center gap-2 group"
          rel="noopener noreferrer"
        >
          <component
            :is="link.icon"
            class="w-6 h-6 text-foreground/70 hover:text-foreground hover:scale-105 group-hover:rotate-6"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>
