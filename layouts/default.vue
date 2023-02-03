<template >
    <div v-bind:key="route.fullPath">
    <NavBar v-bind:navLeft="data.navLeft" v-bind:navRight="data.navRight" v-bind:contact="data.contact" />
        <div style="min-height:100vh">

    <slot />
        </div>
    <Footer v-bind:navLeft="data.navLeft" v-bind:navRight="data.navRight" v-bind:contact="data.contact"/>
    </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>


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
