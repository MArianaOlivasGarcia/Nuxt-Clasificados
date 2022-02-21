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
                :class="search.city != '' ? 'form-control is-valid' : 'form-control is-invalid'">
                  <option value="">Seleccione un municipio</option>
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
                :class="search.suburb != '' ? 'form-control is-valid' : 'form-control is-invalid'">
                  <option value="">Seleccione una colonia</option>
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
                v-model="search.m2c"
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
                v-model="search.m2t"
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
                    <!--                   v-model="valuesRenta"
 -->
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
                  <span>Precio Mínimo<br>$ {{ search.pricemin ? parseInt(search.pricemin).toLocaleString('es-MX') : 'Sin precio mínimo'  }}</span> 
                  <!-- <input type="text" v-model="search.pricemin"> -->
                </div>
                 <div class="col-md-6" style="font-size: 12px"  >
                  <span>Precio Maximo<br>$ {{ search.pricemax ? parseInt(search.pricemax).toLocaleString('es-MX') : 'Sin precio maximo' }}</span> 
                </div>
                 </div> 
       
              
                 <div class=" text-right ">
                   <span style="font-size: 14px;" 
                                     @click="searchPrice"
                                     class="pointer result col-6 p-0">Ver resultados</span>
                 </div>

            </div>
          </div>
        </div>
      </div>




      <div class="col-sm-12 col-md-6 col-lg-6 pr-1 pl-1">
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


      <div class="col-sm-12 col-md-6 col-lg-6 pr-1 pl-1">
        <div class="form-group">
          <div class="form-field">
            <select v-model="search.bedroom" name="" id="" class="form-control">
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

        </div>

    </form>

</template>
<script>

import { mapGetters } from 'vuex';
import veeno from 'veeno';

