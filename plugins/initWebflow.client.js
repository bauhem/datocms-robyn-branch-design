import jQuery from 'jquery'

const initWebFlow = () => {
  jQuery(document).ready(function () {
    if (window.Webflow !== undefined) {
      window.Webflow.destroy()
      window.Webflow.ready()
      window.Webflow.require('ix2').init()
      document.dispatchEvent(new Event('readystatechange'))
    }
  })
}

export default defineNuxtPlugin((nuxt) => {
  nuxt.hook('ready', initWebFlow)
})
