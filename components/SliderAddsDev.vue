<template>
  <client-only v-if="data.length > 0">
    <agile autoplay :autoplaySpeed="5000" :timing="'linear'"  >
          <NuxtLink  v-for="(d, i) in data" class="slide" :key="i" :to="d.url ? d.url : ''">
              <img class="image-slide" :src="`https://clasificadoscontacto.com/${d.urlimage}`" :alt="d.urlimagen">
          </NuxtLink>
    </agile>
  </client-only>
</template>

<script>
export default {
  props: {
    category: {
      type: String
    }
  },
  data() {
    return {
      data: []
    }
  },
  async created() {
      const resp = await this.$store.dispatch('getSliders', this.category )
      this.data = resp;
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