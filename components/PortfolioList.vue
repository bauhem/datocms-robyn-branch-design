<template>
  <section class="section whitesmoke wf-section">
    <div class="container">
      <h2
        data-w-id="79ed0ed5-cea0-fe65-bd42-916d1b739bbb"
        style="opacity: 0"
        class="section-title centered"
      >
        {{ item.title }}
      </h2>
      <div class="divider _w-logo">
        <img src="/images/webclip.webp" alt="" class="rbd-icon" />
      </div>
      <div
        data-w-id="da41aa5d-d32f-99d5-9549-716169a32794"
        class="projects-wrapper"
      >
        <div v-if="portfolio" class="projects-grid">
          <div
            v-for="item in portfolio.project"
            :key="item.id"
            data-w-id="8aaf55a3-d100-f831-0ec6-5d64de2c1cf3"
            class="project-item"
          >
            <div class="project-image-2">
              <div class="background-image">
                <Image :data="item.coverImage.responsiveImage" objectFit="cover" />
              </div>
            </div>
            <div
              id="w-node-_8aaf55a3-d100-f831-0ec6-5d64de2c1cf7-de2c1cf3"
              class="project-card-info"
            >
              <div class="project-hover-link-wrapper">
                <div class="hover-link-wrapper project-view-link">
                  <a
                    :href="
                      item.category
                        ? '/portfolio/' + item.category + '/' + item.slug
                        : '/portfolio/' + item.slug
                    "
                    class="hover-link w-inline-block"
                  >
                    <div>View</div>
                  </a>
                </div>
              </div>
              <div class="project-info-top">
                <h3>{{ item.title }}</h3>
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
import { Image, StructuredText } from 'vue-datocms'
import { imageFields, seoMetaTagsFields, formatDate } from '~~/utils/graphql'

const route = useRoute()

let portfolio
if (route.path === '/portfolio') {
  const { data: portfolioData } = await useGraphqlQuery({
    query: `query Page {
          project: allPages(orderBy: position_ASC, filter: {parent: {eq: 108579675}}) {
            position
            title
            coverImage {
              responsiveImage(imgixParams: { fit: crop, auto: format, ar: "16:9", w: 860 }) {
                ...imageFields
              }
            }
            slug
            id
          }
        }
            ${imageFields}
      `,
  })
  portfolio = portfolioData
} else if (route.path === '/') {
  const { data: featuredData } = await useGraphqlQuery({
    query: `query Page {
          project: allPortfolios(orderBy: position_ASC, filter: {featured: {eq: true}}) {
            position
            title
            category
            featured
            coverImage {
              responsiveImage(imgixParams: { fit: crop, auto: format, ar: "16:9", w: 860 }) {
                ...imageFields
              }
            }
            slug
            id
          }
        }
            ${imageFields}
      `,
  })
  portfolio = featuredData
} else {
  const { data: portfolioData } = await useGraphqlQuery({
    query: `query Page {
          project: allPortfolios(orderBy: position_ASC, filter: {category: {eq: "${
            route.path.split('/')[2]
          }"}}) {
            position
            title
            category
            featured
            coverImage {
              responsiveImage(imgixParams: { fit: crop, auto: format, ar: "16:9", w: 860 }) {
                ...imageFields
              }
            }
            slug
            id
          }
        }
            ${imageFields}
      `,
  })
  portfolio = portfolioData
}
</script>
