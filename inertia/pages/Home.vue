<script setup lang="ts">
import HomeNav from '~/components/home/Nav.vue'
import HomeLayout from '~/layouts/HomeLayout.vue'
import cData from '~/lib/data.json'
import { BrainCircuit, Orbit } from 'lucide-vue-next'
import * as parallaxImages from '~/assets/images/parallax/index_parallax'

const { deskS } = parallaxImages

defineOptions({ layout: HomeLayout })
const classes = cData.classData
</script>

<template>
  <AppHead title="Acceuil" description="Winny Drancourt - Développeur Web Freelance à Lille" />
  <div class="h-full flex flex-col gap-5 lg:w-4/5 mx-auto text-center">
    <h1 :class="classes.title"><span :class="classes.subTitle">Winny</span> Drancourt</h1>
    <HomeNav />
    <section
      aria-label="Présentation"
      class="flex flex-col lg:flex-row justify-center flex-1 h-full pt-1/8"
    >
      <div :class="classes.bottomContainer" class="lg:text-start">
        <BrainCircuit :class="classes.icon" />
        <div>
          <p class="text-sm">
            Winny Drancourt, développeur web indépendant à Lille, transformant les idées en
            solutions numériques sur mesure.
          </p>
        </div>
      </div>
      <div class="flex flex-col flex-grow justify-center items-center gap-5 py-3">
        <img
          :src="deskS"
          class="object-contain h-2/3"
          alt="Developpeur devant son ordi dans un style maya"
        />
        <p :class="classes.subTitle" class="italic text-m">
          Développeur web Français, prêt à innover.
        </p>
      </div>
      <div :class="classes.bottomContainer" class="lg:text-end">
        <Orbit :class="classes.icon" />
        <p class="text-sm">
          Passionné par la création d'expériences numériques mémorables, je développe un code
          évolutif qui résiste à l'épreuve du temps.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
