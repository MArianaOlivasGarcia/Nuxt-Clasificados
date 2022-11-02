<template>
    <main class="clean">

    <SliderAddsDev :category="'1'"/>
    
    <section class="searchContainer container mt-5 mb-5" >
        <div class="titleContainer col-md-5">
            <h3>¿Qué deseas buscar?</h3>
            <h4 class="text-justify">En <b>Clasificados contacto</b>, lo buscas lo encuentras, lo anuncias lo <b>vendes</b>. </h4>
        </div>
        <div class="col-md-7">
            <PropertiesSearch />
        </div>
    </section>





    <!-- <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">DESARROLLOS DESTACADOS</h2>
                </div>
            </div>

             <SectionLoader v-if="desarrollos.length == 0"/>
            
            <div v-else class="card-columns dev">
                    <DesarrolloCard 
                        v-for="property in desarrollos" 
                        :key="property.productid"
                        :property="property"
                    /> 
            </div> 

        </div>
    </section> -->



    <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">PROPIEDADES DESTACADAS</h2>
                </div>
            </div>

            <SectionLoader v-if="outstanding.length == 0"/>
            
            <div v-else class="card-columns">
                    <PropertyCard 
                        v-for="property in outstanding" 
                        :key="property.productid"
                        :property="property"
                    /> 
            </div>

        </div>
    </section>



    <div class="container container mt-4 pt-5 pb-4" >
        <div class="row centrar" style="align-items: center;">
            <div class="col-md-6 text-center">
                <h4 class="mb-3" style="font-weight: bold;">AGENCIAS INMOBILIARIAS, BROKERS Y CLIENTES SATISFECHOS</h4>
                <p>Ofreciendo siempre la mejor solución para nuestros diferentes tipos de clientes.</p>
            </div>
            <div class="col-md-6 text-center">

                <video controls autoplay muted style="box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;">
                    <source src="@/static/video.mp4" type="video/mp4">
                    Tu navegador no soporta este video.
                </video>
                <NuxtLink
                  to="/registro.html"
                  class="btn btn-primary mt-3 p-2"
                  style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;">
                  ¡Quiero publicar un anuncio! 
                </NuxtLink>

            </div>
        </div>
    </div>




    <div class=" mt-4 pt-5 pb-4" style="background-color: #FFFDF0">
        <div class="container">

        <div class="row centrar">
            <div class="col-md-6 text-center">
                <p style="font-weight: bold;">¡Accede a nuestros recursos gratuitos!<br>Encontrarás guías, checklist o ebooks para descargar 
                que te ayudará para verder tu casa en el menor tiempo posible.</p>
            </div>
            <div class="col-md-6 text-center">
                <button
                  class="btn btn-primary">
                  ¡Quiero saber más! 
                </button>
            </div>
        </div>
        </div>

    </div>



    <section class="p-0">
        <Companies />
    </section>

    <section class="p-0" id="contacto">
        <ContactSection :v="$v" :form="form" />
    </section> 
   
    <section v-if="states.length > 0" class="ftco-section bg-cc pb-4 mt-2 wow slideInUp">
        <StatesList :states="states" />
    </section>


    <IconScroll /> 



    </main>
</template>

<script>

import { mapGetters } from "vuex";
import { required, email } from 'vuelidate/lib/validators' 


export default {
    layout: 'bienesraices',
    async asyncData ({ params, store }) {

        
      // fetch data from API
      try {
        let states = [];
        let outstanding = [];

        states = await store.dispatch('getStates');
        outstanding = await store.dispatch("getOutstanding")
    
        return {
            states,
            outstanding
        }
        
      } catch (error) {
        return {
            states: [],
            outstanding: []
        }
      }

    },
    head: {
      titleTemplate: 'Clasificados Contacto | El buscador',
    },
    computed: {
        ...mapGetters({ isLoading: 'getIsLoading'}),
    },
    async created(){
        // TODO: Quitar
        // try {
            
        //     await this.$store.dispatch("getOutstanding")
        // } catch (error) {
        //     console.log(error)
        // }
    },
    data() {
        return {
            desarrollos: [],
            form: {
                name: '',
                email: '',
                phone: '',
                message: '',
            },
        }
    },
    validations: {
      form: {
          name: {
              required,
          },
          email: {
              required,
              email,
          },
          phone: {
              required,
          },
          message: {
              required,
          },
      },
  },
  
} 

</script>


<style scoped>

    .clean{
        background: #ebebeb !important;
    }

    .img-home{
    width: 100% !important;
    }


    .states-container {
        justify-content: center;
    }

    video {
        width: 100%;
    }


    .searchContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }



    @media (min-width: 576px){
        .card-columns.dev{
            column-count: 4 !important;
        }
    }


    @media (max-width: 576px) {
        .searchContainer{
            flex-direction: column;
        }

        .titleContainer {
            text-align: center;
            margin-bottom: 10px;
        }
    }

</style>