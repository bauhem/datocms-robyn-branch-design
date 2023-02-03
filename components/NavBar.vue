<template>
  <div
    data-animation="over-left"
    data-collapse="medium"
    data-duration="400"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="navbar w-nav"
  >
    <div class="nav-container w-container">
      <div class="nav-menu-wrapper">
        <NuxtLink to="/" class="brand w-nav-brand"
          ><nuxt-img  src="/images/logo.webp" loading="lazy" width="175px"
                  height="25px"  alt=""
        /></NuxtLink>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <div class="menu-wrap">
            <div class="tablet-menu">
              <NuxtLink to="/" class="brand-tablet w-nav-brand"
                ><nuxt-img src="/images/favicon.png" alt="" width="32px"
          height="32px" />
              <nuxt-img
                  src="/images/logo-small.webp"
                  alt=""
                  width="200px"
                  height="29px"
                  class="logo-text"
              /></NuxtLink>
              <div class="close-menu-button w-nav-button">
                <nuxt-img
                  src="/images/close.png"
                  width="16"
                  alt=""
                  class="close-icon"
                />
              </div>
            </div>
            <div class="nav-block-left">
              <NuxtLink
                v-for="item in navLeft"
                :key="item.id"
                :to="
                  item.parent != null
                    ? '/' + item.parent.slug + '/' + item.slug
                    : '/' + item.slug
                "
                class="nav-link"
                >{{ item.title }}</NuxtLink
              >
            </div>
            <NuxtLink
              to="/"
              aria-current="page"
              class="brand-menu w-nav-brand w--current"
            >
              <nuxt-img format="png" src="/favicon.png" width="32px"
          height="32px" loading="lazy" alt="" />
              <nuxt-img format="webp" src="/logo-middle.webp"  width="200px"
          height="29px" loading="lazy" alt="" class="logo-text"
            /></NuxtLink>
            <div class="nav-block-right">
              <NuxtLink
                v-for="item in navRight"
                :key="item.id"
                :to="
                  item.parent != null
                    ? '/' + item.parent.slug + '/' + item.slug
                    : '/' + item.slug
                "
                class="nav-link"
                >{{ item.title }}</NuxtLink
              >
              <NuxtLink :to="contact.slug" class="button in-navbar">{{
                contact.title
              }}</NuxtLink>
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

<script lang="ts">
export default {
  props: {
    navLeft: Object,
    navRight: Object,
    contact: Object,
  },
  mounted() {
    this.$nextTick(function () {
      $(document).ready(function () {
        if (window.innerWidth <= 768) {
          $('.w-nav-menu').on('click', 'a', function () {
            $('.w-nav-button').triggerHandler('tap')
          })
        }
      })
    })
  },
}
</script>
