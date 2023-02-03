<template>
  <div style="min-height:100vh">

    <component
      v-for="component in components"
      v-once
      :key="component"
      :is="component.component"
      v-bind:item="component.data"
      v-bind:route="route.path"
    />

  </div>
</template>

<script setup lang="ts">
import {toHead, Image as DatocmsImage, StructuredText as DatocmsStructuredText,} from 'vue-datocms'

import { imageFields, seoMetaTagsFields, formatDate } from '~~/utils/graphql'

const route = useRoute()

const { data } = await useGraphqlQuery({
  query: `query Page {
        page: page(filter: {id: {eq: 19072913}}) {
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
                featuredPortfolio {
                  id
                  title
                  slug
                  excerpt
                  big: coverImage {
                    responsiveImage(imgixParams: {fit: crop, ar: "16:9", auto:format, w: 1905, h: 980}) {
                      ...imageFields
                    }
                  }
                  small: coverImage {
                    responsiveImage(imgixParams: {fit: crop, ar: "9:16", auto:format, w: 500, h: 900}) {
                      ...imageFields
                    }
                  }
                }
              }
              ... on PortfolioListRecord {
                id
                title
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
        portfolio: allPortfolios(first: 10, orderBy: _firstPublishedAt_DESC) {
          id
          title
          slug
          publicationDate: _firstPublishedAt
          featured
          excerpt
          coverImage {
            responsiveImage(imgixParams: {fit: crop, ar: "16:9", w: 860}) {
              ...imageFields
            }
          }
        }
      }
    
    ${imageFields}
    ${seoMetaTagsFields}
  `,
})


const components = data.value.page.content.blocks.map((item: { __typename: any })=> {
  const {__typename, ...data} = item;
  // split the data and the component instance so you can v-bind the data easier in the template
  return {
    data: data,
    // A note is that if you use path aliases for dynamic imports like @ or ~ you might experience issues.
    component: defineAsyncComponent(() => import(`../components/${__typename.replace("Record", "")}.vue`))
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