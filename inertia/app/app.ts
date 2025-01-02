/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/reset.css'
import '../css/app.css'
import type { DefineComponent } from 'vue'
import { createSSRApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { MotionPlugin } from '@vueuse/motion'
import AppLayout from '~/layouts/AppLayout.vue'

const appName = import.meta.env.VITE_APP_NAME || 'Wdrancourt'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: async (name) => {
    const page = await resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue')
    )
    page.default.layout = page.default.layout || AppLayout

    return page
  },

  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .use(MotionPlugin)
      .component('Link', Link)
      .mount(el)
  },
})
