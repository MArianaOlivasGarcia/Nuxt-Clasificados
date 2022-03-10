<template>

    <form class="search-property">
        
        <div class="row justify-content-center filter-search">

          <h5>¿Que desea buscar?</h5>

          <p class="m-0 pt-2">Seleccione una operación</p>
          <div class="col-sm-12 col-md-6 col-lg-6 pr-1 pl-1" >
            <button type="button" 
                  style="width: 100%; font-size: 16px !important" 
                  class="btn btn-opt"
                  :class="{ 'btn-active': search.operation == 1 }"
                  @click="changeOperation( 1 )">
                  <span>Venta</span>
                <img class="opt-selected" v-if="search.operation == 1" style="width: 25px" src="https://img.icons8.com/material/72/ffffff/checkmark--v1.png" alt="">
                <img class="opt-diselected" v-else style="width: 25px" src="https://img.icons8.com/ios-glyphs/2x/ffffff/delete-sign.png" alt="">
            </button>
          </div>
          
          <div class="col-sm-12 col-md-6 col-lg-6 pr-1 pl-1 pb-2" >
            <button type="button" 
                  style="width: 100%; font-size: 16px !important" 
                  class="btn btn-opt"
                  :class="{ 'btn-active': search.operation == 2 }"
                   @click="changeOperation( 2 )">
                   <span>Renta</span>
              <img class="opt-selected" v-if="search.operation == 2" style="width: 25px" src="https://img.icons8.com/material/72/ffffff/checkmark--v1.png" alt="">
              <img class="opt-diselected" v-else style="width: 25px" src="https://img.icons8.com/ios-glyphs/2x/ffffff/delete-sign.png" alt="">

            </button>
          </div>

          <p v-if="formEnter && !search.operation" class="m-0 text-danger" style="font-size: 14px">Seleccione un tipo de operación</p>
        

            <div class="col-sm-12 col-md-12 col-lg-12 pr-1 pl-1 pt-2">
                <div class="form-group">
                  <div class="form-field">
                    <select 
                        v-model="search.state"
                        :class="search.state != '' ? 'form-control is-valid' : 'form-control is-invalid'">
                      <option :value="''">Seleccione un estado</option>
                      <option
                        v-for="state in states"
                        :key="state.folio"
                        :value="state.folio">
                        {{ state.name }}
                      </option>
                    </select>
                    <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                  </div>
                </div>
            </div>
        

        <div class="col-sm-12 col-md-12 col-lg-12 pr-1 pl-1">
            <div class="form-group">
              <div class="form-field">
                <select v-model="search.city" 
                :class="search.city != undefined ? 'form-control is-valid' : 'form-control is-invalid'">
                  <option :value="undefined">Seleccione un municipio</option>
                  <option
                    v-for="city in cities"
                    :key="city.id"
                    :value="city.id">
                    {{city.itemName}}
                  </option>
                </select>
                <div class="icon"><i class="icon-city"></i></div>
              </div>
            </div>
        </div>


         <div class="col-sm-12 col-md-12 col-lg-12 pr-1 pl-1">
            <div class="form-group">
              <div class="form-field">
                <select v-model="search.suburb" 
                :class="search.suburb != undefined ? 'form-control is-valid' : 'form-control is-invalid'">
                  <option :value="undefined">Seleccione una colonia</option>
                  <option
                    v-for="colonia in colonias"
                    :key="colonia.id"
                    :value="colonia.id">
                    {{colonia.itemName}}
                  </option>
                </select>
                <div class="icon"><i class="icon-city"></i></div>
              </div>
            </div>
        </div>
           
           
        <div class="col-sm-12 col-md-12 col-lg-12 pr-1 pl-1">
          <div class="form-group">
            <div class="form-field">
              <select
                v-model="search.category"
                :class="search.category != '' ? 'form-control is-valid' : 'form-control is-invalid'">
                <option :value="''">Seleccione tipo de inmueble</option>
                <option  v-for="category in categories" 
                  :key="category.value" 
                  :value="category.value" >{{ category.name }}</option>

              </select>
              <div class="icon"><i class="icon-address"></i></div>
            </div>
            <p v-if="formEnter && !search.category" class="m-0 text-danger" style="font-size: 14px">Seleccione un tipo de inmueble</p>
          </div>

        </div>


          
        <div class="col-sm-12 col-md-6 col-lg-6 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <div class="select-wrap">
              <input
                type="text"
                class="form-control color-search"
                placeholder="m²c"
                v-model="searchComplement.m2c"
              />
              <div class="icon"><i class="icon-ruler"></i></div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-sm-12 col-md-6 col-lg-6 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <div class="select-wrap">
              <input
                type="text"
                class="form-control color-search"
                placeholder="m²t"
                v-model="searchComplement.m2t"
              />
              <div class="icon"><i class="icon-text"></i></div>
            </div>
          </div>
        </div>
      </div>




      <div class="col-sm-12 col-md-12 col-lg-12 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <div class="select-wrap">

                  <!-- FUNCIONA
                     <div :class="{ 'd-none': search.operation != 1 }">
                  <veeno 
                  connect
                  @slide="sliderChange"
                  :step="100000"
                  :tooltips="[false, false]"
                  :handles="valuesVenta"
                  :range="{ 
                    min: valuesVenta[0], 
                    max: valuesVenta[1] 
                  }" 
                /> 
                  </div> -->
                 <div :class="{ 'd-none': search.operation != 1 }">
                  <veeno 
                  connect
                  @slide="sliderChange"
                  :step="100000"
                  :tooltips="[false, false]"
                  :handles="valuesVenta"
                  :range="{ 
                    min: 100000, 
                    max: 100000000 
                  }" 
                /> 
                  </div>

                  <div :class="{ 'd-none': search.operation != 2 }">
                   
                    <veeno 
                  :inputClass="'custom-slider'"
                  connect
                  @slide="sliderChange"
                  :step="500"
                  :tooltips="[false, false]"
                  :handles="valuesRenta"
                  :range="{ 
                    min: 500, 
                    max: 500000
                  }" 
                /> 
                  </div>
                


                <div class="row">
                   <div class="col-md-6" style="font-size: 12px" >
                  <span>Precio Mínimo<br>$ {{ searchComplement.pricemin ? parseInt(searchComplement.pricemin).toLocaleString('es-MX') : 'Sin precio mínimo'  }}</span> 
                  <!-- <input type="text" v-model="search.pricemin"> -->
                </div>
                 <div class="col-md-6" style="font-size: 12px"  >
                  <span>Precio Maximo<br>$ {{ searchComplement.pricemax ? parseInt(searchComplement.pricemax).toLocaleString('es-MX') : 'Sin precio maximo' }}</span> 
                </div>
                 </div> 
       
              
                 <!-- <div class=" text-right ">
                   <span style="font-size: 14px;" 
                                     @click="searchByPrice"
                                     class="pointer result col-6 p-0">Ver resultados</span>
                 </div> -->

            </div>
          </div>
        </div>
      </div>




      <div class="col-sm-12 col-md-6 col-lg-6 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <select
              v-model="searchComplement.bathroom"
              name=""
              id=""
              class="form-control"
            >
              <option :value="undefined">Baños</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <div class="icon"><i class="icon-bath"></i></div>
          </div>
        </div>
      </div>


      <div class="col-sm-12 col-md-6 col-lg-6 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <select v-model="searchComplement.bedroom" name="" id="" class="form-control">
              <option :value="undefined">Recámaras</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <div class="icon"><i class="icon-big-bed-with-one-pillow"></i></div>
          </div>
        </div>
      </div>

        <div v-if="tags.length > 0" class="col-md-12 align-self-end m-0 p-0">
            <h6>Filtros aplicados</h6>

            <span class="badge badge-pill p-2 m-1" 
                v-for="(tag, index) in tags"
                :key="index">
                {{ tag.title }} 
                <i class="pointer fas fa-times-circle"
                  v-if="tag.propertie != 'operation'"
                  @click=" deleteTag( tag.propertie, tag.value )"></i>
            </span>
        </div>


        <button 
          @click="goToResults"
          type="button"
          class="btn btn-primary">Actualizar búsqueda <i class="fas fa-search"></i></button>

        </div>
    </form>

