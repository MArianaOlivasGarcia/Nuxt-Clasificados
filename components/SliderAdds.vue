<template>

  <client-only>
  <agile autoplay :autoplaySpeed="6000" :timing="'linear'" :navButtons="false" >
        <div v-for="(image, i) in images" class="slide" :key="i">
            <img :src="image" alt="">
        </div>
  </agile>

  </client-only>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://http2.mlstatic.com/D_NQ_809590-MLA49570613371_042022-OO.webp',
        'https://http2.mlstatic.com/D_NQ_809590-MLA49570613371_042022-OO.webp',
      ]
    }
  }
}
</script>

<style>

</style>