<template>
  <form v-on:submit.prevent="goToResults"
        autocomplete="off" 
      class="p-3 search-property">

      <h4 class="m-0 pb-2">¿Que deseas buscar?</h4>
      <div class="row justify-content-center">


      <!-- <p class="m-0">Selecciona una operación</p> -->
      <!-- <div class="row pb-2" style="width: 100%; ">
          <div class="col-6 p-1" >
              <button type="button" 
                  style="width: 80%; font-size: 16px !important" 
                  class="btn btn-opt"
                  :class="{ 'btn-active': search.operation == 1 }"
                  @click="changeOperation( 1 )">
                  <span>Venta</span>
                <img class="opt-selected" v-if="search.operation == 1" style="width: 25px" src="https://img.icons8.com/material/72/ffffff/checkmark--v1.png" alt="">
                <img class="opt-diselected" v-else style="width: 25px" src="https://img.icons8.com/ios-glyphs/2x/ffffff/delete-sign.png" alt="">
              </button>
            
          </div>
           <div class="col-6 p-1" >
            <button type="button" 
                  style="width: 80%; font-size: 16px !important" 
                  class="btn btn-opt"
                  :class="{ 'btn-active': search.operation == 2 }"
                  @click="changeOperation( 2 )">
                  <span>Renta</span>
                <img class="opt-selected" v-if="search.operation == 2" style="width: 25px" src="https://img.icons8.com/material/72/ffffff/checkmark--v1.png" alt="">
                <img class="opt-diselected" v-else style="width: 25px" src="https://img.icons8.com/ios-glyphs/2x/ffffff/delete-sign.png" alt="">
              </button>
            
          </div>
        </div> -->


    <div :class="'col-sm-12 col-md-6 col-lg-6 pr-1 pl-1'">
        
        <div class="form-group text-center text-md-left">
          <label>Tipo de operación</label>
          <div class="form-field">
            <select
              v-model="search.operation"
              class="form-control is-valid"
            >
              <option  value="1">Venta</option>
              <option  value="2">Renta</option>
            </select>
           
            <div class="icon"><i class="fa fa-usd" aria-hidden="true"></i></div>
          </div>
        </div>


      </div>



      <div :class="'col-sm-12 col-md-6 col-lg-6 pr-1 pl-1'">
        
        <div class="form-group text-center text-md-left">
          <label>Tipo de inmueble</label>
          <div class="form-field">
            <select
              v-model="search.category"
              class="form-control is-valid"
            >
              <option  v-for="category in categories" :key="category.value" :value="category.value" >{{ category.name }}</option>
            </select>
           
            <div class="icon"><i class="icon-address"></i></div>
          </div>
        </div>


      </div>



      <div :class="'col-sm-12 col-md-12 col-lg-12 pr-1 pl-1'">
        
        <div class="form-group text-center text-md-left">
          <label>Ubicación</label>
          <div class="form-field">
            
               <client-only>
                <gmap-autocomplete 
                  @keyup="googleSearchChange" 
                  @place_changed="updatePlace" 
                  
                  placeholder="Ej: Ciudad de México, CDMX, México" >
                </gmap-autocomplete>
                  <!-- <gmap-place-input @keyup="googleSearchChange" @place_changed="updatePlace"></gmap-place-input> -->
              </client-only>
           
          </div>
        </div>


      </div>




        <!-- <div class="'col-sm-12 col-md-12 col-lg-12 pr-1 pl-1'">
          <div class="form-group">
            <div class="form-field" style="text-align: start;">


              <p class="m-0">{{ 'Ubicación'}}</p>
              <div class="placeContainer col-12 pr-1 pl-1 mb-3">
                      <client-only>
                <gmap-autocomplete 
                  @keyup="googleSearchChange" 
                  @place_changed="updatePlace" 
                  
                  placeholder="Ej: Ciudad de México, CDMX, México" >
                </gmap-autocomplete>
              </client-only>
              </div>


            </div>
          </div>
        </div> -->

        


         
      

    <template v-if="showAvanzado">

      <div class="col-6 col-md-3 col-lg-3 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <div class="select-wrap">
              <input
                type="text"
                :class="searchComplement.m2c == null || searchComplement.m2c == ''  ? 'form-control' : 'form-control is-valid'"
                placeholder="m² construcción"
                v-model="searchComplement.m2c"
              />
              <div class="icon"><i class="icon-ruler"></i></div>
            </div>
          </div>
        </div>
      </div> 


      <div class="col-6 col-md-3 col-lg-3 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <div class="select-wrap">
              <input
                type="text"
                :class="searchComplement.m2t == null || searchComplement.m2t == '' ? 'form-control' : 'form-control is-valid'"
                placeholder="m² terreno"
                v-model="searchComplement.m2t"
              />
              <div class="icon"><i class="icon-text"></i></div>
            </div>
          </div>
        </div>
      </div> 

      <div class="col-6 col-md-3 col-lg-3 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <select
              v-model="searchComplement.bathroom"
              :class="searchComplement.bathroom == null || searchComplement.bathroom == '' ? 'form-control' : 'form-control is-valid'"
            >
            <option value="">Baños</option>
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



      <div class="col-6 col-md-3 col-lg-3 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <select
              v-model="searchComplement.bedroom"
              :class="searchComplement.bedroom == null || searchComplement.bedroom == '' ? 'form-control' : 'form-control is-valid'"
            >
            <option value="">Recámaras</option>
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


       

            <div class="col-8" style="">

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
                    max: 100000
                  }" 
                /> 
                  </div>
            </div>

            <div class="col-8">
              <div class="row">
                <div class="col-md-6" style="font-size: 12px" >
                  <span>Precio Mínimo<br>$ {{ searchComplement.pricemin ? parseInt(searchComplement.pricemin).toLocaleString('es-MX') : 'Sin precio mínimo'  }}</span> 
                </div>
                <div class="col-md-6" style="font-size: 12px"  >
                  <span>Precio Maximo<br>$ {{ searchComplement.pricemax ? parseInt(searchComplement.pricemax).toLocaleString('es-MX') : 'Sin precio maximo' }}</span> 
                </div>
              </div>
            </div> 
        
              

       


    </template> 

      <!-- <div class="row" style="width: 100%">
        <div class="col px-1" >
            <input type="text" 
              id="input-search" 
              v-model="search.keyword"
              placeholder="Busca por características, marcas." 
              class="form-control">
          </div>
      </div>
        -->
        
        
      <div class="row text-right mt-2 mb-2" style="width: 100%">
        <a class="pl-2 pt-1 pointer" style="font-size: 15px" @click="changeShowAvanzada">
          {{ !showAvanzado ? 'Realizar búsqueda avanzada' : 'Ocultar busqueda avanzada.' }}
          <i v-if="!showAvanzado" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
        </a>
      </div>
      

      <span class="text-danger" v-if="showQuestion">No tiene seleccionado un municipio ¿Desea realizar la búsqueda?</span>
  <!-- Botón -->
      <div class="col-sm-6 col-md-6 col-lg-4 pr-1 pl-1 pt-2">
        <button
          type="submit"
          value="Search"
          class="form-control btn btn-search"
        >
          BUSCAR 
          <i class="fas fa-search"></i>
        </button>
      </div> 

     


    </div>

     

  </form>

  