</template>
<script>

import { mapGetters } from 'vuex';
import veeno from 'veeno';
import helpers from '@/helpers/helpers'

export default {
    components:{
      veeno
    },
    data(){
        return {
            search: {},
            searchComplement: {},
            tags: [],
            valuesVenta: [100000, 100000000],
            valuesRenta: [500, 500000],

            formEnter: false
        }
    },
    computed: {
        ...mapGetters({ states: 'getStatesList',
                        cities: 'getCitiesList', 
                        colonias: 'getColoniasList', 
                        categories: 'getPropertiesTypes',
                        searchForm: 'getSearFormValues',
                        userStateLocation: 'getUserStateLocation' })
    },
    created() {

      console.log('ON CREATED SEARCH FILTER');

       /// REMOVER COMENTARIO EN LO QUE NO HAY VEHICULOS
        // EJEMPLO /buscar-por-casa-con-alberca.html?pagina=1
        const { search } = this.$route.params

        const isGeneralSearch = search.split('-por-')[0];
        if( isGeneralSearch == 'buscar' ) {


          // Obtener la ubicación del usuario (estado)
          //const stateUser = this.$store.getters.getStateById( this.userStateLocation.folio );
          

          this.search = {
            category: '',
            operation: undefined,
            state: this.userStateLocation.folio,
            city: undefined,
            suburb: undefined
          }
          this.searchComplement = {
            bathroom: undefined,
            bedroom: undefined,
            pricemin: 0,
            pricemax: 0,
            m2c: '',
            m2t: ''
          }

          return;
        }


        /// REMOVER FIN COMENTARIO EN LO QUE NO HAY VEHICULOS


      // CARGAR LOS DATOS EN EL FORMULARIO DE LA BUSQUEDA QUE SE HIZO
      const { category, operation, state, city, suburb, bathroom, bedroom, pricemin, pricemax, m2c, m2t } = this.searchForm

      this.search = {
        category,
        operation,
        state,
        city,
        suburb
      }
      this.searchComplement = {
        bathroom,
        bedroom,
        pricemin,
        pricemax,
        m2c,
        m2t
      }
      
    

    },
    watch: {
      'search.state': {
        immediate: true,
        async handler( newValue, oldValue  ) {
          
          await this.$store.dispatch('getCities', this.search.state )
          
          if ( oldValue == undefined ){
            return;
          }

          this.search.city = undefined;
          this.search.suburb = undefined;
          this.$store.commit('resetSuburs', [])
          
        }
      },
      'search.city': {
        immediate: true,
        async handler( newValue, oldValue  ) {
          
          await this.$store.dispatch('getColonias', this.search.city )
          
          if ( oldValue == undefined ){
            return;
          }

          this.search.suburb = undefined;

          
        }
      }
    },
    methods: {
      goToResults() {
    
        // if ( !this.showQuestion && this.search.city == '' ){
        //   this.showQuestion = true;
        //   return;
        // }

        this.formEnter = true;

        if ( !this.search.operation || !this.search.category  ) {
          return;
        }

        const { category, operation, state, city, suburb } = this.search
        console.log({ category, operation, state, city, suburb })

       
        const urlSeach = `${helpers.normalize(this.$store.getters.getCategoryById(category)?.name)}_${category}` 
               + `-en-${ operation == 1 ? 'venta_1' : 'renta_2' }`
               + `-en-${ helpers.normalize( this.$store.getters.getStateById(state)?.name ) }_${state}`
               + `${ city != undefined ? `-en-${ helpers.normalize( this.$store.getters.getMunicipalityById(city)?.itemName ) }_${city}` : '' }`
               + `${ suburb != undefined ? `-en-${ helpers.normalize( this.$store.getters.getSuburbById(suburb)?.itemName ) }_${suburb}` : '' }`
     

        // Validar que en el searchComplement haya algun valor a buscar
        let data = []

        for (const property in this.searchComplement) {
          if ( this.searchComplement[property] || this.searchComplement[property] > 0 ) {
            data.push(`${this.searchComplement[property]}_${ property == 'bathroom' ? 'banos' :
                          property == 'bedroom' ? 'recamaras' :
                          property == 'pricemin' ? 'minimo' :
                          property == 'pricemax' ? 'maximo' : property }`  )
          } else {
            data.push(':)')
          }
        }
        
        console.log('DATAAAA')
        console.log(data)


        let urlComplement = ''
        data.forEach( (element, index) => {
          if ( element != ':)' ) {
            urlComplement = urlComplement + `${ element }-y-`
          } 
        });
        // Quitar el ultimo -y-
        urlComplement = urlComplement.substr(0, urlComplement.length - 3)

        console.log(urlComplement)

        this.$router.push({
          name: 'bienesraices-search',
          params: {
            search:  urlSeach + `${ urlComplement.length > 0 ? `-con-${urlComplement}` : '' }` + '.html'
          }
        });

        //this.formEnter = false;

        
      },
      changeOperation( operation ) {
        this.searchComplement.pricemin = 0;
        this.searchComplement.pricemax = 0;
        this.search.operation = operation;
      },
      sliderChange( e ){
        this.searchComplement.pricemin = e.values[0];
        this.searchComplement.pricemax = e.values[1];
      },
    }
};
</script>

