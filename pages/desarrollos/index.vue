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
                    <h2 class="mb-4">DESARROLLOS EN</h2>
                </div>
            </div>

             <client-only>

            <VueHorizontalList
                :items="items"
                :options="options"
                >
                <template v-slot:default="{item}">
                    <a href="/desarrollos" class="item">
                        <div style="width: 100%; height: 14rem; position: relative;">
                            <img :src="`https://clasificadoscontacto.com`+ item.Photo" :alt="item.Municipio" style="height: 100%; border-radius: 20px;">
                            <div style="width: 100%; height: 14rem; background-color: red; position: absolute; top: 0; border-radius: 20px; background-color: rgba(1, 86, 159, 0.4);"></div>
                            <h5 style="position: absolute; top: 5%; left: 10%; font-weight: bold; color: white;">{{item.Municipio}}</h5>
                        </div>
                    </a>
                </template>
            </VueHorizontalList>
            </client-only>
        </div>
    </section>




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
import VueHorizontalList from 'vue-horizontal-list'

export default {
    async asyncData ({ params, store }) {

      // fetch data from API
      try {
        const municipalities = await store.dispatch("getDevsMunicipalities")
        const devs = await store.dispatch("getDevs")

        return {
            municipalities,
            devs
        }
      } catch (error) {
        // Redirect to error page or 404 depending on server response
      }
    },
    head() {

        const description = `Preventas Exclusivas: Accede y encuentra la propiedad ideal en Querétaro y México, las mejores oportunidades de Inversión en inmuebles. Asegura tu patrimonio con inversiones con alta rentabilidad y plusvalía`;
        const title = 'Clasificados Contacto';
        const keywords = 'preventa, propiedad, Querétaro, México, oportunidad, inversión, Inmuebles, patrimonio, Asegura, rentabilidad, plusvalía';
        
        return {
            title: 'Clasificados Contacto',
            meta: [
            { hid:'description', name:'description', content: description},
            { hid: 'og-title', property: 'og:title', content: title },
            { hid: 'og-description', property: 'og:description', content: description },
            { hid: 'og-image', property: 'og:image', content: 'https://clasificadoscontacto.com/_nuxt/img/clasificados-logo-blanco.0c970fd.png' },
            { hid: 'keywords', property: 'keywords', content: keywords}
            ] 
        } 
    },
    components: {
        VueHorizontalList,
    },
    computed: {
        ...mapGetters({ isLoading: 'getIsLoading'}),
    },
    async created(){
        this.items = this.municipalities;
    },
    data() {
        return {
        options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 4 },
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,

          // Because: #app {padding: 80px 24px;}
          padding: 24,
        },
        position: {
          start: 2,
        },
        autoplay: { play: true, repeat: true, speed: 2500 },
      },
      items: [
        { title: "Item 0", content: "Content item with description" },
        { title: "Item 1", content: "Content item with description" },
        { title: "Item 2", content: "Content item with description" },
        { title: "Item 2", content: "Content item with description" },
        { title: "Item 2", content: "Content item with description" },
        { title: "Item 2", content: "Content item with description" },
        { title: "Item 2", content: "Content item with description" },
      ],
    
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