<template>
  <form v-on:submit.prevent="goToResults"
        autocomplete="off" 
      class="p-3 search-property">

  

    <div class="row justify-content-center">

      <div class="row pb-2" style="width: 100%; ">
          <div class="col-6 p-1" >
            <button type="button" 
                  style="width: 80%; font-size: 16px !important" 
                  class="btn btn-opt"
                  :class="{ 'btn-active': btnSelected == 'venta' }"
                  @click="changeType('venta')">Venta</button>
          </div>
           <div class="col-6 p-1" >
            <button type="button" 
                  style="width: 80%; font-size: 16px !important" 
                  class="btn btn-opt"
                  :class="{ 'btn-active': btnSelected == 'renta' }"
                  @click="changeType('renta')">Renta</button>
          </div>
        </div>


      <div class="col-sm-12 col-md-4 col-lg-4 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <select
              v-model="search.category"
              name=""
              id=""
              class="form-control"
            >
              <option  v-for="category in categories" :key="category.value" :value="category.value" >{{ category.name }}</option>
            </select>
           
            <div class="icon"><i class="icon-address"></i></div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 col-lg-4 pr-1 pl-1" >
        <div class="form-group">
          <div class="form-field">
            <select
              v-model="search.state"
              name=""
              id=""
              class="form-control">

              <option 
              v-for="state in states"
              :key="state.folio"
              :item="state.name"
              :value="state.folio">{{state.name}}</option>
            </select>
            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
        </div>
      </div>
      </div>


      <div class="col-sm-12 col-md-4 col-lg-4 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <select
              v-model="search.city"
              class="form-control"
            >
            <option value="">Selecciona municipio</option>
            <!-- TODO: Arreglar cuando ningua de las ciudades llegue en null -->
            <option       
              v-for="(item, index) in cities"
              :key="index"
              :value="item.city">{{item.city ? item.city : 'Llega null'}}</option>

            </select>
            <div class="icon"><i class="icon-city"></i></div>
          </div>
        </div>
      </div>



      

    <template v-if="showAvanzado">

      <div class="col-6 col-md-3 col-lg-3 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <div class="select-wrap">
              <input
                type="text"
                class="form-control color-search"
                placeholder="m² construcción"
                v-model="search.m2c"
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
                class="form-control color-search"
                placeholder="m² terreno"
                v-model="search.m2t"
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
              v-model="search.bathroom"
              name=""
              id=""
              class="form-control"
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
              v-model="search.bedroom"
              name=""
              id=""
              class="form-control"
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


    </template>

      <div class="row" style="width: 100%">
        <div class="col px-1" >
            <input type="text" 
              id="input-search" 
              v-model="search.keyword"
              placeholder="Busca por características, marcas." 
              class="form-control">
          </div>
      </div>
      
        
        
      <div class="row text-right mt-2" style="width: 100%">
        <a class="pl-2 pt-1 pointer" @click="changeShowAvanzada">
          {{ !showAvanzado ? 'Realizar busqueda avanzada.' : 'Ocultar busqueda avanzada.' }}
          <i v-if="!showAvanzado" class="fas fa-chevron-down"></i>
          <i v-else class="fas fa-chevron-up"></i>
        </a>
      </div>
      

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

/* import veeno from 'veeno';
import '../../../public/css/nouislider.min.css';  
 */
import { mapGetters } from "vuex";


export default {
  components:{
    // veeno
  },
  data() {
    return {
      sliderPrice: [ 1, 1000 ],
      showAvanzado: false,
      btnSelected: 'venta',
      search: {
        state: '150',
        keyword: null,
        // TODO: Poner en null cuando ningua ciudad llegue en null
        city: '',
        category: 1,
        type: null,
        outstanding: null,
        limit: '',
        pricemax: null,
        pricemin: null,
        m2t: null,
        m2c: null,
        bedroom: '',
        bathroom: ''
      },
      isLoading: true,
      slider : null

    };
  },
  methods: {
    sliderChange( e ){
      this.search.pricemin = e.values[0] * 100000
      this.search.pricemax = e.values[1] * 100000
    },
    goToResults() {



      // this.$store.commit("setSearchParams",this.search);

      let data = {}
      /* Verificar que tenga datos  */
      for (const property in this.search) {
        if ( this.search[property] || this.search[property] > 0 ) {
          // console.log('Si hay ', this.search[property])
          data[property] = this.search[property]
        } 
      }


     this.$router.push({
        path: '/category',
        query: {
            ...data
        }
      });



     /*  this.$router.push({
        name: "Category"
      }); */
      
    },
    changeType( type ) {
      this.btnSelected = type
      this.search.pricemax = null
    },
    changeShowAvanzada(){
      this.showAvanzado = !this.showAvanzado
      if ( !this.showAvanzado ) {
        this.search['m2t'] = null
        this.search['m2c'] = null
        this.search['bedroom'] = ''
        this.search['bathroom'] = ''
        this.search['pricemax'] = ''
        this.search['pricemin'] = ''
      }
    }
  },
  computed: {
    ...mapGetters({
      states: 'getStatesList',
      cities: 'getCitiesList',
      categories: 'getPropertiesTypes'
    }),
  },
  created() {
    this.isLoading = true

    this.$store.dispatch('getCities', this.search.state );

    // this.isLoading = false


  },
  mounted(){
  },
  watch: {
    'search.state': {
      immediate: true,
      async handler( newValue, oldValue  ) {
        
        this.isLoading = true

        await this.$store.dispatch('getCities', this.search.state )
        /* TODO: Cambiar a null cuando ninguno de las ciudades llegue null */
        this.search.city = '';

        this.isLoading = false
        
      }
    }
  }
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




.btn-opt {
  background-color: #fff;
  color: #00569d;
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
  color: white !important;
  transition: 0.2s all ease-in;
  background-color: #043a68;
}


.btn-search:hover{
  background-color: #043a68 !important;
  transition: 0.2s all ease-in;
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


span {
  font-size: 14px ;
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

</style>