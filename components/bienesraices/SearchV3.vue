

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
                    <option value="2">Renta</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label>Tipo de inmueble</label>
                <select class="form-control" v-model="search.category">
                    <!-- <option :value="null">Tipo de inmueble</option> -->
                    <option  v-for="category in categories" 
                        :key="category.value" 
                        :value="category.value" >{{ category.name }}</option>
                </select>
            </div>
        </div>
        
        <div class="form-group">
            <label>Ubicación</label>
            <client-only>
                <gmap-autocomplete 
                    @keyup="googleSearchChange" 
                    @place_changed="updatePlace" 
                    placeholder="Ej: Ciudad de México, CDMX, México" >
                </gmap-autocomplete>
              </client-only>
        </div>

          
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
            searchComplement: {
                bathroom: '',
                bedroom: '',
                m2c: null,
                m2t: null,
                pricemax: null,
                pricemin: null
            },
        }
    },
    computed: {
        ...mapGetters({
            categories: 'getPropertiesTypes',
        }),
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
        goToResults() {
            const { category, operation, keywordAddrs} = this.search

            const urlSeach = `${helpers.normalize(this.$store.getters.getCategoryById(category).name)}_${category}` 
                    + `-en-${ operation == 1 ? 'venta_1' : 'renta_2' }`
                    + `${ keywordAddrs != '' ? `-ubicado-en-${ helpers.normalizeUbications( keywordAddrs ) }` : '' }`

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
            })

        }
    }
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