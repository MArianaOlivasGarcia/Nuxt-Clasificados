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
    head: {
      titleTemplate: 'Clasificados Contacto | Propiedades',
    },
    created() {
        this.$store.dispatch('getStates');

        // this.$store.commit('setSearchFormValues', this.$route.query )
        const search = {
          ...this.searchForm,
          ...this.$route.query
        }
        console.log(search)
        this.$store.dispatch('searchProducts', search )
    },
    computed: {
      ...mapGetters({ searchForm: 'getSearFormValues', 
                      isLoading: 'getIsLoading',
                      properties: 'getPropertiesList',
                      states: 'getStatesList'}),
    },
    watch: { 
        "$route.query": {
          handler() {
            const search = {
              ...this.searchForm,
              ...this.$route.query
            }

            console.log(search)
            
            this.$store.dispatch("searchProducts", search );
        }
     }
   }
}
</script>