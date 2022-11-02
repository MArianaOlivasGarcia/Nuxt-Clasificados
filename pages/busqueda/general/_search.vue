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



  <div v-else>

      <ProductList :products="products"/>

      <div  v-if="totalResults > 20 " class="d-flex justify-content-center">
        <Paginator :isGeneral="true" :totalResults="totalResults"/>
      </div>

  </div>


    <div>

    </div>
    
    
    
    
    </div>





  </div>
</template>

<script>
export default {
  async asyncData ({ params, store, query }) {


    try {
      
    let isLoading = true;
    let totalResults = null;
    let products = [];
    let keyword = '';

    const { search } = params

    keyword = search.split('-por-')[1].split('.')[0].replace(/-/g, ' ') 

    const searchForm = {
      page: query.pagina ? query.pagina : 1,
      keyword: keyword,
      category: undefined
    }

    const [resp, respTotal ] = await Promise.all([
      store.dispatch('search', searchForm ),
      store.dispatch('getTotalsSearch', searchForm )
    ])


     totalResults = Number(respTotal);
     products = resp.data;
     isLoading = false;


     return {
      isLoading,
      totalResults,
      products,
      keyword
     }

    } catch (error) {
      
    }
  },
  data() {
    return {
      // isLoading: true,
      // totalResults: null,
      // products: [],
      // keyword: '',
    }
  },
  async created() {
  },
  methods: {
    async getSearchResults() {
        
        this.products = [];
        this.isLoading = true;

        const { search } = this.$route.params

        this.keyword = search.split('-por-')[1].split('.')[0].replace(/-/g, ' ') 

        const searchForm = {
          page: this.$route.query.pagina ? this.$route.query.pagina : 1,
          keyword: this.keyword,
          category: undefined
        }

        const [resp, respTotal ] = await Promise.all([
        this.$store.dispatch('search', searchForm ),
          this.$store.dispatch('getTotalsSearch', searchForm )
        ])

        console.log({resp, respTotal})

        this.totalResults = Number(respTotal);
        this.products = resp.data

        this.isLoading = false;
    }
    },
    watch: {
      '$route.query.pagina': {
        // immediate: true,
        async handler(newValue, oldValue) {
          this.getSearchResults();
        }
      },
      
      
    }
}
</script>

<style>

</style>