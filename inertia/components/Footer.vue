<script setup lang="ts">
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import logo from '~/assets/images/logo-green.png'
import data from '~/lib/data.json'

interface Link {
  label: string
  href: string
}

const classes = data.classData

const iconMap: Record<string, any> = {
  Email: Mail,
  Linkedin: Linkedin,
  GitHub: Github,
}

const links: Link[] = data.linkData
</script>
<template>
  <footer
    class="flex items-center justify-end md:justify-around w-full gap-5 mb-1 border-0 border-t border-foreground/10 py-1 z-20"
    aria-label="Footer"
  >
    <Link href="/" title="home"
      ><img :src="logo" alt="logo" class="w-12 h-auto opacity-70 hover:opacity-100 hover:rotate-6"
    /></Link>
    <div
      class="hidden md:flex items-center text-center gap-1 font-text text-xs text-balance text-foreground/70"
    >
      <Link href="/" class="hover:text-foreground hover:scale-105">©2025 - Winny Drancourt</Link>
      <p>|</p>
      <Link href="/sitemap" class="hover:text-foreground hover:scale-105">Plan de site</Link>
      <p>|</p>
      <Link href="/policy" class="hover:text-foreground hover:scale-105">Mentions légales</Link>
    </div>
    <ul class="flex gap-2">
      <li v-for="link in links" :key="link.label">
        <Link :href="link.href" :title="link.label" class="flex items-center gap-2 group">
          <component
            :is="iconMap[link.label]"
            class="w-6 h-6 text-foreground/70 hover:text-foreground hover:scale-105 group-hover:rotate-6"
          />
        </Link>
      </li>
    </ul>
  </footer>
</template>
