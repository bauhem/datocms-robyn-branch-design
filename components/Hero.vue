<template>
  <div class="home-hero-section wf-section">
    <div class="div-cta">
      <div class="container">
        <div class="div-cta-block">
          <div v-html="item.surtitle"
            style="opacity: 0"
            class="cta-paragraph small"
          >
            
          </div>
          <div v-html="`<h1 style='opacity: 0' 
            class='cta-heading home'>
            ${item.title}
          </h1>`"
          >
          </div>

          <div class="w-layout-grid grid">
            <div v-html="item.subtitle"
              id="w-node-_764c9d0f-554b-7c8f-0f8b-3661375b9217-cfcfa80c"
              class="cta-paragraph"
            >
            </div>
            <NuxtLink
              id="w-node-c4ea342e-90a5-6484-c82d-da42f0f3084b-cfcfa80c"
               data-w-id="c4ea342e-90a5-6484-c82d-da42f0f3084b"
              to="/portfolios"
              class="button w-button"
              >View Portfolio</NuxtLink
            >
            <div v-html="item.description1"
              id="w-node-d1840ad3-bb2a-af03-b599-b9c65d3a4def-cfcfa80c"

              class="cta-paragraph x-small"
            >
              
            </div>
            <div v-html="item.description2"
              id="w-node-_2d65b743-435c-b4ec-4d79-aee1ea64c7a4-cfcfa80c"
              class="cta-paragraph x-small"
            >
            </div>
          </div>
        </div>
      </div>
    </div>
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
            :data="$device.isMobile ? item.small.responsiveImage : item.big.responsiveImage"
            class="bg-slide-img"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    item: Object
  },
};
</script>
<script setup lang="ts">
import { Image } from 'vue-datocms'

</script>