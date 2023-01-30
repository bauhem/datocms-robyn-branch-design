<template>
  <section
    class="section bg-image wf-section"
    v-bind:style="
      'min-height: 500px; padding-top: 125px; background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(' +
      item.image.responsiveImage.src +
      '); background-position: 0px 0px, 50% 50%; background-size: auto, cover; background-attachment: scroll, fixed;'
    "
  >
    <div class="container">
      <div
        data-w-id="dc48abc7-64d1-0c91-2081-17775079252c"
        class="div-wrapper-third"
      >
        <div class="section-title">
          Collaboration is at the heart of what we do here at Robyn Branch.
          Let&#x27;s talk and see what we can build together.
        </div>
        <a href="contact.html" class="button in-navbar w-button">Contact us</a>
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
