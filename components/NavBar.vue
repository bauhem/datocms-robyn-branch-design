<template>
  <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
    <div class="nav-container w-container">
      <div class="nav-menu-wrapper">
        <a href="/" class="brand w-nav-brand"><img src="/images/logo.png"  height="25" alt=""></a>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <div class="menu-wrap">
            <div class="tablet-menu">
              <a href="/" class="brand-tablet w-nav-brand"><img src="/images/favicon.png"  alt=""><img src="/images/logo-small.png"  alt="" class="logo-text"></a>
              <div class="close-menu-button w-nav-button"><img src="/images/close.png"  width="16" alt="" class="close-icon"></div>
            </div>
            <div class="nav-block-left">
              <a v-for="item in data.navLeft" :key="item.id" :href="item.parent != null ? '/' + item.parent.slug + '/' + item.slug : '/' + item.slug" class="nav-link">{{ item.title }}</a>
            </div>
            <a href="/" aria-current="page" class="brand-menu w-nav-brand w--current">
              <img src="/images/favicon.png"  alt="">
              <img src="/images/logo-middle.png"  alt="" class="logo-text"></a>
            <div class="nav-block-right">
             <a v-for="item in data.navRight" :key="item.id" :href="item.slug" class="nav-link">{{ item.title }}</a>
             <a :href="data.contact.slug" class="button in-navbar">{{ data.contact.title }}</a>
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

