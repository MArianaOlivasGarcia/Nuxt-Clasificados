<template>
  <div class="searchContainer">
      <form>
          <div class="text-center">
            <h5>¿Que deseas buscar?</h5>
          </div>

        <div class="form-row"> 

            <div class="form-group col-xl-6">
                <label>Tipo de operación</label>
                <select class="form-control" >
                    <option value="1">Venta</option>
                </select>
            </div>

            <div class="form-group col-xl-6">
                <label>Marca</label>
                <select class="form-control" v-model="search.brand" >
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="marca in marcas" :key="marca.id" :value="marca.id">{{ marca.itemName }}</option>
                </select>
            </div>
        </div>

        <div class="form-row"> 


            <div class="form-group col-xl-6">
                <label>Tipo de vehículo</label>
                <select class="form-control" v-model="search.subcat" >
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">{{ tipo.itemName }}</option>
                </select>
            </div>

            <div class="form-group col-xl-6">
                <label>Modelo</label>
                <select class="form-control" v-model="search.type">
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="modelo in modelos" :key="modelo.id" :value="modelo.id">{{ modelo.itemName }}</option>

                </select>
            </div>

        </div>

        <div class="form-group col-md-12 p-0">
                <label>Estado</label>
                <select class="form-control"  v-model="search.state">
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="state in states" :key="state.folio" :value="state.folio">{{ state.name }}</option>
                </select>
        </div>

         <div class="form-group col-md-12 p-0">
                <label>Municipio</label>
                <select class="form-control"  v-model="search.municipality">
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="m in municipalities" :key="m.id" :value="m.id">{{ m.itemName }}</option>
                </select>
        </div>

        <div class="form-group col-md-12 p-0">
                <label>Colonia</label>
                <select class="form-control" v-model="search.suburb">
                     <option :value="undefined">Selecciona una opción</option>
                    <option v-for="c in colonies" :key="c.id" :value="c.id">{{ c.itemName }}</option>
                </select>
        </div>



        <label>Año</label>
        <div class="form-row"> 


            <div class="form-group col-xl-6">
                <label style="font-size: 12px; color: #6b6b6b;">Desde</label>
                <select class="form-control" v-model="searchComplement.year_from" >
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
                </select>
            </div>

            <div class="form-group col-xl-6">
                <label style="font-size: 12px; color: #6b6b6b;">Hasta</label>
                <select class="form-control" v-model="searchComplement.year_to">
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
                </select>
            </div>

        </div>


        <label>Precio</label>
        <div class="form-row"> 


            <div class="form-group col-xl-6">
                <label style="font-size: 12px; color: #6b6b6b;">Minimo</label>
                <input class="form-control" 
                    v-model="searchComplement.pricemin" 
                    type="text"
                    placeholder="$0.00">
            </div>

            <div class="form-group col-xl-6">
                <label style="font-size: 12px; color: #6b6b6b;">Máximo</label>
                <input class="form-control" 
                    v-model="searchComplement.pricemax" 
                    type="text"
                    placeholder="$0.00">
            </div>

        </div>


        
        <div class="text-center">
            <button 
                @click="goToResults"
                type="button"
                class="btn btn-primary mt-2">Actualizar búsqueda <i class="fas fa-search"></i></button>
        </div>

      </form>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import helpers from '@/helpers/helpers'


