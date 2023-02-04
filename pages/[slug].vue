<template>
    <div style="min-height:100vh">


    <component
      v-for="component in components"
      v-once
      :key="component"
      :is="component.component"
      v-bind:item="component.data"
      v-bind:slug="route.path"
    />
    <section class="section white wf-section">
    <div class="container">
      <div class="projects-grid">
        <div class="interior-wrapper">
          <div class="rich-text w-richtext">
               <datocms-structured-text :data="data.page.content" :renderBlock="renderBlock" />
            </div>
          <a href="contact.html" class="button in-navbar w-button">Contact Us</a>
        </div>
        <div class="interior-wrapper"><img src="/images/about-image.jpg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 47vw, (max-width: 991px) 46vw, 538px" srcset="/images/about-image-p-500.jpg 500w, /images/about-image.jpg 538w" alt="" class="image-robin"></div>
      </div>
    </div>
  </section>


  </div>
</template>

<script setup lang="ts">
import {toHead, Image as DatocmsImage, StructuredText as DatocmsStructuredText,} from 'vue-datocms'


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

const renderBlock = ({ record }) => {
  if (record.__typename) {
    return null
  }
  return h(
    'div',
    {},
    [
      h('p', {}, "Don't know how to render a block!"),
      h('pre', {}, JSON.stringify(record, null, 2)),
    ]
  );
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
        window.Webflow && window.Webflow.destroy();
        window.Webflow && window.Webflow.ready();
        window.Webflow && window.Webflow.require("ix2").init();
        document.dispatchEvent(new Event("readystatechange"));
      });
    });
  }
};
</script>