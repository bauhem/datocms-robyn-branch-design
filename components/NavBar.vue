<template>
  <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
    <div class="nav-container w-container">
      <div class="nav-menu-wrapper">
        <NuxtLink to="/" class="brand w-nav-brand"><img src="/images/logo.webp"  height="25" alt=""></NuxtLink>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <div class="menu-wrap">
            <div class="tablet-menu">
              <NuxtLink to="/" class="brand-tablet w-nav-brand"><img src="/images/favicon.png"  alt=""><img src="/images/logo-small.webp"  alt="" class="logo-text"></NuxtLink>
              <div class="close-menu-button w-nav-button"><img src="/images/close.png"  width="16" alt="" class="close-icon"></div>
            </div>
            <div class="nav-block-left">
              <NuxtLink v-for="item in data.navLeft" :key="item.id" :to="item.parent != null ? '/' + item.parent.slug + '/' + item.slug : '/' + item.slug" class="nav-link">{{ item.title }}</NuxtLink>
            </div>
            <NuxtLink to="/" aria-current="page" class="brand-menu w-nav-brand w--current">
              <img src="/images/favicon.png"  alt="">
              <img src="/images/logo-middle.webp"  alt="" class="logo-text"></NuxtLink>
            <div class="nav-block-right">
             <NuxtLink v-for="item in data.navRight" :key="item.id" :to="item.slug" class="nav-link">{{ item.title }}</NuxtLink>
             <NuxtLink :to="data.contact.slug" class="button in-navbar">{{ data.contact.title }}</NuxtLink>
            </div>
          </div>
        </nav>
        <div class="menu-button w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  </div>
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

