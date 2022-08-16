<template>
  <div>

    
    <div  class="mx-5 pl-1">
      <div class="mb-5">  
        <template>
          <div class="row">
          <div class=" col-lg-3 col-md-12 pt-4 mt-2" v-if="states.length > 0">
            <SearchFilters 
              :states="states"/>
              <h5>Buscador</h5>
          </div>
          <div  v-if="isLoading"  class="loaderPadding col-lg-9 col-md-12 pr-0">
            <Loader />
          </div>

          
          
          <div v-else class="pt-4 pt-md-0 col-lg-9 col-md-12 px-0 pl-md-4 mt-4" >

            <h5 class="mb-4" v-if="totalResults > 0">Total de resultados: <span>{{ totalResults.toLocaleString() }} propiedades.</span></h5>
            
            <PropertyHorizontalCard 
              v-for="item in properties"
              :key="item.folio"
              :name="item.folio"
              :item="item"
            /> 

            <div v-if="properties.length == 0"  class="text-center mt-5 pt-5" >
            <h5>En este momento no hay propiedades como la que buscas.</h5>
            </div>


          <div  v-if="totalResults > 20 " class="d-flex justify-content-center">
            <Paginator :totalResults="totalResults"/>
            <!-- <Paginator :totalResults="totalResults" :ids="ids"/> -->
          </div>

          </div>

         

        </div>
        </template>
      </div>
    </div>
  </div>
</template>


<script>

import { mapGetters } from 'vuex';

export default {
    head() {
      return {
        title: 'Clasificados Contacto | Propiedades',
      }
    },
    data(){
      return {
        totalResults: 0,
        // ids: ''
      }
    },
    methods: {
      async getProperties() {
        this.totalResults = 0
        const search = {
          ...this.searchForm,
          ...this.$route.query,
          limit: 20,
          ids: (this.ids) ? this.ids : ''
        }
        const resp = await  this.$store.dispatch('searchProducts', search )
        this.totalResults = resp.xtr.result
        // this.ids = resp.xtr.ids
      }
    },
    created() {
        this.$store.dispatch('getStates');
        this.getProperties();
    },
    computed: {
      ...mapGetters({ searchForm: 'getSearFormValues', 
                      isLoading: 'getIsLoading',
                      properties: 'getPropertiesList',
                      states: 'getStatesList'}),
    },
    watch: { 
        "$route.query": {
          async handler() {
            this.getProperties()
       }
     }
   }
}
</script>