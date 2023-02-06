<template>
  <section class="section white wf-section">
    <div class="container">
      <div class="flex-h">
        <div class="flex-left">
          <div class="quote">
            <div v-html="item.quote"></div>
            <p>
              <strong><em>— Robyn Branch —</em></strong
              ><em><br /></em>
            </p>
          </div>
        </div>
        <div class="flex-left">
          <div v-html="item.description"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    item: Object,
  },
}
</script>
