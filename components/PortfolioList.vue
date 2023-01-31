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
        <img src="/images/webclip.png" alt="" class="rbd-icon" />
      </div>
      <div
        data-w-id="da41aa5d-d32f-99d5-9549-716169a32794"
        class="projects-wrapper"
      >
        <div class="projects-grid">
          <div
            v-for="item in data.project"
            :key="item.id"
            data-w-id="8aaf55a3-d100-f831-0ec6-5d64de2c1cf3"
            class="project-item"
          >
            <div class="project-image-2">
              <div class="background-image">
                <img
                  src="/images/1.jpg"
                  alt=""
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 46vw, (max-width: 991px) 45vw, 100vw"
                  srcset="
                    /images/1-p-500.jpg  500w,
                    /images/1-p-800.jpg  800w,
                    /images/1.jpg       1000w
                  "
                  class="project-image"
                />
              </div>
            </div>
            <div
              id="w-node-_8aaf55a3-d100-f831-0ec6-5d64de2c1cf7-de2c1cf3"
              class="project-card-info"
            >
              <div class="project-hover-link-wrapper">
                <div class="hover-link-wrapper project-view-link">
                  <a
                    :href="'/portfolio/' + item.page.slug + '/' + item.slug"
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
const { data } = await useGraphqlQuery({
  query: `query Page {
        project: allPortfolios(orderBy: position_ASC, skip: 1, first: 3) {
          position
          title
          page {
            id
            slug
          }
          slug
          id
        }
      }
  `,
})
</script>
