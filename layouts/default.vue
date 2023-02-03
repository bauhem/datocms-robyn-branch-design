<template >
<div v-bind:key="route.fullPath">
    <NavBar v-bind:navLeft="data.navLeft" v-bind:navRight="data.navRight" v-bind:contact="data.contact" />
    <slot />
    <Footer v-bind:navLeft="data.navLeft" v-bind:navRight="data.navRight" v-bind:contact="data.contact"/>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await useGraphqlQuery({
  query: `query Page {
        navLeft: allPages(filter: {hideFromMenu: {eq: false}}, first: 3) {
          position
          title
          slug
          parent {
            slug
          }
        }
        navRight: allPages(filter: {hideFromMenu: {eq: false}}, skip: 3, first: 3) {
          position
          title
          slug
          parent {
            slug
          }
        }
         contact: page(filter: {slug: {eq: "contact"}}) {
          position
          title
          slug
          parent {
            slug
          }
        }
      }
  `,
})

</script>

<script>
import jQuery from 'jquery'

const initWebFlow = () => {
  jQuery(document).ready(function () {
    if (window.Webflow !== undefined) {
      window.Webflow.destroy()
      window.Webflow.ready()
      window.Webflow.require('ix2').init()
      document.dispatchEvent(new Event('readystatechange'))
    }
  })
}

export default defineNuxtPlugin((nuxt) => {
  nuxt.hook('ready', initWebFlow)
})
</script>