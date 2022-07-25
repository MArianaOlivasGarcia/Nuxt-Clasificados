<template>
  <client-only  v-if="!loading">

    
    <div  class="mx-5 pl-1">
      <div class="mb-5">  
        <template>
          <div class="row">
            <div class=" col-lg-3 col-md-12 pt-4 mt-2" v-if="states.length > 0">
              <SearchFilters 
                :states="states"/>
            </div>
            <div  v-if="loadingProperties"  class="loaderPadding col-lg-9 col-md-12 pr-0">
              <Loader />
            </div>

            
            
            <div v-else class="pt-4 pt-md-0 col-lg-9 col-md-12 px-0 pl-md-4 mt-4" >

              <h5 class="mb-4" v-if="totalResults > 0">Total de resultados: <span>{{ totalResults.toLocaleString() }} {{ totalResults == 1 ? 'propiedad' : 'propiedades' }}.</span></h5>

              <PropertyCardHorizontal 
                v-for="property in properties"
                :key="property.folio"
                :property="property" />

                <!-- <PropertyHorizontalTest
                v-for="property in properties"
                :key="property.folio"
                :item="property" />  -->


            

              <div v-if="properties.length == 0"  class="text-center mt-5 pt-5" >
              <h5>En este momento no hay propiedades como la que buscas.</h5>
              </div>


              <div  v-if="totalResults > 20 " class="d-flex justify-content-center">
                <Paginator :totalResults="totalResults"/>
                <!-- <Paginator :totalResults="totalResults" :ids="ids"/> -->
              </div>

            </div>

            <WhatsAppFormV2
              v-if="showWhatsForm"
                :v="$v"
                :whatsForm="whatsForm"/>

          

          </div>
        </template>
      </div>
      
    </div>

    
  </client-only>
</template>


<script>

import { mapGetters } from 'vuex';
import { required, email } from 'vuelidate/lib/validators' 