<style scoped>
.color-search {
  color: #000 !important;
}
.filter-search {
  background-color: #FAE786;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  border-radius: 15px;
  padding: 15px 10px;
}
.postcard-bar {
  width: 50px;
  height: 3px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #00569d;
  transition: width 0.2s ease;
}
form:hover .postcard-bar {
  width: 100px;
}


.badge {
  background-color: white !important;
  font-weight: 600;
}

i{
  font-size: 14px;
  color: #00569D;
}




.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: white;
  border-radius: 20px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  padding: 0;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #00569D;
  cursor: pointer;
  border-radius: 20px;
}

.custom-slider {
  background: red;
}

span.result {
  font-weight: bold;
  color: #00569D ;
}






.btn-opt {
  /* background-color: #fff;
  color: #00569d; */
  color: white !important;
  background-color: #043a68;
  border-radius: 20px ;
  height: 46px !important;
  font-family: 'Poppins';
}

.btn-opt:hover {
  /* color: white !important;
  background-color: #043a68;
  transition: 0.2s all ease-in; */
  background-color: #00569d !important;
  transition: 0.2s all ease-in;
  color: white !important;
}

.btn-active{
  background-color: #00569d !important;
  color: white !important;
}



.btn {
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px !important;
}



button img.opt-selected {
  background: #6FD18C;
  border-radius: 100%;
  padding: 2px;
}

button img.opt-diselected {
  background: #E9303D;
  border-radius: 100%;
  padding: 4px;
}



.is-valid {
  border: 1.5px solid #6FD18C !important;
}

.is-invalid {
  border: 1.5px solid #E9303D !important;
}

button i {
  color: white;
}


</style>