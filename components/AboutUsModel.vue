<template>
  <section class="section wf-section">
    <div class="container">
      <div class="wrapper">
        <div
          data-w-id="237c0450-4288-973a-0b19-eee9c8f50bc6"
          class="div-wrapper"
        >
          <div v-html='`<h3 class="section-title">${ item.title }</h3>`'></div>
          <div v-html="item.description" class="p-light"></div>
          <NuxtLink :to="'/about-us'" class="button w-button">Learn more</NuxtLink>
        </div>
        <div class="div-wrapper">
           <Image class="img-robyn" sizes="(max-width: 479px) 94vw, (max-width: 991px) 96vw, 46vw"  objectFit="cover" :data="item.image.responsiveImage" />

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    item: Object,
  },
}
</script>
<script setup>
import { Image, StructuredText } from 'vue-datocms'

</script>