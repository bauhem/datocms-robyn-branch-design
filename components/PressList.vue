<template>

  <section class="section whitesmoke wf-section">
    <div class="container">
      <div  v-if='item.title' v-html="`<h2
        data-w-id='79ed0ed5-cea0-fe65-bd42-916d1b739bbb'
        style='opacity: 0'
        class='section-title centered'
      >
        ${ item.title }
      </h2>`"></div>
      
      <div v-if="item.title" class="divider _w-logo">
        <nuxt-img src="https://robyn-branch-designs.netlify.app/images/webclip.webp" loading="lazy" alt="" width="64px"
          height="62px" class="rbd-icon" />
      </div>
      <div data-w-id="b3ddd754-6e94-a4af-fa14-ec253f164f84" class="projects-wrapper-press">

        <div v-if="data.allPresses" class="projects-grid _3-collumns">
          <div
            v-for="item in data.allPresses"
            :key="item.id"
            class="project-item _3-collumns"
          >
            <div class="project-image-2 _3-collumns">
                <Image :data="item.coverImage.responsiveImage"  class="project-image" />
            </div>
            <div id="w-node-d2130ccd-1b53-a265-4cd3-2a4846c3ca99-46c3ca96" class="project-card-info _3-collumns"
            >
              <div class="project-hover-link-wrapper">
                <div class="hover-link-wrapper project-view-link">
                  <NuxtLink
                    :to="item.link"
                    class="hover-link w-inline-block"
                    target="_blank"
                  >
                    <div>View</div>
                  </NuxtLink>
                </div>
              </div>
              <div class="project-info-top">
                <div v-html='`<h3>${ item.title }</h3>`'></div>
                
              </div>
            </div>
            <div class="image-overlay"></div>
            <div class="black-overlay"></div>
          </div>
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
import { Image } from 'vue-datocms'
import { imageFields } from '~~/utils/graphql'

const route = useRoute()

let press
  const { data } = await useGraphqlQuery({
    query: `query Page {
          allPresses {
            title
            coverImage {
              responsiveImage(imgixParams: { fit: fill, auto: format, w: 550 }) {
                ...imageFields
              }
            }
            link
            slug
            id
          }
        }
            ${imageFields}
      `,
  })
  press = data.allPresses

</script>
