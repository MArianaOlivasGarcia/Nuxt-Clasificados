<template>
  <div class="container-fluid">

    <div class="container my-5">

      <div class="row d-flex flex-column">
        <h4 class="mt-0">Buscar: {{ keyword.charAt(0).toUpperCase() + keyword.slice(1) }}</h4>
        <p v-if="!isLoading">Total de resultados: <span>{{ totalResults.toLocaleString() }}.</span></p>    
      </div>

      
      
      <div class="row" v-if="isLoading">
        <div class="col">
          <Loader />
        </div>
      </div>  



      <ProductList  
        v-else
        :products="products"/>



      


    <div>

    </div>
    
    
    
    
    </div>





  </div>
</template>

<script>
export default {
    data() {
      return {
        isLoading: true,
        totalResults: null,
        keyword: '',
        products: []
      }
    },
    async created() {


      const { search } = this.$route.params

      this.keyword = search.split('-por-')[1].split('.')[0].replace(/-/g, ' ') 

      const searchForm = {
        page: this.$route.query.pagina ? this.$route.query.pagina : 1,
        keyword: this.keyword,
        category: 1
      }

      const [resp, respTotal ] = await Promise.all([
        this.$store.dispatch('search', searchForm ),
        this.$store.dispatch('getTotalsSearch', searchForm )
      ])

      console.log(resp)
      console.log(respTotal)

      this.totalResults = Number(respTotal);
      this.products = resp.data


      this.isLoading = false;

    }
}
</script>

<style>

</style>