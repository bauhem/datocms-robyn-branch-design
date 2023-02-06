<template>
  <ProjectsHeroProject :item="page" :back="'/portfolios/' + collectionData.portfolio.category" />
  <section class="section whitesmoke wf-section">
    <div class="container">
        <StructuredText
          :data="page.content"
          :renderBlock="renderBlock"
        />
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

import { imageFields, seoMetaTagsFields, formatDate } from '~~/utils/graphql'

import {
  toHead,
  Image,
  StructuredText,
} from 'vue-datocms'
import ImageBlock from '@/components/ImageBlock.vue'
import Gallery from '@/components/Gallery.vue'

const route = useRoute()

const { data: collectionData }= await useGraphqlQuery({
  query: `
    query BlogPostQuery($slug: String!) {
       portfolio(filter: {slug: {eq: $slug}}) {
        id
        slug
        title
        category
      }
    }
  `,
  variables: {
    slug: route.params.slug
  },
})


const { data } = await useGraphqlQuery({
  query: `
    query BlogPostQuery($slug: String!, $page: String!) {
      site: _site {
        favicon: faviconMetaTags {
          ...seoMetaTagsFields
        }
      }

      portfolio(filter: {slug: {eq: $slug}, category: {eq: $page}}) {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
        id
        title
        slug
        category
        publicationDate: _firstPublishedAt
        content {
          value
          blocks {
            __typename
            ... on GalleryRecord {
              id
              image {
                size
                filename
                small: responsiveImage(imgixParams: { fm: jpg, fit: fill, auto: format, w: 380 }) {
                  ...imageFields
                }
                big: responsiveImage(imgixParams: { fm: jpg, fit: fill, auto: format, w: 1400 }) {
                  ...imageFields
                }
              }
            }
          }
        }
        coverImage {
          responsiveImage(imgixParams: { fit: crop, auto: format, ar: "16:9", w: 1920 }) {
            ...imageFields
          }
        }
      }
    }

    ${imageFields}
    ${seoMetaTagsFields}
  `,
  variables: {
    slug: route.params.slug,
    page: collectionData.value?.portfolio?.category,
  },
})

if (!data.value?.portfolio) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const page = computed(() => data.value?.portfolio)
const site = computed(() => data.value?.site)

useHead(() => toHead(data.value?.portfolio?.seo || {}, site.value?.favicon || {}))


useHead({
  htmlAttrs: {
    'data-wf-page': '63befb04b81ae00acfcfa80c',
  },
})

const renderBlock = ({ record }) => {
  if (record.__typename === 'GalleryRecord') {
    return h(Gallery, { props: { data: record } })
  }
}
</script>

<script lang="ts">
export default {
   mounted() {
    this.$nextTick(function () {
      $(document).ready(function () {
        // eslint-disable-next-line no-undef
        window.Webflow && window.Webflow.destroy();
        window.Webflow && window.Webflow.ready();
        window.Webflow && window.Webflow.require("ix2").init();
        document.dispatchEvent(new Event("readystatechange"));
      });
    });
  }
};
</script>