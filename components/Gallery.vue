<template>
    <div
       data-w-id="e509c809-2043-10b9-588e-993b5b846794" style="opacity:0" class="projects-wrapper-column _3-columns">
    
      <template v-for="(item, index) in $attrs.props.data.image" :key="item.id">
          <NuxtLink
            @click="showLightbox(item, index)"
            to=""
            id="w-node-e7a9b3cf-ee28-210b-d0e0-b27e92c4350c-92c4350c"
            class="lightbox w-inline-block w-lightbox"
          >
            <div class="project-hover-link-wrapper detail">
              <div class="hover-link-wrapper project-view-link">
                <div href="#" class="hover-link">
                  <div>View</div>
                </div>
              </div>
            </div>
            <img
              :src="item.small.src"
              :width="item.small.width"
              :height="item.small.height"
              loading="eager"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 45vw, 31vw"
              alt=""
              class="lightbox-img"
            />
          </NuxtLink>
      </template>
      <transition name="fade">
        <div class="lightbox-overlay" v-if="showLightboxImage">
          <div class="lightbox-content">
            <img
              class="lightbox-img"
              loading="eager"
              :src="showLightboxImage.src"
              :width="showLightboxImage.width"
              :height="showLightboxImage.height"
            />
            <button class="close-button" @click="closeLightbox">Close</button>
            <button class="prev-button" @click="showPrevious()">
              Previous
            </button>
            <button class="next-button" @click="showNext()">Next</button>
          </div>
        </div>
      </transition>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showLightboxImage: '',
      currentImageIndex: 0,
    }
  },
  methods: {
    showLightbox(item, index) {
      this.showLightboxImage = item.big
      this.currentImageIndex = index
    },
    closeLightbox() {
      this.showLightboxImage = ''
    },
    showPrevious() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.$attrs.props.data.image.length) %
        this.$attrs.props.data.image.length
      this.showLightboxImage =
        this.$attrs.props.data.image[this.currentImageIndex].big
    },
    showNext() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.$attrs.props.data.image.length
      this.showLightboxImage =
        this.$attrs.props.data.image[this.currentImageIndex].big
    },
  },
}
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
