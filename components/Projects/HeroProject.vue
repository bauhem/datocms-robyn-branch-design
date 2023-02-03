<template>
  <div class="section full-height wf-section">
    <div class="image-project-hero">
      <div class="black-overlay reverse"></div>
      <Image
        objectFit="cover"
        :data="item.coverImage.responsiveImage"
        class="image-project-detail"
      />
      <div class="container">
        <div class="hero-wrapper-content">
          <NuxtLink :to="'/portfolio/' + back" class="back-link w-inline-block"
            ><img
              src="/images/round-arrow-back_24dp-white.svg"
              loading="lazy"
              alt=""
              class="image-back-link"
            />
            <div>Back</div>
          </NuxtLink>
          <div
            v-html="
              `<h1
            data-w-id=&quot;f35a341d-90ed-58ef-e580-e02b6b104d1b&quot;
            class=&quot;cta-heading&quot;
          >
            ${ item.title }<br />
          </h1>`
            "
          ></div>

          <div class="divider _w-logo left">
            <div class="losange"></div>
          </div>
          <div
            v-html="'Photography by Zeke Ruelas'"
            class="centered left"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
export default {
  props: {
    item: Object,
    back: String,
  },
}
</script>
<script setup lang="ts">
import { Image } from 'vue-datocms'

</script>
