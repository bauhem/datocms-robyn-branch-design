<template>
    {{ data }}
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  computed: {
    data () {
      return JSON.stringify({
        items: [
          {
            "_id": "example_img",
            "origFileName": 'this.image.title',
            "fileName": 'this.image.title',
            "fileSize": '419911',
            "height": 'this.image.height',
            "url": 'this.image.src',
            "width": 'this.image.width',
            "type": "image"
          }
        ],
        group: "Project"
      })
    }
  }
}
</script>

