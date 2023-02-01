<template>
  <div class="home-hero-section wf-section">
    <div class="div-cta">
      <div class="container">
        <div class="div-cta-block">
          <p
            data-w-id="1b80a246-7d79-0e6c-200c-5ff492e2b915"
            style="opacity: 0"
            class="cta-paragraph small"
          >
            Interior design studio in Florida &amp; South-Carolina<br />
          </p>
          <h1
            data-w-id="cc388a03-34d4-7c9f-6449-641aa299770b"
            style="opacity: 0"
            class="cta-heading home"
          >
            We believe in the<br />power of design
          </h1>
          <div class="w-layout-grid grid">
            <p
              id="w-node-_764c9d0f-554b-7c8f-0f8b-3661375b9217-cfcfa80c"
              data-w-id="764c9d0f-554b-7c8f-0f8b-3661375b9217"
              style="opacity: 0"
              class="cta-paragraph"
            >
              Let make your life better together.
            </p>
            <a
              id="w-node-c4ea342e-90a5-6484-c82d-da42f0f3084b-cfcfa80c"
              data-w-id="c4ea342e-90a5-6484-c82d-da42f0f3084b"
              style="opacity: 0"
              href="/portfolio"
              class="button w-button"
              >View Portfolio</a
            >
            <p
              id="w-node-d1840ad3-bb2a-af03-b599-b9c65d3a4def-cfcfa80c"
              data-w-id="d1840ad3-bb2a-af03-b599-b9c65d3a4def"
              style="opacity: 0"
              class="cta-paragraph x-small"
            >
              Robyn Branch Design is a premier design firm that specializes in
              creating beautiful and functional spaces that reflect the personal
              tastes and preferences of their clients.
            </p>
            <p
              id="w-node-_2d65b743-435c-b4ec-4d79-aee1ea64c7a4-cfcfa80c"
              data-w-id="2d65b743-435c-b4ec-4d79-aee1ea64c7a4"
              style="opacity: 0"
              class="cta-paragraph x-small"
            >
              We collaborate with the best people in the field to deliver
              beautifully curated spaces to create a customized, original, and
              beautiful sanctuary that functions well.
            </p>
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
            :data="item.coverImage.responsiveImage"
            class="bg-slide-img"
          />
        </div>
      </div>
    </div>
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