

<template>
    <form v-on:submit.prevent="goToResults" 
        class="p-2" 
        style="background-color: rgba(242, 225, 19, 0.7)">

        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Tipo de operación</label>
                <select class="form-control" v-model="search.operation">
                    <!-- <option :value="null">Tipo de operación</option> -->
                    <option value="1">Venta</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label>Marca</label>
                <select class="form-control" v-model="search.brand" >
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="marca in marcas" :key="marca.id" :value="marca.id">{{ marca.itemName }}</option>
                </select>
            </div>
        </div>


        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Tipo de vehículo</label>
                <select class="form-control" v-model="search.subcat" >
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">{{ tipo.itemName }}</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label>Modelo</label>
                <select class="form-control" v-model="search.type">
                    <option :value="undefined">Selecciona una opción</option>
                    <option v-for="modelo in modelos" :key="modelo.id" :value="modelo.id">{{ modelo.itemName }}</option>
                </select>
            </div>
        </div>
        
        <!-- <div class="form-group">
            <label>Ubicación</label>
            <client-only>
                <gmap-autocomplete 
                    @keyup="googleSearchChange" 
                    @place_changed="updatePlace" 
                    
                    placeholder="Ej: Ciudad de México, CDMX, México" >
                </gmap-autocomplete>
              </client-only>
        </div> -->

          
        <button type="submit" class="btn btn-primary mt-2">Buscar <i class="fas fa-search"></i></button>
    </form>
</template>

<script>

import { mapGetters } from 'vuex';
import helpers from '@/helpers/helpers'


export default {
    data() {
        return {
            search: {
                category: 1,
                operation: 1,
                keywordAddrs: ''
            },
            marcas: [],
            modelos: [],
            tipos: [],
        }
    },
    created() {
        this.getMarcas();
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
            if ( this.search.keywordAddrs == undefined ) {
                this.search.keywordAddrs = what.name
            }
        },
        goToResults() {
            const { brand, subcat, type, operation, state, municipality, suburb } = this.search


            const urlSearch = 
                `${ brand != undefined ? `${ helpers.normalize( this.$store.getters.getMarcaVehiculoById(brand)?.itemName ) }_${brand}` : '' }`
               + `${ subcat != undefined ? `-en-${ helpers.normalize( this.$store.getters.getTipoVehiculoById(subcat)?.itemName ) }_${subcat}` : '' }`
               + `${ type != undefined ? `-en-${ helpers.normalize( this.$store.getters.getModeloVehiculoById(type)?.itemName ) }_${type}` : '' }`
               + `${ brand != undefined ? `-en-${ 'venta_1' }` : `${ 'venta_1' }` }`
     

            this.$router.push({
                name: 'vehiculos-search',
                params: {
                search: urlSearch + '.html'
                }
            });

        },


        async getMarcas() {
            const resp = await this.$store.dispatch('getMarcasVehiculos');
            this.marcas = resp;
        }, 
        async getTipos( brand ) {
            const resp = await this.$store.dispatch('getTiposVehiculos', brand);
            this.tipos = resp;
        },
        async getModelos( brand, subcategory ) {
            const resp = await this.$store.dispatch('getModelosVehiculos', {brand, subcategory});
            this.modelos = resp;
        },
        
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
    },
}
</script>

<style scoped>
    form {
        /* width: 70% !important; */
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        border-radius: 10px;
    }
    label {
        font-size: 14px;
        margin-bottom: 0.2rem;
    }
    .form-group {
        margin-bottom: 0.5rem !important;
    }
    .form-control {
        box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px !important;
        border: 1px solid rgba(255, 255, 255, 0.6);
    }

</style>