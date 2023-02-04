<template>
  <ProjectsHeroProject :item="page" :back="'/collaborations'" />
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

import { toHead, Image, StructuredText } from 'vue-datocms'
import ImageBlock from '@/components/ImageBlock.vue'
import Gallery from '@/components/Gallery.vue'

const route = useRoute()


const { data } = await useGraphqlQuery({
  query: `
    query BlogPostQuery($slug: String!) {
      site: _site {
        favicon: faviconMetaTags {
          ...seoMetaTagsFields
        }
      }

      collaboration(filter: {slug: {eq: $slug}}) {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
        id
        title
        slug
        publicationDate: _firstPublishedAt
        content {
          value
          blocks {
            __typename
            ... on ImageBlockRecord {
              id
              image {
                responsiveImage(imgixParams: { fm: jpg, fit: crop, auto: format, w: 2000, h: 1000 }) {
                    ...imageFields
                  }
              }
            }
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
          responsiveImage(imgixParams: { fit: crop, auto: format, ar: "16:9", w: 860 }) {
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
  },
})

if (!data.value?.collaboration) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const page = computed(() => data.value?.collaboration)
const site = computed(() => data.value?.site)

useHead(() => toHead(data.value?.collaboration?.seo || {}, site.value?.favicon || {}))


useHead({
  htmlAttrs: {
    'data-wf-page': '63befb04b81ae00acfcfa80c',
  },
})

const renderBlock = ({ record }) => {
  if (record.__typename === 'ImageBlockRecord') {
    return h(ImageBlock, { props: { data: record.image } })
  }
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