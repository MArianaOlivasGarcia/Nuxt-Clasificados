<template>
    <main class="clean">
        <BannerHome/>
    <section class="block-info bg-light pb-2 pt-4">
        <Info/>
    </section>
    <section class="ftco-section bg-cc pb-4 mt-2 wow slideInUp">
        <div class="container">
            <div class="col-md-12 heading-section text-center mb-2">
                <h2 class="mb-4">ESTADOS</h2>
            </div>
            <div class="row d-flex wow slideInUp">
                <State 
                    v-for="state in states"
                    :key="state.id"
                    :state="state"
                />
            </div>
        </div>
    </section>
    <section class="ftco-section bg-light mb-4 wow slideInUp">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">PROPIEDADES DESTACADAS</h2>
                </div>
            </div>
            <div class="row d-flex wow slideInUp">
                 <!-- <SectionLoader v-if="!properties" />-->
                <PropertyCard 
                v-for="(item, i) in outstanding"
                    :key="i"
                    :item="item"
                /> 
            </div>
        </div>
    </section>

    </main>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  head: {
    titleTemplate: 'Clasificados Contacto | El buscador',
  },
  computed: {
      ...mapGetters({ states: 'getStatesList',
                    outstanding: 'getOutstanding' }),
  },
  created(){
    this.$store.dispatch("getStates")
    this.$store.dispatch("getOutstanding")
  }
} 

</script>


<style scoped>
.clean{
    background:#fff !important;
}

.img-home{
width: 100% !important;
}

</style>