export default {
    components:{
      veeno
    },
    props: {
        states: {
            required: true
        }
    },
    data(){
        return {
            search: {},
            tags: [],
            valuesVenta: [100000, 100000000],
            valuesRenta: [500, 500000],
        }
    },
    computed: {
        ...mapGetters({ cities: 'getCitiesList', 
                        colonias: 'getColoniasList', 
                        categories: 'getPropertiesTypes',
                        searchFom: 'getSearFormValues' })
    },
    created() {

      console.log('ON CREATED');
      
      this.search = {
        ...this.searchFom,
        ...this.$route.query
      }
        for (const property in this.search) {
            if ( this.search[property] || this.search[property] > 0 ) {

              console.log( property );
              if ( property == 'operation' ) {
                if (this.search['operation'] == 1){
                  this.values = [100000, 100000000]
                } 
              }

              if ( property != 'page' ) {
                this.buildTags( property )
              }
            } 
        }

    },
    watch: {
        'search.state': {
            async handler(newValue, oldValue) {

                this.$store.dispatch('getCities', this.search.state ) 

                this.goToResults()
                this.buildTags( 'state' )


                if ( oldValue != undefined ) {
                    this.search.city = ''
                    this.search.suburb = ''
                
                    this.tags?.forEach( (tag, index) => {
                      if ( tag.propertie == 'city' ){
                        this.tags.splice(index, 1)
                      }
                      if ( tag.propertie == 'suburb' ){
                        this.tags.splice(index, 1)
                      }
                    })
                }
            }
        },
        'search.city': {
            async handler(newValue, oldValue) {

              this.$store.dispatch('getColonias', this.search.city ) 
            
            this.goToResults()
            this.buildTags( 'city' )

            if ( oldValue != undefined ) {
                    this.search.suburb = ''
                
                    this.tags?.forEach( (tag, index) => {
                      if ( tag.propertie == 'suburb' ){
                        this.tags.splice(index, 1)
                      }
                    })
                }

            }
        },
        'search.suburb': {
            async handler() {
            
            this.goToResults()
            this.buildTags( 'suburb' )

            }
        },
        'search.category': {
            async handler() {
            
            this.goToResults()
            this.buildTags( 'category' )

            }
        },
        'search.m2c': {
            async handler() {
              
          
            this.goToResults()
            if ( !this.search.m2c ) return 
            this.buildTags( 'm2c' )
            
            }
        },
        'search.m2t': {
            async handler() {
            
              this.goToResults()
              if ( !this.search.m2t ) return 
              this.buildTags( 'm2t' )

            }
        },
        'search.bathroom': {
            async handler( ) {
            
          
            this.goToResults()
            this.buildTags( 'bathroom' )

            }
        },
        'search.bedroom': {
            async handler() {
            
              this.goToResults()
              this.buildTags( 'bedroom' )

            }
        },
        'search.keyword': {
            async handler( newValue, oldValue ) {
              
              console.log(newValue, oldValue);
              // if ( this.search.keyword == '' ) return 
                
              this.goToResults()
              if ( !this.search.keyword ) return 
              this.buildTags( 'keyword' )

            }
        },
        'search.operation': {
            async handler( ) {

            this.goToResults()
            this.buildTags( 'operation' )

            }
        }
    },
    methods: {
      minChange( e ){
        console.log(e);
      },
      changeOperation( operation ) {

        let tagsTem = [];
        this.tags.forEach( (tag, index) => {
          if (tag.propertie == 'pricemax' || tag.propertie == 'pricemin'){
            return
          }
          tagsTem.push(tag)
        })
        console.log(tagsTem);
        this.tags = tagsTem;

        this.search.pricemin = 0;
        this.search.pricemax = 0;
        this.search.operation = operation
        this.goToResults()
      },
        sliderChange( e ){
          console.log(e);
          this.search.pricemin = e.values[0];
          this.search.pricemax = e.values[1];
        },
      buildTags( type ) {
        
        switch ( type ) {
          case 'state':

            this.tags?.forEach( (tag, index) => {
              if ( tag.propertie == 'state' ){
                this.tags.splice(index, 1)
              }
            })

          /* this.tags?.forEach( (tag, index) => {
              if ( tag.propertie == 'city' ){
                this.tags.splice(index, 1)
              }
            }) */

            this.states?.forEach( state => {
              if ( state.folio == this.search.state ){
                this.tags.push({value: state.folio, title: state.name, object: state, propertie: 'state' })
              }
            });
            return;
          
          case 'city':

            this.tags?.forEach( (tag, index) => {
              
              if ( tag.propertie == 'city'){
                this.tags.splice(index, 1);
              }

            });

            this.cities?.forEach( c => {
              if ( c.id == this.search.city ){
                this.tags.push({value: c.id, title: c.itemName, object: c, propertie: 'city' })
              }
              
            });
            return;


            case 'suburb':

            this.tags?.forEach( (tag, index) => {
              
              if ( tag.propertie == 'suburb'){
                this.tags.splice(index, 1);
              }

            });

            this.colonias?.forEach( c => {
              if ( c.id == this.search.suburb ){
                this.tags.push({value: c.id, title: c.itemName, object: c, propertie: 'suburb' })
              }
              
            });
            return;

          case 'category':

            this.tags?.forEach( (tag, index) => {
              
              if ( tag.propertie == 'category' ){
                this.tags.splice(index, 1)
              }

            });

            this.categories?.forEach( c => {
              if ( c.value == this.search.category ){
                this.tags.push({value: c.value, title: c.name, object: c, propertie: 'category' })
              }
            });
            return;

          case 'm2c':

            this.tags?.forEach( (tag, index) => {
              
              if ( tag.propertie == 'm2c' ){
                this.tags.splice(index, 1);
              }

            });
            if ( this.search.m2c.trim().length > 0 ) {
              this.tags.push({value: this.search.m2c, title: `${this.search.m2c} m² construcción`, object: this.search.m2c , propertie: 'm2c' })   
            }

            return;
          
          case 'm2t':

            this.tags?.forEach( (tag, index) => {
              
              if ( tag.propertie == 'm2t' ){
                this.tags.splice(index, 1);
              }

            });
            if ( this.search.m2t.trim().length > 0 ) {
              this.tags.push({value: this.search.m2t, title: `${this.search.m2t} m² terreno`, object: this.search.m2t , propertie: 'm2t' })   
            }

            return;

          case 'bathroom':

            this.tags?.forEach( (tag, index) => {
              
              if ( tag.propertie == 'bathroom' ){
                this.tags.splice(index, 1);
              }

            });

            if ( this.search.bathroom.trim().length > 0 ) {
            this.tags.push({value: this.search.bathroom, title: `${this.search.bathroom} baños`, object: this.search.bathroom , propertie: 'bathroom' })   
            }
            
            

            return;

          case 'bedroom':

            this.tags?.forEach( (tag, index) => {
              
              if ( tag.propertie == 'bedroom' ){
                this.tags.splice(index, 1);
              }

            });

            if ( this.search.bedroom.trim().length > 0 ) {
            this.tags.push({value: this.search.bedroom, title: `${this.search.bedroom} recamaras`, object: this.search.bedroom , propertie: 'bedroom' })   
            }
            
            

            return;


          case 'keyword':

            this.tags?.forEach( (tag, index) => {
              
                if ( tag.propertie == 'keyword' ){
                  this.tags.splice(index, 1);
                  /* TODO: Verificar */
                // this.search.keyword = null
                }

              });

              

              this.tags.push({value: this.search.keyword, title: `${this.search.keyword}`, object: this.search.keyword , propertie: 'keyword' })
              
            return;
        

          case 'pricemax':

            this.tags?.forEach( (tag, index) => {
              
                if ( tag.propertie == 'pricemax' ){
                  this.tags.splice(index, 1);
                  /* TODO: Verificar */
                // this.search.pricemax = null
                }

              });

              

              this.tags.push({value: this.search.pricemax, title: `$ ${  parseInt(this.search.pricemax).toLocaleString('es-MX') } max`, object: this.search.pricemax , propertie: 'pricemax' })
            return;



          case 'pricemin':


            this.tags?.forEach( (tag, index) => {
              
                if ( tag.propertie == 'pricemin' ){
                  this.tags.splice(index, 1);
                  /* TODO: Verificar */
                // this.search.pricemax = null
                }

              });

              

              this.tags.push({value: this.search.pricemin, title: `$ ${  parseInt(this.search.pricemin).toLocaleString('es-MX') } min`, object: this.search.pricemin , propertie: 'pricemin' })
            return;

          case 'operation':

            if ( !this.search.operation ) {
              return
            }

            this.tags?.forEach( (tag, index) => {

              
                if ( tag.propertie == 'operation' ){
                  this.tags.splice(index, 1);
                  /* TODO: Verificar */
                // this.search.pricemax = null
                }

              });

              

              this.tags.push({value: this.search.operation, title: (this.search.operation == '1') ? 'En venta' : 'En renta', object: this.search.operation , propertie: 'operation' })
            return;



          default:
            break;
        }

      },
      deleteTag( type, value ) {

      switch ( type ) {
        case 'state':

          this.tags?.forEach( (tag, index) => {
            
            if ( tag.value == value && tag.propertie == 'state'){
              this.tags.splice(index, 1);
              this.search.state = ''
            }

          });

          return;
        
        case 'city':
          
         this.tags?.forEach( (tag, index) => {
            
            if ( tag.value == value && tag.propertie == 'city'){
              this.tags.splice(index, 1);
              /* TODO: Poner null  */
              this.search.city = ''
              
            }

          });

          return;
      
        case 'category':
          
         this.tags?.forEach( (tag, index) => {
            
            if ( tag.value == value && tag.propertie == 'category' ){
              this.tags.splice(index, 1)
              this.search.category = ''

            }

          });

          return;

        case 'm2c':
          
         this.tags?.forEach( (tag, index) => {
            
            if ( tag.value == value && tag.propertie == 'm2c' ){
              this.tags.splice(index, 1);
              this.search.m2c = null
            }

          });

          return;

        case 'm2t':
          
         this.tags?.forEach( (tag, index) => {
            
            if ( tag.value == value && tag.propertie == 'm2t' ){
              this.tags.splice(index, 1);
              this.search.m2t = null
            }

          });

          return;

        case 'bathroom':
          
         this.tags?.forEach( (tag, index) => {
            
            if ( tag.value == value && tag.propertie == 'bathroom' ){
              this.tags.splice(index, 1);
              this.search.bathroom = ''
            }

          });

          return;

          case 'bedroom':
          
         this.tags?.forEach( (tag, index) => {
            
            if ( tag.value == value && tag.propertie == 'bedroom' ){
              this.tags.splice(index, 1);
              this.search.bedroom = ''
            }

          });

          return;

          

        case 'keyword':
          
         this.tags?.forEach( (tag, index) => {
            
            if ( tag.value == value && tag.propertie == 'keyword' ){
              this.tags.splice(index, 1);
              /* TODO: Verificar */
            this.search.keyword =  null
            }

          });

          return;

        case 'pricemax':
          
         this.tags?.forEach( (tag, index) => {
            

            if ( tag.value == value && tag.propertie == 'pricemax' ){
              this.tags.splice(index, 1);
              /* TODO: Verificar */
            this.search.pricemax = ''
            }

          });

          this.searchPrice()

          return;


        case 'pricemin':
          
         this.tags?.forEach( (tag, index) => {
            

            if ( tag.value == value && tag.propertie == 'pricemin' ){
              this.tags.splice(index, 1);
              /* TODO: Verificar */
            this.search.pricemin = ''
            }

          });

          this.searchPrice()

          return;
          

        default:
          break;

        }
    },
    goToResults() {


      const queries = {
        ...this.search,
        ...this.$route.query,
      }


      let data = {}

      for (const property in queries) {
        if ( this.search[property] || this.search[property] > 0 ) {
          data[property] = this.search[property]
        } 
      }

      // this.$store.commit('setSearchFormValues', this.search )

      
      this.$router.push({
        name: "bienesraices-category",
        query: {
            ...data
        }
      }); 
 
    },
    searchPrice(){

          this.goToResults()

          if ( !this.search.pricemax  || !this.search.pricemin ){
            return
          }

          this.buildTags( 'pricemax' )
          this.buildTags( 'pricemin' )
        },
    },
    
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
  border: 1px solid #6FD18C !important;
}

.is-invalid {
  border: 1px solid #E9303D !important;
}


</style>