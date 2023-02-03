<template>
  <div class="home-hero-section wf-section">
    <div class="div-cta">
      <div class="container">

      </div>
    </div>
    <Client-Only>
    <div
      data-delay="4000"
      data-animation="cross"
      class="bg-slider w-slider"
      data-autoplay="true"
      data-easing="ease-out"
      data-hide-arrows="false"
      data-disable-swipe="true"
      data-autoplay-limit="0"
      data-nav-spacing="3"
      data-duration="1500"
      data-infinite="true"
    >
      <div class="w-slider-mask">
        <div
          v-for="item in item.featuredPortfolio"
          :key="item.id"
          class="w-slide"
        > 
          <Image
            :data="item.coverImage.responsiveImage"
            class="bg-slide-img"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
    </Client-Only>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
};
</script>
<script setup>
import { Image, StructuredText } from 'vue-datocms'

</script>