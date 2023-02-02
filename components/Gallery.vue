<template>
  <section class="section whitesmoke wf-section">
    <div
        data-w-id="79ed0ed5-cea0-fe65-bd42-916d1b739bb9"
        style="opacity: 0"
        class="projects-wrapper _3-columns"
      >
      <ClientOnly>
      <a
        v-for="item in $attrs.props.data.image"
        :key="item.id"
        href="#"
        aria-label="open lightbox" aria-haspopup="dialog"
        class="lightbox w-inline-block w-lightbox"
      >
        <div class="project-hover-link-wrapper detail">
          <div class="hover-link-wrapper project-view-link">
            <div href="#" class="hover-link">
              <div>View</div>
            </div>
          </div>
        </div>
        <img src="/images/1-6.jpg" loading="eager" v-img="" sizes="(max-width: 479px) 100vw, (max-width: 991px) 45vw, 31vw" srcset="/images/1-6-p-500.jpg 500w, /images/1-6-p-800.jpg 800w, /images/1-6-p-1080.jpg 1080w, /images/1-6.jpg 1238w" alt="" class="lightbox-img">
           <component :is="'script'" type="application/json" v-bind:class="'w-json'" >
          {{ scriptContents(item.responsiveImage.src) }}
        </component>
      </a>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Image } from 'vue-datocms'

const scriptContents = (item: object) => `
    {
      "items": [
        {
          "_id": "example_img",
          "origFileName": "1-6.jpg",
          "fileName": "1-6.jpg",
          "fileSize": 419911,
          "height": 599,
          "url": "/images/1-6.jpg",
          "width": 1000,
          "type": "image"
        }
      ],
      "group": "Project"
    }
`;
</script>
