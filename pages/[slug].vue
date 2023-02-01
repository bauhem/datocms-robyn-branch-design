<template>
  <div>

    <component
      v-for="component in components"
      v-once
      :key="component"
      :is="component.component"
      v-bind:item="component.data"
    />

  </div>
</template>

<script setup lang="ts">
import {
  toHead,
  Image as DatocmsImage,
} from 'vue-datocms'

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
              ... on HeroRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, auto: format, w: 2000, h: 1000}) {
                    ...imageFields
                  }
                }
              }
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
              ... on AboutUsModelRecord {
                id
                title
                description
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, auto: format, w: 2000, h: 1000}) {
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



const components = data?.value?.page?.content?.blocks.map((item: { __typename: any })=> {
  const {__typename, ...data} = item;
  // split the data and the component instance so you can v-bind the data easier in the template
  if (__typename) {
    // split the data and the component instance so you can v-bind the data easier in the template
    return {
      data: data,
      component: defineAsyncComponent(() => import(`../components/${__typename.replace("Record", "")}.vue`))
      // A note is that if you use path aliases for dynamic imports like @ or ~ you might experience issues.
    }
  } else {
    return {};
  }
})

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
