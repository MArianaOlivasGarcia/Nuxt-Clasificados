<template>
  <client-only>
    <agile autoplay :autoplaySpeed="6000" :timing="'linear'" :navButtons="false" >
          <div v-for="(image, i) in images" class="slide" :key="i">
              <img class="image-slide" :src="image" :alt="image">
          </div>
    </agile>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/properties-1.jpg',
        '/properties-2.jpg',
        '/properties-3.jpg',
        '/properties-4.jpg',
      ]
    }
  }
}
</script>

<style scoped>

  .slide{
    background: red;
    height: 250px;
  }
  img.image-slide {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media (max-width: 576px) {
    .slide{
      background: red;
      height: 200px;
    }
  }
</style>