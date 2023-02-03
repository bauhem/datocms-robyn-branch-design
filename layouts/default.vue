<template>
    <NavBar v-bind:navLeft="data.navLeft" v-bind:navRight="data.navRight" v-bind:contact="data.contact" />
    <slot />
    <Footer v-bind:navLeft="data.navLeft" v-bind:navRight="data.navRight" v-bind:contact="data.contact"/>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function () {
      $(document).ready(function () {
        if (window.innerWidth <= 768) {
          $('.w-nav-menu').on('click', 'a', function () {
            $('.w-nav-button').triggerHandler('tap')
          })
        }
        // eslint-disable-next-line no-undef
        window.Webflow && window.Webflow.destroy()
        window.Webflow && window.Webflow.ready()
        window.Webflow && window.Webflow.require('ix2').init()
        document.dispatchEvent(new Event('readystatechange'))
      })
    })
  },
}
</script>
<script setup >

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

