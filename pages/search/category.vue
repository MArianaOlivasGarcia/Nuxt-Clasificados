<template>
  <div>

    <div  class="mx-5 pl-1">
      <div class="mb-5">  
        <template>
          <div class="row">
          <div  v-if="isLoading"  class="loaderPadding col-12 pr-0">
            <Loader />
          </div>

          
          
          <div v-else class="pt-4 pt-0 col-12 px-0 pl-4" >

            <h5 v-if="totalResults > 0">Total de resultados: <span>{{ totalResults }} propiedades.</span></h5>
            
            <PropertyCardLarge
              v-for="item in properties"
              :key="item.folio"
              :name="item.folio"
              :item="item"
            /> 

            <div v-if="properties.length == 0"  class="text-center" >
            <h5>En este momento no hay propiedades como la que buscas.</h5>
            </div>


          <div  v-if="totalResults > 0 " class="d-flex justify-content-center pb-5">
            <PaginatorNone :totalResults="totalResults"/>
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
    layout: 'none',
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
          limit: 10,
          ids: (this.ids) ? this.ids : ''
        }
        const resp = await  this.$store.dispatch('searchProducts', search )
        this.totalResults = resp.xtr.result
        // this.ids = resp.xtr.ids
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