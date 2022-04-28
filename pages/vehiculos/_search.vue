<template>

  <client-only  v-if="!loading">

  <div  class="mx-5 pl-1">
      <div class="mb-5">  
        <template>
          <div class="row">
          <div class=" col-lg-3 col-md-12 pt-4 mt-2">
            <CarsSearchFilters />
          </div>
          

          
          
          <div class="pt-4 pt-md-0 col-lg-9 col-md-12 px-0 pl-md-4 mt-4" >

            <h5 class="mb-4">Total de resultados: <span>{{ totalResults.toLocaleString() }} {{ totalResults == 1 ? ' vehículo' : 'vehículos' }}.</span></h5>

            <CarCardHorizontal 
                v-for="vehiculo in vehiculos"
                :key="vehiculo.id"
                :vehiculo="vehiculo" />

          

            
              <div v-if="vehiculos.length == 0"  class="text-center mt-5 pt-5" >
                <h5>En este momento no hay vehículos como lo que buscas.</h5>
              </div>


              <div  v-if="totalResults > 20 " class="d-flex justify-content-center">
                <Paginator :totalResults="totalResults"/>
              </div>


          </div>

         

        </div>
        </template>
      </div>
    </div>

  </client-only>

</template>

<script>
export default {
  head() {
      return {
        title: 'Clasificados Contacto | Vehículos',
      }
  },
  data() {
    return {
      vehiculos: [],
      totalResults: 0,
      loading: true
    }
  },
  created() {
    this.getVehiculos()

    this.$nextTick( function() {
        this.loading = false
    })
  },
  methods: {
    async getVehiculos() {

      this.vehiculos = [];

      /*
      * EJEMPLO: /auto_1-en-venta_1-en-quintana-roo_179-en-benito-juarez_129
      * -en-hacienda-real-caribe_1233-con-precio-minimo_10000-y-precio-maximo_100000.html
      * 
      * ORDEN:
      * category
      * operation
      * state
      * municipality/city
      * suburb/colony
      */

      const { search } = this.$route.params


       // 1. cortar url
        const urlCortada = search.split('-con-')

        // Marca, tipo, modelo, operation acura, autos, ilx, venta
        let primeraUrl = urlCortada[0]?.split('.html')[0].split('-localizado-en-')[0] // Quitar el .html;

        // Localización
        const segundaUrl = urlCortada[0]?.split('.html')[0].split('-localizado-en-')[1] //Quitar el .html

        const terceraUrl = urlCortada[1]?.split('.html')[0] //Quitar el .html

        console.log(primeraUrl)
        console.log(segundaUrl)
        console.log(terceraUrl)




        // Cortar las url
        let primerSearch = primeraUrl?.split('-en-')
        let segundoSearch = segundaUrl?.split('-en-')
        let terceroSearch = terceraUrl?.split('-y-')
        
        // let googlePlace = '';
         // Verificar si viene ubicación con google
        // if ( search.includes('-ubicado-en-') ){
        //   console.log('ES CON GOOGLE')
        //   googlePlace = primeraUrl.split('-ubicado-en-')[1];
        //   primerSearch = urlCortada[0]?.split('.html')[0].split('-ubicado-en-')[0].split('-en-')
        // }

        
        // Crear arreglo con todos los valores que asignaremos a la busqueda
        let buscar = []
        let buscar2 = []
        let buscar3 = []
        
        let param = '';
        // Agregar los valores del primer search
        primerSearch.forEach((element, index) => {
          param = element.split('_')[1]
          buscar.push(param)
        });

        segundoSearch?.forEach((element, index) => {
          param = element.split('_')[1]
          buscar2.push(param)
        });

        terceroSearch?.forEach(element => {
          const param = {
            key: element.split('_')[1],
            value: element.split('_')[0]
          }
          buscar3.push(param)
        });

        console.log(buscar)
        console.log(buscar2)
        console.log(buscar3)


        const searchForm = {
          page: this.$route.query.pagina ? this.$route.query.pagina : 1,
          brand: buscar.length > 1 ? buscar[0] : undefined,
          subcat: buscar.length >= 3 ? buscar[1] : undefined,
          type: buscar.length >= 4 ? buscar[2] : undefined,
          operation: buscar.length == 1 ? buscar[0] : buscar[ buscar.length - 1 ],
          state: !search.includes('-ubicado-en-') ? buscar2[0] : undefined,
          keywordAddrs: search.includes('-ubicado-en-') ? googlePlace : undefined,
          municipality: buscar2[1],
          suburb: buscar2[2],
          year_to: buscar3.find(e => e.key === 'aniomax')?.value,
          year_from: buscar3.find(e => e.key === 'aniomin')?.value,
          pricemin: buscar3.find(e => e.key === 'minimo')?.value,
          pricemax: buscar3.find(e => e.key === 'maximo')?.value,
        }

        console.log(searchForm)

        const resp = await  this.$store.dispatch('searchVehiculos', searchForm )
        console.log('RESPUESTA')
        console.log(resp)
        this.totalResults = resp.xtr.result
        this.vehiculos = resp.data

        // console.log('SE ENCONTRO')
        // console.log(this.vehiculos)


    }
  }
}
</script>

<style>

</style>