<template>
  <div>

  </div>
</template>

<script setup lang="ts">

import { toHead, Image as DatocmsImage, StructuredText as DatocmsStructuredText } from 'vue-datocms';

import { imageFields, seoMetaTagsFields, formatDate } from '~~/utils/graphql'

const route = useRoute()

const { data } = await useGraphqlQuery({
  query: `
    {
      page: home {
        _seoMetaTags {
          ...seoMetaTagsFields
        }
      }
      site: _site {
        favicon: faviconMetaTags {
          ...seoMetaTagsFields
        }
      }
      posts: allPosts(first: 10, orderBy: _firstPublishedAt_DESC) {
        id
        title
        slug
        publicationDate: _firstPublishedAt
        excerpt
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
})

const posts = computed(() => data.value?.posts || [])

useHead(() => {
  if (!data.value) {
    return {}
  }
  return toHead(data.value?.page?._seoMetaTags, data.value?.site?.favicon)
})



</script>
