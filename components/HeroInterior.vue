<template>
  <div class="section header wf-section">
    <div class="container">
      <div v-html="`<h1 data-w-id='3a40679e-cd93-e10d-3b64-21ac28294dd7' class='cta-heading centered'>${ item.title }</h1>`"></div>
      
      <div data-w-id="3a40679e-cd93-e10d-3b64-21ac28294dd9" class="divider _w-logo">
        <div class="losange"></div>
      </div>
      <div v-html="item.subtitle" data-w-id="3a40679e-cd93-e10d-3b64-21ac28294ddb" class="centered light"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
};
</script>