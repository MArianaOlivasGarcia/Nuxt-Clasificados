

<template>
  <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">VEHÍCULOS DESTACADOS</h2>
                </div>
            </div>

            <SectionLoader v-if="isLoading"/>
            
            <div v-else class="card-columns">
              <CarCard 
                v-for="vehiculo in vehiculos"
                :key="vehiculo.id"
                :vehiculo="vehiculo" />
            </div>

        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            isLoading: true,
            vehiculos: []

        }
    },
    async created() {
        this.vehiculos = await this.$store.dispatch('getVehiculosOutstanding');
        this.isLoading = false;
    }

}
</script>

<style scoped>

    @media (min-width: 768px){
 
        .card-columns{
            column-count: 3 !important;
        }
    }
</style>