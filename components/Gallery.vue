<template>
  <section class="section whitesmoke wf-section">
    <div
      data-w-id="79ed0ed5-cea0-fe65-bd42-916d1b739bb9"
      class="projects-wrapper _3-columns"
    >
      <template v-for="(item, index) in $attrs.props.data.image" :key="item.id">
        <ClientOnly>
          <a @click="showLightbox(item, index)" href="#" class="lightbox w-inline-block w-lightbox">
            <div class="project-hover-link-wrapper detail">
              <div class="hover-link-wrapper project-view-link">
                <div href="#" class="hover-link">
                  <div>View</div>
                </div>
              </div>
            </div>
            <img
              :src="item.small.src"
              loading="eager"
              v-img=""
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 45vw, 31vw"
              
              alt=""
              class="lightbox-img"
            />
          </a>
        </ClientOnly>
      </template>
      <transition name="fade">
      <div class="lightbox-overlay" v-if="showLightboxImage">
        <div class="lightbox-content">
          <img class="lightbox-img"   loading="eager" :src="showLightboxImage" />
          <button class="close-button" @click="closeLightbox">Close</button>
                <button class="prev-button" @click="showPrevious()">Previous</button>
      <button class="next-button" @click="showNext()">Next</button>
        </div>
      </div>
      </transition>
    </div>
  </section>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.project-image-container {
  position: relative;
}
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.lightbox-content {
  background-color: rgb(0, 0, 0);
  padding: 10px;
  margin-left: 40px;
  margin-right: 40px;
  border-radius: 5px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.lightbox-img {
  max-height: 90vh;
}
.prev-button,
.next-button {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  font-size: 18px;
}
.prev-button {
  left: 0;
  bottom: 20px;
}
.next-button {
  right: 0;
    bottom: 20px;

}
.close-button {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
<script>
export default {
  data() {
    return {
      showLightboxImage: '',
      currentImageIndex: 0
    }
  },
  methods: {
    showLightbox(item, index) {
      console.log('showLightbox called')

      this.showLightboxImage = item.big.src
      this.currentImageIndex = index
    },
    closeLightbox() {
      this.showLightboxImage = ''
    },
    showPrevious() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.$attrs.props.data.image.length) %
        this.$attrs.props.data.image.length
      this.showLightboxImage = this.$attrs.props.data.image[
        this.currentImageIndex
      ].big.src
    },
    showNext() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.$attrs.props.data.image.length
      this.showLightboxImage = this.$attrs.props.data.image[
        this.currentImageIndex
      ].big.src
    },
  },
}
</script>
