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
            "origFileName": this.image.fileName,
            "fileName": this.image.fileName,
            "fileSize": this.image.fileSize,
            "height": this.image.height,
            "url": this.image.url,
            "width": this.image.width,
            "type": "image"
          }
        ],
        group: "Project"
      })
    }
  }
}
</script>

