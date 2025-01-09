<script setup lang="ts">
import * as mascotte from '~/assets/images/mascotte/index_mascotte'
import data from '~/lib/content.json'

const adata = data.about

const { portrait, mascotteWelcome } = mascotte
</script>
<template>
  <section class="lg:mt-[110dvh] mx-auto w-4/5 flex flex-col items-center justify-center">
    <div class="lg:h-[60vh] rounded-lg flex flex-col lg:flex-row items-end lg:w-5/6 lg:mb-0">
      <div>
        <Motion
          is="img"
          preset="slideVisibleRight"
          :src="portrait"
          class="object-fit rounded-md max-h-[70dvh]"
          alt="portrait de Winny"
        />
      </div>
      <div
        class="bg-foreground border border-[#14D1D9] rounded-md shadow-[inset_0px_0px_20px_5px_rgba(20,_209,_217,_0.5)] -mt-1 lg:mt-0 lg:pt-0 lg:-ml-10 -z-10 flex items-center justify-end flex-1"
      >
        <Motion is="p" preset="slideVisibleLeft" class="p-4 text-xl lg:text-end text-background">
          {{ adata.me[0] }}
        </Motion>
      </div>
    </div>
    <div
      class="lg:h-[60dvh] rounded-lg flex flex-col-reverse lg:flex-row items-end lg:w-5/6 lg:mt-0"
    >
      <div
        class="bg-foreground border border-[#14D1D9] rounded-md shadow-[inset_0px_0px_20px_5px_rgba(20,_209,_217,_0.5)] -mt-1 lg:mt-0 lg:-mr-80 -z-10 flex items-center flex-1"
      >
        <Motion is="p" preset="slideVisibleRight" class="p-4 text-md text-background w-3/4">
          {{ adata.mascotte[0] }}
        </Motion>
      </div>
      <div>
        <Motion
          is="img"
          preset="slideVisibleLeft"
          :src="mascotteWelcome"
          class="object-fit rounded-md max-h-[50dvh]"
          alt="portrait de Winny"
        />
      </div>
    </div>
  </section>
</template>
