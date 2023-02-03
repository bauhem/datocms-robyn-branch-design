<template>
  <section class="footer wf-section">
    <div class="container">
      <NuxtLink to="/" class="brand-footer w-nav-brand"
        ><img src="/images/favicon.png" alt="" loading="lazy" width="32px"
          height="32px"  /><img
          src="/images/logo-small.webp"
          width="125px"
          height="18px"
          alt=""
          loading="lazy"
          class="logo-text"
      /></NuxtLink>
      <div class="divider"></div>
      <div class="footer-wrapper">
        <div class="footer-content">
          <div
            id="w-node-_3157f41d-97eb-0ea1-c155-6fa6a8b9ab2e-a8b9ab27"
            class="footer-block"
          >
            <NuxtLink
              v-for="item in navLeft"
              :key="item.id"
              :to="
                item.parent != null
                  ? '/' + item.parent.slug + '/' + item.slug
                  : '/' + item.slug
              "
              class="footer-link"
              >{{ item.title }}</NuxtLink
            >
          </div>
          <div
            id="w-node-_5602913a-cdd6-62c7-e9fb-94330c3e2030-a8b9ab27"
            class="footer-block"
          >
            <NuxtLink
              v-for="item in navRight"
              :key="item.id"
              :to="
                item.parent != null
                  ? '/' + item.parent.slug + '/' + item.slug
                  : '/' + item.slug
              "
              class="footer-link"
              >{{ item.title }}</NuxtLink
            >
          </div>
          <div
            id="w-node-_3157f41d-97eb-0ea1-c155-6fa6a8b9ab3b-a8b9ab27"
            class="footer-block right"
          >
            <div
              v-html="
                `<strong>FLORIDA OFFICE<br></strong>1027 S 8th Street<br>Fernandina Beach, FL, 32034<br>‍<a href='tel:904-491-1199' class='footer-link'>904-491-1199</a>`
              "
              class="footer-paragraph"
            ></div>
            <div
              v-html="
                `<strong>SOUTH CAROLINA OFFICE<br></strong>145 King Street, Suite 102,<br>Charleston, SC, 29401<br>‍‍<a href='tel:904-491-1199' class='footer-link'>904-491-1199</a>`
              "
              class="footer-paragraph"
            ></div>
          </div>
          <div
            id="w-node-_3157f41d-97eb-0ea1-c155-6fa6a8b9ab51-a8b9ab27"
            class="footer-block"
          >
            <div class="footer-social-block">
              <NuxtLink
                :to="'https://twitter.com/robyn_branch'"
                target="_blank"
                class="footer-social-link w-inline-block"
                ><nuxt-img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac15112aad5_twitter%20small.svg"
                  alt=""
                  width="24px"
                height="24px"
              /></NuxtLink>
              <NuxtLink
                :to="'https://www.linkedin.com/in/robyn-branch-a96a6351/'"
                target="_blank"
                class="footer-social-link w-inline-block"
                ><nuxt-img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg"
                  alt=""
                  width="24px"
                height="24px"
              /></NuxtLink>
              <NuxtLink
                :to="'https://www.facebook.com/robynbranchdesign/'"
                target="_blank"
                class="footer-social-link w-inline-block"
                ><nuxt-img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg"
                  alt=""
                  width="24px"
                height="24px"
              /></NuxtLink>
              <NuxtLink
                :to="'https://www.instagram.com/robynbranchdesign/'"
                target="_blank"
                class="footer-social-link w-inline-block"
                ><nuxt-img
                  src="https://uploads-ssl.webflow.com/63d3ed4bfd96a0f74ff9cf95/63d3ed4cfd96a08d2bf9cfc0_Instagram.svg"
                  alt=""
                  width="22px"
                height="22px"
                  class="sm-icon"
              /></NuxtLink>
              <NuxtLink
                :to="'https://www.pinterest.com/robyn_branch_design/'"
                target="_blank"
                class="footer-social-link w-inline-block"
                ><nuxt-img
                  src="https://uploads-ssl.webflow.com/63d3ed4bfd96a0f74ff9cf95/63d3ed4cfd96a0b6bef9cfc4_Pinterest.svg"
                  alt=""
                  width="22px"
                height="22px"
                  class="sm-icon"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    navLeft: Object,
    navRight: Object,
    contact: Object,
  },
}
</script>
