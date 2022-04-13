<template>
    <div class="default">
        <!-- <div v-if="isLoading"  class="loading-container" >
            <div class="spinner-border text-warning" role="status">
                <span class="sr-only">Cargando...</span>
            </div>
        </div> -->
        <SearchGeneral v-if="showSearchGeneral" />
        <template>
            <Headercopy />
            <Nuxt />
            <FooterDelete /> 
        </template>
        <Cookies v-if="!cookiesAccepted"/>
        <Adviser v-if="showIDI"/>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isLoading: true,
            userStateFolioLocation: '',
        }
    },
    created() {
        console.log('LAYOUT CREATED')
        console.log(this.$route)
        
        // Obtener todas las categorias de propiedades
        //this.$store.dispatch('') En este momento estan directas en el state

        // Obtener todos los estados 
        this.$store.dispatch('getStates')

    },
    async mounted() {

        this.verifyToken();


        if( !this.isAcceptCookies() ) {
            console.log('No ha aceptado las cookies')
            this.$store.commit('setCookiesAccepted', false)
            return;
        }

        this.initGeolocation();
        this.initiIDI();
        
       

    },
    computed: {
        ...mapGetters({ showSearchGeneral: 'getShowSearchGeneral',
                        showIDI: 'getShowIDI',
                        cookiesAccepted : 'getCookiesAccepted'})
    },
    watch: {
        'cookiesAccepted': {
            async handler( newValue, oldValue  ) {
                if( newValue ) {
                    this.initGeolocation();
                    this.initiIDI();
                }
            }
        },
    },
    methods: {
        isAcceptCookies() {
            return localStorage.getItem('cookies-accepted') || false;
        },
        verifyToken(){
            const token = localStorage.getItem('token') || '';
            this.$store.commit('setToken', token)
        },
        initGeolocation() {

            if( !navigator?.geolocation ){
                alert('Tu navegador no soporta el geolocation')
                this.isLoading = false;
                return
            }
            
            this.$getLocation({})
                .catch( err => {
                    console.log('No acepto la geolocalización');
                })
                .then( async coords => {

                    console.log(coords);
                    const result = await navigator?.permissions.query({name:'geolocation'})
                    console.log(result);

                    
                
                    
                    if ( result.state == 'denied') {
                        console.log('PERMISO DENEGADO');
                        this.isLoading = false
                        return
                    } else if( result.state == 'prompt' ) {
                        console.log('esperando que acepte ubicación....');
                        this.isLoading = false
                        
                    }  else if ( result.state == 'granted' ) {
                        

                        this.$gmapApiPromiseLazy().then(() => {
                            const geocoder = new google.maps.Geocoder()
                                // Querétaro 20.6122835,-100.4802575,
                                // CDMX 19.3187219, -99.1541795
                            geocoder.geocode({ location : {
                                lat : coords.lat,
                                lng : coords.lng
                                // lat : 21.0251042,
                                // lng : -101.2928997
                            }, }, async (results, status) => {
                        if (status === 'OK') {
                                console.log(results);
                                // const state = results[8].address_components[0].long_name;
                                let state = results[ results.length - 2 ].address_components[0].long_name;
                                console.log(state);

                                const states = await this.$store.dispatch('getStates')
                                
                                states.forEach(element => {
                                    if ( element.name == state ) {
                                        this.$store.commit('userStateLocation', element);
                                        this.isMatch = true;
                                    }
                                }); 
                                this.isLoading = false;

                        }
                        })
                    })
                    
                }
            })
        },
        initiIDI() {
            setTimeout(() => {
                console.log("Mostrar a IDI");
                this.$store.commit('setShowIDI', true)
            },7000);
        }
    }

}
</script>


<style>
.default {
    width: 100vw !important;
}

.loading-container {
    z-index: 99;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: .3;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

