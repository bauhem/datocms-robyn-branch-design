<template>
  <component
    v-for="component in components"
    v-once
    :key="component"
    :is="component.component"
    v-bind:item="component.data"
    v-bind:route="route.path"
  />
  <section v-if="page.content.value.document.children.filter(child => child.type !== 'block').length > 0" class="section whitesmoke wf-section">
    <div class="container">
      <StructuredText :data="page.content" :renderBlock="renderBlock" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { toHead, Image, StructuredText } from 'vue-datocms'
import ImageBlock from '@/components/ImageBlock.vue'
import Gallery from '@/components/Gallery.vue'
import HeroInterior from '@/components/HeroInterior.vue'
import PortfolioList from '@/components/PortfolioList.vue'

import { imageFields, seoMetaTagsFields, formatDate } from '~~/utils/graphql'

const route = useRoute()

const { data } = await useGraphqlQuery({
  query: `query Page($slug: String) {
        page: page(filter: {slug: {eq: $slug}}, orderBy: position_ASC) {
          position
          title
          _seoMetaTags {
            ...seoMetaTagsFields
          }
          content {
            value
            blocks {
              __typename
              ... on PortfolioListRecord {
                id
                title
              }
              ... on HeroInteriorRecord {
                id
                title
                subtitle
              }
              ... on CtaBannerRecord {
                id
                title
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, auto: format, w: 2000, h: 1000}) {
                    ...imageFields
                  }
                }
              }
              ... on ContactRecord {
                id
                title
              }
              ... on AboutUsModelRecord {
                id
                title
                description
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop,  auto: format, crop: faces, w: 1000, h: 1200}) {
                    ...imageFields
                  }
                }
              }
            }
          }
        }
        site: _site {
          favicon: faviconMetaTags {
            ...seoMetaTagsFields
          }
        }
      }
    
    ${imageFields}
    ${seoMetaTagsFields}
  `,
  variables: {
    slug: route.params.slug.toString(),
  },
})

if (!data.value?.page) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const page = computed(() => data.value?.page)
const site = computed(() => data.value?.site)

const components = data?.value?.page?.content?.blocks.map(
  (item: { __typename: any }) => {
    const { __typename, ...data } = item
    // split the data and the component instance so you can v-bind the data easier in the template
    if (__typename) {
      // split the data and the component instance so you can v-bind the data easier in the template
      return {
        data: data,
        component: defineAsyncComponent(
          () => import(`../components/${__typename.replace('Record', '')}.vue`)
        ),
        // A note is that if you use path aliases for dynamic imports like @ or ~ you might experience issues.
      }
    } else {
      return {}
    }
  }
)

const renderBlock = ({ record }) => {
  return null
}

useHead({
  htmlAttrs: {
    'data-wf-page': '63befb04b81ae00acfcfa80c',
  },
})

useHead(() => {
  if (!data.value) {
    return {}
  }
  return toHead(data.value?.page?._seoMetaTags, data.value?.site?.favicon)
})
</script>

<script lang="ts">
export default {
  mounted() {
    this.$nextTick(function () {
      $(document).ready(function () {
        // eslint-disable-next-line no-undef
        window.Webflow && window.Webflow.destroy()
        window.Webflow && window.Webflow.ready()
        window.Webflow && window.Webflow.require('ix2').init()
        document.dispatchEvent(new Event('readystatechange'))
      })
    })
  },
}
</script>
