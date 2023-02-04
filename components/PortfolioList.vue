<template>
  <section class="section whitesmoke wf-section">
    <div class="container">
      <div
        v-if="item.title"
        v-html="
          `<h2
        data-w-id='79ed0ed5-cea0-fe65-bd42-916d1b739bbb'
        style='opacity: 0'
        class='section-title centered'
      >
        ${item.title}
      </h2>`
        "
      ></div>

      <div v-if="item.title" class="divider _w-logo">
        <nuxt-img
          src="https://robyn-branch-designs.netlify.app/images/webclip.webp"
          loading="lazy"
          alt=""
          width="64px"
          height="62px"
          class="rbd-icon"
        />
      </div>
      <div class="projects-wrapper">
        <div
          v-if="portfolio"
          class="projects-grid"
          v-bind:class="{ ' _3-collumns': route.path === '/press' }"
        >
          <div
            v-for="item in portfolio.project"
            :key="item.id"
            class="project-item"
            v-bind:class="{ ' _3-collumns': route.path === '/press' }"
          >
            <div
              class="project-image-2"
              v-bind:class="{ ' _3-collumns': route.path === '/press' }"
            >
              <div
                v-bind:class="{ 'background-image': route.path !== '/press' }"
              >
                <Image
                  :data="item.coverImage.responsiveImage"
                  objectFit="cover"
                  v-bind:class="{ 'project-image': route.path === '/press' }"
                />
              </div>
            </div>
            <div
              id="w-node-_8aaf55a3-d100-f831-0ec6-5d64de2c1cf7-de2c1cf3"
              class="project-card-info"
              v-bind:class="{ ' _3-collumns': route.path === '/press' }"
            >
              <div class="project-hover-link-wrapper">
                <div class="hover-link-wrapper project-view-link">
                  <NuxtLink
                    :to="
                      item.category ? '/portfolios/' + item.category + '/' + item.slug
                        : route.path === '/press' ? item.link : route.path === '/collaborations' ? '/collaborations/' + item.slug : '/' + item.slug
                    "
                    class="hover-link w-inline-block"
                    v-bind:target="{ '_blank': route.path === '/press' }"
                  >
                    <div>View</div>
                  </NuxtLink>
                </div>
              </div>
              <div class="project-info-top">
                <div v-html="`<h3>${item.title}</h3>`"></div>
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
} else if (route.path === '/press') {
  const { data: pressData } = await useGraphqlQuery({
    query: `query Page {
          project: allPresses(orderBy: position_ASC) {
            position
            title
            link
            coverImage {
              responsiveImage(imgixParams: { fit: fill, auto: format, w: 550 }) {
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
  portfolio = pressData
} else if (route.path === '/collaborations') {
  const { data: collaborationData } = await useGraphqlQuery({
    query: `query Page {
          project: allCollaborations(orderBy: position_ASC) {
            position
            title
            coverImage {
              responsiveImage(imgixParams: { fit: fill, auto: format, w: 550 }) {
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
  portfolio = collaborationData
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
