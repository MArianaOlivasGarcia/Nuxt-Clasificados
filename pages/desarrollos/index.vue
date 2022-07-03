<template>
    <main class="clean">


        <SliderAddsDev :category="'1'"/>
    
    <!-- <section class="searchContainer container mt-5 mb-5" >
        <div class="titleContainer col-md-5">
            <h3>¿Qué deseas buscar?</h3>
            <h4 class="text-justify">En <b>Clasificados contacto</b>, lo buscas lo encuentras, lo anuncias lo <b>vendes</b>. </h4>
        </div>
        <div class="col-md-7">
            <DevsSearch />
        </div>
    </section> -->






    <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">DESARROLLOS DESTACADOS</h2>
                </div>
            </div>

            <SectionLoader v-if="devs.length == 0"/>
            
            <div v-else class="card-columns">
                    <DevCard 
                        v-for="dev in devs" 
                        :key="dev.developmentid"
                        :dev="dev"
                    /> 
            </div>

        </div>
    </section>






    <IconScroll /> 



    </main>
</template>

<script>

import { mapGetters } from "vuex";
import { required, email } from 'vuelidate/lib/validators' 


export default {
    head: {
      titleTemplate: 'Clasificados Contacto | El buscador',
    },
    computed: {
        ...mapGetters({ isLoading: 'getIsLoading'}),
    },
    async created(){
        this.devs = [];
        this.devs = await this.$store.dispatch("getDevs")
        console.log(this.devs)
    },
    data() {
        return {
            devs: []
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