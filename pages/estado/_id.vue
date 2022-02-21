<template>
  <div class="stateslist container mb-4">


    <div class="text-center my-4">
      <h1 class="mb-3 bread font-weight-bold">{{ state.name }}</h1>
    </div>



    <div class="row" >
          
          <div class="col-md-12">

            <div class="d-flex" >

              <ul id="tabsJustified" class="nav nav-pills flex-column">
                  <li 
                    v-for="city in cities" 
                    @click="getProductsType(city)"
                    :key="city.id" 
                    class="nav-item "
                    for="tab-one">
                    <a data-target="#home1" 
                      data-toggle="tab" 
                      class="nav-link small text-uppercase">{{ city.itemName }}</a>
                  </li>
              </ul>

              <div class="tab-content border rounded  w-100">
                <div class="message">
                  <h6>Selecciona una ciudad</h6>
                </div>
              </div>


            </div>
          </div>

    </div>


  </div>
</template>



<script>

import { mapGetters } from "vuex";
import helpers from '@/helpers/helpers'
 

export default {
    head: {
      titleTemplate: 'Clasificados Contacto | Ciudades',
    },
    data(){
      return {
        state: {
          name: '',
          id: null
        },
        search: {},
        cityselected: null
      }
    },
    methods: {
      getProductsType( {itemName, id }){
        this.$router.push({
          name: 'estado-estado-municipio-id',
          params: {
            estado: this.$route.params.id.split('.')[0],
            id: `${ itemName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '').toLowerCase() }_${ id }.html`
          }
        })
      }
    },
    computed: {
      ...mapGetters({ cities: 'getCitiesList', 
                      products: 'getProductsTypeByCityName'}),
    },
    created(){
      
      const url = this.$route.params.id.split('_')

      this.state.name = this.$store.getters.getStateById( url[1].split('.')[0] )?.name
      this.$store.dispatch('getCities', url[1].split('.')[0] );

      
    }

}
</script>




<style scoped>
.stateslist .nav-item{
  color: #6a6560;
  background-color: #a6a3062b;
}
.stateslist .nav-pills .nav-link.active{
  background-color: #00569d8c !important;
  color: #000;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  border: 1px solid #418ac9 !important;
}
.stateslist .nav-link{
  font-size: 1rem;
}
.stateslist .nav-link.active::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -13px;
    border-left: 0;
    border-bottom: 13px solid transparent;
    border-top: 13px solid transparent;
    border-left: 10px solid #00569d8c;
    
}
.stateslist .tab-content{
  box-shadow: 7px 6px 19px -4px rgba(148,135,135,0.46) !important;
  border: inherit;
}

.tab-content {
  background-color: white;
}
/* ---- inside of tabs*/

.items {
  background: #fffffe;
  box-shadow: 0 3px 6px rgba(black,0.16), 0 3px 6px rgba(black,0.23);
  border-top: 10px solid  #0B5AA2;
}

.items-head p{
  padding: 5px 20px;
  margin: 8px;
  color: #0B5AA2;
  font-weight: bold;
  font-size: 18px;
}
.items-head hr {
  width: 20%;
  margin: 0px 30px;
  border: 1px solid  #f2e115;
}

.items-body {
  padding: 10px;
  margin: 5px;
  display: grid;
  grid-gap: 10px;
}

.items-body-content {
  cursor: pointer;
  padding: 10px;
  padding-right: 0px;
  display: grid;
  grid-template-columns: 10fr 1fr;
  background-color: lightblue;
  font-size: 13px;
  grid-gap: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
}
.items-body-content:hover {
  border-radius: 5px;
  border: 1px solid  #0B5AA2;
  color: #000;
}

.items-body-content i {
  align-self: center;
  font-size: 15px;
  color:  #0B5AA2;
  font-weight: bold;
  animation: icon 1.5s infinite forwards;
}


.nav-item {
  cursor: pointer;
}

div.message {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

div.message h6{
  margin: 0;
}

@keyframes icon {
  0%,100%{
    transform: translate(0px);
  }
  50% {
    transform: translate(3px);
  }
}
</style>
