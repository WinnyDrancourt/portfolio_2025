<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as parallaxImages from '~/assets/images/parallax/index_parallax'
import { ChevronsDown } from 'lucide-vue-next'

const classes = {
  title: 'text-6xl lg:text-8xl font-bold font-title italic',
  subTitle: 'font-subtitle font-bold',
  bottomContainer: 'flex flex-col justify-center items-center gap-10 p-4 lg:w-1/4 text-center',
  icon: 'w-10 h-10 text-foreground',
}

const { pilarL, pilarR, objectL, objectR, floor, desk } = parallaxImages

const pilarLRef = ref(null)
const pilarRRef = ref(null)
const floorRef = ref(null)
const objectLRef = ref(null)
const objectRRef = ref(null)
const deskRef = ref(null)
const titleRef = ref(null)
const textRef = ref(null)
const placeholderRef = ref(null)

onMounted(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY
    const screenHeight = window.innerHeight

    // Normalized scroll position (0 at top, 1 at bottom)
    const scrollPos = Math.min(scrollY / screenHeight, 1)

    if (pilarLRef.value && pilarRRef.value) {
      // Scale up and translate pillars
      pilarLRef.value.style.transform = `
        scale(${1 + scrollPos * 0.3})
        translateX(${scrollPos * -80}%)`
      pilarRRef.value.style.transform = `
        scale(${1 + scrollPos * 0.3})
        translateX(${scrollPos * 80}%)`

      // Opacity for disappearing pillars
      const opacity = 1 - scrollPos
      pilarLRef.value.style.opacity = opacity
      pilarRRef.value.style.opacity = opacity
    }

    if (floorRef.value) {
      // Fade out floor
      floorRef.value.style.opacity = 1 - scrollPos * 1.1
    }
    if (deskRef.value) {
      const scaleDown = 1 - scrollPos * 0.5
      const translateY = scrollPos * 100 // Descend proportionnellement au scroll
      deskRef.value.style.transform = `
      scale(${scaleDown})
        translateY(${scrollPos * 25}%)`
      deskRef.value.style.opacity = 1 - scrollPos * 1.1
    }
    if (objectLRef.value && objectRRef.value) {
      // Scale down objects and desk
      const scaleDown = 1 - scrollPos * 0.5
      objectLRef.value.style.transform = `scale(${scaleDown})`
      objectRRef.value.style.transform = `scale(${scaleDown})`
      objectLRef.value.style.opacity = 1 - scrollPos * 1.1
      objectRRef.value.style.opacity = 1 - scrollPos * 1.1
    }

    if (titleRef.value && textRef.value) {
      // Scale up title and text
      const scaleUp = 1 + scrollPos * 0.5
      titleRef.value.style.transform = `scale(${scaleUp})`
      textRef.value.style.transform = `scale(${scaleUp})`
    }

    if (placeholderRef.value) {
      placeholderRef.value.style.transform = `translateY(${scrollPos * -200}%)`
      placeholderRef.value.style.opacity = 1 - scrollPos * 1.1
    }
  }

  window.addEventListener('scroll', handleScroll)

  // Cleanup on component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div
    class="hidden lg:block parallax fixed inset-0 w-full h-screen overflow-hidden"
    aria-label="Parallax"
  >
    <img
      :src="floor"
      ref="floorRef"
      class="absolute bottom-0 left-0 w-full object-cover"
      alt="Parallax floor"
    />
    <img
      :src="objectL"
      ref="objectLRef"
      class="absolute bottom-10 left-[13%] scale-110"
      alt="Objects left"
    />
    <img
      :src="objectR"
      ref="objectRRef"
      class="absolute bottom-14 right-[7%] scale-110"
      alt="Objects right"
    />
    <img
      :src="pilarL"
      ref="pilarLRef"
      class="absolute bottom-0 left-0 h-full object-cover"
      alt="Pilar left"
    />
    <img
      :src="pilarR"
      ref="pilarRRef"
      class="absolute bottom-0 right-0 h-full object-cover"
      alt="Pilar right"
    />
    <img :src="desk" ref="deskRef" class="absolute bottom-10 left-[48%]" alt="Desk" />
    <div class="copy absolute inset-0 flex flex-col items-center justify-center text-center">
      <div
        ref="placeholderRef"
        class="#bg-[#DBD4D1]/20 backdrop-blur-sm flex flex-col items-center justify-center"
      >
        <h1 ref="titleRef" :class="classes.title">
          <span :class="classes.subTitle">Winny&nbsp;</span> Drancourt
        </h1>
        <div ref="textRef" class="flex gap-2 text-sm items-center">
          <ChevronsDown class="w-5 h-5" />
          <p>Défilez pour découvrir mon univers !</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Add smooth transitions for better animations */
img,
h1,
div.copy {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
</style>
