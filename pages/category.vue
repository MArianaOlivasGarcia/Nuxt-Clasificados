<template>
  <div>

    <br />
    <div  class="mx-5 pl-1">
      <div class="mb-5">  
        <template>
          <div class="row">
          <div class=" col-lg-3 col-md-12 pt-4 mt-2" v-if="states.length > 0">
            <SearchFilters 
              :states="states"/>
          </div>
          <div  v-if="isLoading"  class="loaderPadding col-lg-9 col-md-12 pr-0">
            <Loader />
          </div>
          
          <div v-else class="pt-4 pt-md-0 col-lg-9 col-md-12 px-0 pl-md-4" >
            
            <PropertyHorizontalCard 
              v-for="item in properties"
              :key="item.folio"
              :name="item.folio"
              :item="item"
            /> 

            <div v-if="properties.length == 0"  class="text-center" >
            <h5>En este momento no hay propiedades como la que buscas.</h5>
            </div>


          <div  v-if="totalResults > 0 " class="d-flex justify-content-center">
            <Paginator :totalResults="totalResults" :ids="ids"/>
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
        ids: ''
      }
    },
    methods: {
      async getProperties() {
        this.totalResults = 0
        const search = {
          ...this.searchForm,
          ...this.$route.query,
          ids: this.ids
        }
        const resp = await  this.$store.dispatch('searchProducts', search )
        this.totalResults = resp.xtr.result
        this.ids = resp.xtr.ids
      }
    },
    created() {
        this.$store.dispatch('getStates');

        // this.$store.commit('setSearchFormValues', this.$route.query )
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