export default {
    data() {
        return {
            marcas: [],
            tipos: [],
            modelos: [],

            states: [],
            municipalities: [],
            colonies: [],

            search: {},
            searchComplement: {},

            dates: [2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990]
        }
    },
    created() {
        this.getMarcas();
        this.getStates();


        const {         
            brand,
            subcat,
            type,
            state,
            municipality,
            suburb,
            year_from,
            year_to }  = this.searchFormVehiculos;

        

        this.search = {
            brand,
            subcat,
            type,
            state,
            municipality,
            suburb
        }


        this.searchComplement = {
            year_from,
            year_to
        }

    },
    methods: {
        goToResults() {
            console.log('BUSCAR')

            const { 
                brand,
                subcat,
                type,
                state,
                municipality,
                suburb
              } = this.search

         
            const urlSearch = 
                `${ brand != undefined ? `${ helpers.normalize( this.$store.getters.getMarcaVehiculoById(brand)?.itemName ) }_${brand}` : '' }`
               + `${ subcat != undefined ? `-en-${ helpers.normalize( this.$store.getters.getTipoVehiculoById(subcat)?.itemName ) }_${subcat}` : '' }`
               + `${ type != undefined ? `-en-${ helpers.normalize( this.$store.getters.getModeloVehiculoById(type)?.itemName ) }_${type}` : '' }`
               + `${ brand != undefined ? `-en-${ 'venta_1' }` : `${ 'venta_1' }` }`
               + `${ state != undefined ? `-localizado-en-${ helpers.normalize( this.$store.getters.getStateById(state)?.name ) }_${state}` : '' }`
               + `${ municipality != undefined ? `-en-${ helpers.normalize( this.$store.getters.getMunicipalityById(municipality)?.itemName ) }_${municipality}` : '' }`
               + `${ suburb != undefined ? `-en-${ helpers.normalize( this.$store.getters.getSuburbById(suburb)?.itemName ) }_${suburb}` : '' }`;
     
            console.log(urlSearch)


            let data = []

            for (const property in this.searchComplement) {
                if ( this.searchComplement[property] || this.searchComplement[property] > 0 ) {
                    data.push(`${this.searchComplement[property]}_${ property == 'year_from' ? 'aniomin' :
                                property == 'year_to' ? 'aniomax' :
                                property == 'pricemin' ? 'minimo' :
                                property == 'pricemax' ? 'maximo' : property }`  )
                } else {
                    data.push(':)')
                }
            }

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
                name: 'vehiculos-search',
                params: {
                    search:  urlSearch + `${ urlComplement.length > 0 ? `-con-${urlComplement}` : '' }` + '.html'
                    // search:  urlSearch + '.html'
                }
            });


        },
        async getMarcas() {
            const resp = await this.$store.dispatch('getMarcasVehiculos');
            this.marcas = resp;
            console.log(this.marcas)
        }, 
        async getTipos( brand ) {
            const resp = await this.$store.dispatch('getTiposVehiculos', brand);
            this.tipos = resp;
        },
        async getModelos( brand, subcategory ) {
            const resp = await this.$store.dispatch('getModelosVehiculos', {brand, subcategory});
            this.modelos = resp;
        },
        async getStates() {
            const resp = await this.$store.dispatch('getStates');
            this.states = resp;
        },
        async getMunicipalities( folio ) {
            const resp = await this.$store.dispatch('getCities', folio);
            this.municipalities = resp;
        },
        async getColonias( folio ) {
            const resp = await this.$store.dispatch('getColonias', folio);
            this.colonies = resp;
        }
    },
    watch: {
      'search.brand': {
        async handler( newValue, oldValue  ) {
        if ( newValue == undefined )return;

          
            this.getTipos( newValue );
          if ( oldValue == undefined ){
              return;
          }

          this.search.subcat = undefined;
          this.search.type = undefined;
          this.modelos = []
          this.tipos = []
          
        }
      },
      'search.subcat': {
        async handler( newValue, oldValue  ) {
          
            if ( newValue == undefined )return;

            this.getModelos( this.search.brand, newValue );
            if ( oldValue == undefined ){
                return;
            }

            this.search.type = undefined;
            this.modelos = []
          
        }
      },
      'search.state': {
        async handler( newValue, oldValue  ) {
            console.log({newValue, oldValue})
            if ( newValue == undefined ){ return;}

          
            this.getMunicipalities( newValue );

            if ( oldValue == undefined ){
                return;
            }

            this.search.municipality = undefined;
            this.search.suburb = undefined;
            this.municipalities = []
            this.colonies = []
          
        }
      },
      'search.municipality': {
        async handler( newValue, oldValue  ) {
          
            if ( newValue == undefined )return;

            this.getColonias(newValue );
            if ( oldValue == undefined ){
                return;
            }

            this.search.suburb = undefined;
            this.colonies = []
          
        }
      },
    },
    computed: {
        ...mapGetters({ searchFormVehiculos: 'getSearFormVehiculosValues' })
    },
}
</script>

<style scoped>
    .searchContainer {
        background-color: #FAE786;
        box-shadow: 0 2px 8px 0 rgb(99 99 99 / 20%);
        border-radius: 10px;
        padding: 15px 10px;
    }

    label {
        font-size: 13px;
        margin: 0px;
    }

    .form-group {
        margin: 0px 0px 8px 0px !important;
    }
</style>