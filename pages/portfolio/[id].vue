<template>
  <HeroProject :item="post" />
        <section class="section whitesmoke wf-section">
    <div
      class="container"
    >
      <ClientOnly>
        <datocms-structured-text
          :data="post.content"
          :renderBlock="renderBlock"
        />
      </ClientOnly>
    </div>
  </section>

</template>

<script setup lang="ts">
import { h } from 'vue'

import { imageFields, seoMetaTagsFields, formatDate } from '~~/utils/graphql'

import {
  toHead,
  Image as DatocmsImage,
  StructuredText as DatocmsStructuredText,
} from 'vue-datocms'
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

      portfolio(filter: { slug: { eq: $slug } }) {
        seo: _seoMetaTags {
          ...seoMetaTagsFields
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
                responsiveImage(
                  imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }
                ) {
                  ...imageFields
                }
              }
            }
            ... on GalleryRecord {
              id
              image {
                responsiveImage(
                  imgixParams: { fm: jpg, fit: crop, w: 2000, h: 1000 }
                ) {
                  ...imageFields
                }
              }
            }
          }
        }
        coverImage {
          responsiveImage(imgixParams: { fit: crop, ar: "16:9", w: 860 }) {
            ...imageFields
          }
        }
      }
    }

    ${imageFields}
    ${seoMetaTagsFields}
  `,
  variables: {
    slug: route.params.id,
  },
})

if (!data.value?.portfolio) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const post = computed(() => data.value?.portfolio)
const site = computed(() => data.value?.site)

useHead(() => toHead(post.value?.seo || {}, site.value?.favicon || {}))

const renderBlock = ({ record }) => {
  if (record.__typename === 'ImageBlockRecord') {
    return h(ImageBlock, { props: { data: record.image } })
  }
  if (record.__typename === 'GalleryRecord') {
    return h(Gallery, { props: { data: record } })
  }

  return h('div', {}, [
    h('p', {}, "Don't know how to render a block!"),
    h('pre', {}, JSON.stringify(record, null, 2)),
  ])
}
</script>