export default {
  async asyncData ({ params, store, query }) {


      try {


      let loadingProperties = true;
      let totalResults = 0;
      let properties = [];

      const { search } = params;

      // 1. cortar *con*
      const urlCortada = search.split('-con-')
      let primeraUrl = urlCortada[0]?.split('.html')[0] // Quitar el .html;
      const segundaUrl = urlCortada[1]?.split('.html')[0] //Quitar el .html
      // Cortar las url
      let primerSearch = primeraUrl.split('-en-')
      const segundoSearch = segundaUrl?.split('-y-')
      
      let googlePlace = '';
      if ( search.includes('-ubicado-en-') ){
          console.log('ES CON GOOGLE')
          googlePlace = primeraUrl.split('-ubicado-en-')[1];
          primerSearch = urlCortada[0]?.split('.html')[0].split('-ubicado-en-')[0].split('-en-')
      }

      // Crear arreglo con todos los valores que asignaremos a la busqueda
        let buscar = []
        let buscar2 = []
        
        let param = '';
        // Agregar los valores del primer search
        primerSearch.forEach((element, index) => {
          // Si es una busqueda de google 
          // if ( search.includes('-ubicado-en-') ){
            param = element.split('_')[1]

          // } else {
            // param = element.split('_')[1]
          // }
          buscar.push(param)
        });

        segundoSearch?.forEach(element => {
          const param = {
            key: element.split('_')[1],
            value: element.split('_')[0]
          }
          buscar2.push(param)
        });

        console.log('AQUIII')
        console.log(buscar[0])

        const searchForm = {
          page: query.pagina ? query.pagina : 1,
          category: 1,
          type: buscar[0],
          operation: buscar[1],
          state: !search.includes('-ubicado-en-') ? buscar[2] : undefined,
          keywordAddrs: search.includes('-ubicado-en-') ? googlePlace : undefined,
          city: buscar[3],
          suburb: buscar[4],
          bathroom: buscar2.find(e => e.key === 'banos')?.value,
          bedroom: buscar2.find(e => e.key === 'recamaras')?.value,
          pricemin: buscar2.find(e => e.key === 'minimo')?.value,
          pricemax: buscar2.find(e => e.key === 'maximo')?.value,
          m2t: buscar2.find(e => e.key === 'm2t')?.value,
          m2c: buscar2.find(e => e.key === 'm2c')?.value,
        }


        console.log(searchForm)


        const [resp, respTotal] = await Promise.all([
            store.dispatch('search', searchForm ),
            store.dispatch('getTotalsSearch', searchForm )
        ])

        totalResults = Number(respTotal);
        properties = resp.data

        loadingProperties = false;




      // fetch data from API

        return {
          loadingProperties,
          totalResults,
          properties
        }
      } catch (error) {
        // Redirect to error page or 404 depending on server response
      }
    },
    head() {
      return {
        title: 'Clasificados Contacto | Propiedades',
      }
    },
    data(){
      return {
        // properties: [],
        // totalResults: 0,
        whatsForm: {
          name: '',
          whatsapp: '',
          message: '',
          email: ''
        },
        loading: true,
        // loadingProperties: true
      }
    },
   
    methods: {
      async getProperties() {
        this.loadingProperties = true;
        this.properties = [];


        /*
        * EJEMPLO: /casa_1-en-venta_1-en-quintana-roo_179-en-benito-juarez_129
        * -en-hacienda-real-caribe_1233-con-precio-minimo_10000-y-precio-maximo_100000-y
        * -banos_2-y-cuartos_10-y-m2t_120-y-m2c_100-con-.html
        * 
        * ORDEN:
        * category
        * operation
        * state
        * municipality/city
        * suburb/colony
        */

        const { search } = this.$route.params
        

        // 1. cortar *con*
        const urlCortada = search.split('-con-')
        let primeraUrl = urlCortada[0]?.split('.html')[0] // Quitar el .html;

        const segundaUrl = urlCortada[1]?.split('.html')[0] //Quitar el .html

        // Cortar las url
        let primerSearch = primeraUrl.split('-en-')
        const segundoSearch = segundaUrl?.split('-y-')
        
        let googlePlace = '';
         // Verificar si viene ubicación con google
        if ( search.includes('-ubicado-en-') ){
          console.log('ES CON GOOGLE')
          googlePlace = primeraUrl.split('-ubicado-en-')[1];
          primerSearch = urlCortada[0]?.split('.html')[0].split('-ubicado-en-')[0].split('-en-')
        }

        
        // Crear arreglo con todos los valores que asignaremos a la busqueda
        let buscar = []
        let buscar2 = []
        
        let param = '';
        // Agregar los valores del primer search
        primerSearch.forEach((element, index) => {
          // Si es una busqueda de google 
          // if ( search.includes('-ubicado-en-') ){
            param = element.split('_')[1]

          // } else {
            // param = element.split('_')[1]
          // }
          buscar.push(param)
        });

        segundoSearch?.forEach(element => {
          const param = {
            key: element.split('_')[1],
            value: element.split('_')[0]
          }
          buscar2.push(param)
        });

        const searchForm = {
          page: this.$route.query.pagina ? this.$route.query.pagina : 1,
          category: buscar[0],
          operation: buscar[1],
          state: !search.includes('-ubicado-en-') ? buscar[2] : undefined,
          keywordAddrs: search.includes('-ubicado-en-') ? googlePlace : undefined,
          city: buscar[3],
          suburb: buscar[4],
          bathroom: buscar2.find(e => e.key === 'banos')?.value,
          bedroom: buscar2.find(e => e.key === 'recamaras')?.value,
          pricemin: buscar2.find(e => e.key === 'minimo')?.value,
          pricemax: buscar2.find(e => e.key === 'maximo')?.value,
          m2t: buscar2.find(e => e.key === 'm2t')?.value,
          m2c: buscar2.find(e => e.key === 'm2c')?.value,
        }


        const [resp, respTotal ] = await Promise.all([
            this.$store.dispatch('search', searchForm ),
            this.$store.dispatch('getTotalsSearch', searchForm )
        ])
          //  const resp = await  this.$store.dispatch('search', searchForm )
          // const respTotal = await  this.$store.dispatch('getTotalsSearch', searchForm )
        this.totalResults = Number(respTotal);
        this.properties = resp.data

        // console.log(this.properties)

        this.loadingProperties = false;

      }
    },
    created() {
        // this.getProperties();
        this.$nextTick( function() {
          this.loading = false
        })
    },
    validations: {
        whatsForm: {
            name: { required },
            whatsapp: { required },
            message: { required },
            email: { required, email }
        }
    },
    computed: {
      ...mapGetters({ searchForm: 'getSearFormValues', 
                      // isLoading: 'getIsLoading',
                      // properties: 'getPropertiesList',
                      states: 'getStatesList',
                      whatsContactValues: 'getWhatsContactValues',
                      showWhatsForm: 'getShowWhatsForm' }),
                      
    },
    watch: {
      '$route.query.pagina': {
        // immediate: true,
        async handler(newValue, oldValue) {

          console.log({newValue, oldValue})
          this.getProperties();
        }
      },
      
      
    }
}
</script>