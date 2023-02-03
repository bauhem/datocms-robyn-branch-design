<template>

 <nuxt-img
          :src="$attrs.props.data.responsiveImage.src"
          loading="eager"
          v-img=""
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 45vw, 31vw"
          :srcset="$attrs.props.data.responsiveImage.srcSet"
          alt=""
          class="lightbox-img"
        />

</template>
