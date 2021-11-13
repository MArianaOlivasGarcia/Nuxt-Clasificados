<template>
  <div class="stateslist container mb-4">


    <div class="text-center my-4">
      <h1 class="mb-3 bread font-weight-bold">{{ name }}</h1>
    </div>



    <div class="row" >
          
          <div class="col-md-12">

            <div class="d-flex" >

              <ul id="tabsJustified" class="nav nav-pills flex-column">
                  <li 
                    @click="getProductsType(city.city)"
                    v-for="city in cities" 
                    :key="city.city" 
                    class="nav-item "
                    for="tab-one">
                    <a data-target="#home1" 
                      data-toggle="tab" 
                      class="nav-link small text-uppercase">{{ city.city }}</a>
                  </li>
              </ul>

              <div v-if="!cityselected" class="tab-content border rounded  w-100">
                <div class="message">
                  <h6>Selecciona una ciudad</h6>
                </div>
              </div>

              <div v-else class="tab-content border rounded p-1 pl-2 pt-2 w-100">

                <div id="home1" class="tab-pane fade">
                  <div class="row p-0 m-0">
                    <div class="col-sm-12 col-md-12 col-lg-12 p-0 pr-lg-1">


                      <div class="items">
                        <div class="items-head">
                          <p> <i class="fas fa-home"></i>BIENES RAÍCES</p>
                          <hr>
                        </div>
                        <div  class="items-body">
                          
                          <div v-for="product in products"  class="items-body-content" 
                            :key="product.id" >
                            <a @click="goTocategory(product.id)" >{{product.name}} <span> ( {{product.cantidad}} )</span></a>
                            <i class="fa fa-angle-right"></i>
                          </div>

                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

    </div>


  </div>
</template>



<script>

import { mapGetters } from "vuex";


export default {
    data(){
      return {
        name: '',
        search: {},
        cityselected: null
      }
    },
    methods: {
      getProductsType( nameCity ){
        this.cityselected = nameCity;
        this.$store.dispatch("getProductsTypeByCityName", nameCity)
      },
      goTocategory( id ){
        const search = {
          city: this.cityselected,
          state: this.$route.params.folio,
          category: id
        }

        let data = {}
        /* Verificar que tenga datos  */
        for (const property in search) {
          if ( search[property] || search[property] > 0 ) {
            data[property] = search[property]
          } 
        }

         this.$router.push({
          path: '/category',
          query: {
            ...data
          }
        });

      }
    },
    computed: {
      ...mapGetters({ cities: 'getCitiesList', 
                      products: 'getProductsTypeByCityName'}),
    },
    created(){
      this.name = this.$route.query.name;

      const { folio } = this.$route.params
      this.$store.dispatch('getCities', folio );


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
