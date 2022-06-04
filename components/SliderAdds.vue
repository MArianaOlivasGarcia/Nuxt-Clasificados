<template>
  <client-only v-if="adds.length > 0">
    <agile autoplay :autoplaySpeed="5000" :timing="'linear'"  >
          <NuxtLink v-for="(add, i) in adds" class="slide" :key="i" :to="add.url">
              <img class="image-slide" :src="`${add.image}`" :alt="add.image">
          </NuxtLink>
    </agile>
  </client-only>
</template>

<script>
/*

  adds = [
    {
      image: 'path/name.png',
      url: 'algunapagina.com'
    }
  ]


*/
export default {
  props: {
    adds: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

  .slide{
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