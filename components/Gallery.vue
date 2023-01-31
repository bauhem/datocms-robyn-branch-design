<template>
      <section class="section whitesmoke wf-section">
    <div
      data-w-id="79ed0ed5-cea0-fe65-bd42-916d1b739bb9"
      class="projects-wrapper _3-columns"
    >
      <a v-for="item in $attrs.props.data.image" :key="item.id"
        href="#"
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
          :src="item.responsiveImage.src"
          loading="eager"
          v-img=""
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 45vw, 31vw"
          :srcset="item.responsiveImage.srcSet"
          alt=""
          class="lightbox-img"
        />
      </a>
    </div>
  </section>
</template>