</template>
<script>

import veeno from 'veeno';
import { mapGetters } from 'vuex';
import helpers from '@/helpers/helpers'

export default {
  components:{
    veeno
  },
  data() {
    return {
      valuesVenta: [100000, 100000000],
      valuesRenta: [500, 500000],
      showAvanzado: false,
      showQuestion: false,
      search: {
        category: 1,
        operation: 1,
        state: '61',
        city: '',
        suburb: '',
       // type: null,
       keywordAddrs: ''
      }, 
      searchComplement: {
        bathroom: '',
        bedroom: '',
        m2c: null,
        m2t: null,
        pricemax: null,
        pricemin: null
      },


      isGoogleSearch: false
    };
  },
  methods: {
    googleSearchChange( event ){
      if ( event.target.value === '' ) {
        this.isGoogleSearch = false;
      } else {
        this.isGoogleSearch = true;
      }
    },
    updatePlace( what ) {
      this.search.keywordAddrs = what.formatted_address;
      console.log(this.search.keywordAddrs)
      // console.log(what.formatted_address)
      console.log(what)
    },
    sliderChange( e ){
      this.searchComplement.pricemin = e.values[0];
      this.searchComplement.pricemax = e.values[1];
    },
    goToResults() {
    
      // if ( !this.showQuestion && this.search.city == '' ){
      //   this.showQuestion = true;
      //   return;
      // }



      const { category, operation, state, city, suburb, keywordAddrs} = this.search
      console.log(state)

      const urlSeach = `${helpers.normalize(this.$store.getters.getCategoryById(category).name)}_${category}` 
            + `-en-${ operation == 1 ? 'venta_1' : 'renta_2' }`
            + `${ keywordAddrs != '' ? `-ubicado-en-${ helpers.normalizeUbications( keywordAddrs ) }` : '' }`
            //+ `-en-${ helpers.normalize( this.$store.getters.getStateById(state).name ) }_${state}`
            // + `${ city != '' ? `-en-${ helpers.normalize( this.$store.getters.getMunicipalityById(city).itemName ) }_${city}` : '' }`
            // + `${ suburb != '' ? `-en-${ helpers.normalize( this.$store.getters.getSuburbById(suburb).itemName ) }_${suburb}` : '' }`
            

      // Validar que en el searchComplement haya algun valor a buscar
      let data = []

      for (const property in this.searchComplement) {
        if ( this.searchComplement[property] || this.searchComplement[property] > 0 ) {
          data.push(`${Number(this.searchComplement[property])}_${ property == 'bathroom' ? 'banos' :
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
      
    },
    changeOperation( type ) {
      this.searchComplement.pricemin = 0;
      this.searchComplement.pricemax = 0;
      this.search.operation = type;
    },
    changeShowAvanzada(){
      this.showAvanzado = !this.showAvanzado
      if ( !this.showAvanzado ) {
        this.searchComplement['m2t'] = null
        this.searchComplement['m2c'] = null
        this.searchComplement['bedroom'] = ''
        this.searchComplement['bathroom'] = ''
        this.searchComplement['pricemax'] = ''
        this.searchComplement['pricemin'] = ''
      }
    }
  },
  computed: {
    ...mapGetters({
      states: 'getStatesList',
      cities: 'getCitiesList',
      colonias: 'getColoniasList',
      categories: 'getPropertiesTypes',
      userStateLocation: 'getUserStateLocation',
    }),
  },
  created() {    
    this.$store.dispatch('getCities', this.search.state );

  },
  mounted(){

    console.log('USER STATE LOCATION');
    console.log(this.userStateLocation);
  },
  watch: {
    'search.state': {
      immediate: true,
      async handler( newValue, oldValue  ) {
        

        await this.$store.dispatch('getCities', this.search.state )
        this.search.city = '';
        this.search.suburb = '';
        this.$store.commit('resetSuburs', [])
        
      }
    },
    'search.city': {
      immediate: true,
      async handler( newValue, oldValue  ) {
        
        console.log(newValue, oldValue)
        await this.$store.dispatch('getColonias', this.search.city )
        this.search.suburb = '';

        
      }
    },
    'userStateLocation': {
      immediate: true,
      async handler( newValue, oldValue  ) {

        this.search.state = newValue.folio;

      }
    }
  },
  
};
</script>

<style scoped>
.home-search .form-group .icon{
  color: #00569d;
}


a {
  font-size: 14px;
}

a:hover {
  color: #00569d !important;
}

select, input, button{
    border: none;
    /* border-radius: 15px; */
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px !important;
}



select, input, button{
    font-size: 14px !important;
}


.btn {
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px !important;
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

.btn-active{
  background-color: #00569d !important;
  color: white;
}



.btn-active:hover{
  background-color: #043a68 !important;
  transition: 0.2s all ease-in;
  color: white !important;
}

.btn-opt:hover {
  /* color: white !important;
  background-color: #043a68;
  transition: 0.2s all ease-in; */
  background-color: #00569d !important;
  transition: 0.2s all ease-in;
  color: white !important;
}


.btn-search:hover{
  background-color: #043a68 !important;
  transition: 0.2s all ease-in;
  color: #F3E22B !important;
}

.btn-search {
  color: white !important;
  transition: 0.2s all ease-in;
  background-color: #00569d !important;
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


button span {
  font-size: 16px ;
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



.noUi-tooltip {
  border-radius: 15px !important;
  
}

.noUi-handle:after, .noUi-handle:before{
  background-color: white !important;
}


.noUi-horizontal .noUi-handle {
  width: 28px !important;
}

.noUi-connect{
  background-color: #00569d !important;
}

 .form-control {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}


.placeContainer {
  margin-top: 6px ;
}



</style>