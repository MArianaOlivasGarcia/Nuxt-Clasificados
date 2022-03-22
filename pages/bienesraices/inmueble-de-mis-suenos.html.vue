<template>
  <div class="container mt-5" v-if="!isLoading"> 
    
    <div class="text-center">
      <h1 >El inmueble de tus sueños.</h1>
      <p>Estos son los mejores resultados de acuerdo a tus requerimientos.</p>
    </div>


    <PropertyHorizontalCard 
      :item="testProperty"
    /> 

  </div>
</template>

<script>
export default {

  data() {
    return {
      isLoading: true,
      testProperty: null
    }
  },
  async created() {
    this.testProperty = await this.$store.dispatch('getPropertyDetail', 2447)
    this.isLoading = false;
  }

}
</script>

<style>

</style>