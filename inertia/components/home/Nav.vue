<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import data from '~/lib/data.json'
import { gsap } from 'gsap'
import * as mascotte from '~/assets/images/mascotte/index_mascotte'

const { mascotteWelcome, mascotteWorking, mascotteDoubt } = mascotte

const hoveredMenuItem = ref<string | null>(null)
const hoveredMenuImage = ref<string | null>(null)

const menuItems = data.menuData.map((item, index) => {
  const images = [mascotteDoubt, mascotteWorking, mascotteWelcome]
  return { ...item, image: images[index] }
})

const splitText = (text: string) => {
  return text
    .split('')
    .map((char) => {
      if (char === ' ') {
        return `<span class="letter" style="display: inline-block; opacity: 0;">&nbsp;</span>`
      }
      return `<span class="letter" style="display: inline-block; opacity: 0;">${char}</span>`
    })
    .join('')
}

watch(hoveredMenuItem, async (newValue) => {
  if (newValue) {
    await nextTick()
    const letters = document.querySelectorAll('.letter')
    gsap.fromTo(
      letters,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.2,
      }
    )
  }
})
</script>

<template>
  <section class="w-full h-20 relative" aria-label="Navigation">
    <ul class="relative flex w-full h-full justify-around z-10">
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        class="relative group h-full flex items-end"
        @mouseover="((hoveredMenuItem = item.name), (hoveredMenuImage = item.image))"
        @mouseleave="((hoveredMenuItem = null), (hoveredMenuImage = null))"
      >
        <a :href="item.link" :title="item.title" class="relative z-20 flex flex-col">
          <p
            class="font-bold font-text text-foreground text-sm flex flex-col group-hover:text-background"
          >
            <span class="text-foreground/50 text-start text-xs group-hover:text-background/50">{{
              item.number
            }}</span
            >{{ item.label }}
          </p>
        </a>
      </li>
    </ul>
    <!-- Background hover layer -->
    <div
      class="absolute top-0 left-[-12.5%] w-screen h-full bg-foreground z-0 transition-all duration-500 ease-in-out"
      :style="{ transform: hoveredMenuItem ? 'scaleY(1)' : 'scaleY(0)', transformOrigin: 'bottom' }"
      :class="{ 'scale-y-100': hoveredMenuItem !== null }"
    ></div>
    <div
      class="absolute top-0 left-0 w-full h-full flex justify-center z-0"
      :class="{
        'opacity-100': hoveredMenuItem !== null,

        'opacity-0': hoveredMenuItem === null,
      }"
    >
      <div class="h-full flex items-center justify-center overflow-hidden">
        <span
          class="text-background font-subtitle italic text-8xl font-bold"
          v-html="hoveredMenuItem ? splitText(hoveredMenuItem) : ''"
        >
        </span>
      </div>
      <img
        v-if="hoveredMenuImage"
        :src="hoveredMenuImage"
        class="absolute bottom-0 right-[-10%] h-60 w-auto"
      />
    </div>
  </section>
</template>

<style scoped></style>
