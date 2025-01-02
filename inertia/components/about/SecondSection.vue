<script setup lang="ts">
import * as mascotte from '~/assets/images/mascotte/index_mascotte'
import data from '~/lib/content.json'

const adata = data.about

const { mascotteDoubtL } = mascotte
</script>
<template>
  <section class="mx-auto w-4/5 flex flex-col items-center justify-center">
    <div class="lg:h-[60vh] rounded-lg flex flex-col lg:flex-row items-end lg:w-5/6">
      <div>
        <Motion
          is="img"
          preset="slideVisibleRight"
          :src="mascotteDoubtL"
          class="object-fit rounded-md max-h-[50dvh]"
          alt="portrait de Winny"
        />
      </div>
      <div
        class="bg-foreground border border-[#14D1D9] rounded-md shadow-[inset_0px_0px_20px_5px_rgba(20,_209,_217,_0.5)] -mt-2 lg:mt-0 lg:-ml-60 -z-10 flex lg:justify-end items-center flex-1"
      >
        <Motion
          is="p"
          preset="slideVisibleLeft"
          class="p-4 text-md lg:text-end text-background w-5/6"
        >
          {{ adata.mascotte[1] }}
        </Motion>
      </div>
    </div>
    <div
      class="lg:h-[60vh] rounded-lg flex flex-col-reverse lg:flex-row items-center lg:w-5/6 my-10"
    >
      <div
        class="bg-foreground border border-[#14D1D9] rounded-md shadow-[inset_0px_0px_20px_5px_rgba(20,_209,_217,_0.5)] lg:mt-0 -z-10 flex items-center text-center p-2 flex-1"
      >
        <Motion is="p" preset="slideVisibleBottom" class="p-4 text-xl text-background">
          {{ adata.me[1] }}
        </Motion>
      </div>
    </div>
  </section>
</template>
