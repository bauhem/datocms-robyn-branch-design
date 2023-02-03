<template>
    <NavBar v-bind:navLeft="data.navLeft" v-bind:navRight="data.navRight" v-bind:contact="data.contact" />
    <slot />
</template>


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

