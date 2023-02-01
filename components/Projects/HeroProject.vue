<template>
 <div class="section full-height wf-section">
    <div class="image-project-hero">
      <div class="black-overlay reverse"></div>
      <div class="container">
        <div class="hero-wrapper-content">
          <a :href="'/portfolio/'+ back" class="back-link w-inline-block"
            ><img
              src="/images/round-arrow-back_24dp-white.svg"
              loading="lazy"
              alt=""
              class="image-back-link"
            />
            <div>Back</div>
          </a>
          <h1
            data-w-id="f35a341d-90ed-58ef-e580-e02b6b104d1b"
            class="cta-heading"
          >
            {{ item.title }}<br />
          </h1>
          <div class="divider _w-logo left">
            <div class="losange"></div>
          </div>
          <p class="centered left">Photography by Zeke Ruelas</p>
        </div>
      </div>
      <Image
        objectFit="cover"
        :data="item.coverImage.responsiveImage"
        class="image-project-detail"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    back: String,
  },
};
</script>
<script setup>
import { Image, StructuredText } from 'vue-datocms'

</script>