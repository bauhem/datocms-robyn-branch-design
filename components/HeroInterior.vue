<template>
  <div class="section header wf-section">
    <div class="container">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
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