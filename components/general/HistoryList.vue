

<template>
  <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">LO MÁS BUSCADO</h2>
                </div>
            </div>

            <SectionLoader v-if="isLoading"/>
            
            <div v-else class="card-columns">
                    <ProductCard 
                        v-for="item in data" 
                        :key="item.id"
                        :item="item" /> 
            </div>

            

        </div>
    </section>
</template>

<script>
export default {

    props: {
        data: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isLoading: true,
        }
    },
    async created() {
        this.isLoading = false;
    }

}
</script>

<style scoped>

    @media (min-width: 768px){
 
        .card-columns{
            column-count: 4 !important;
        }
    }
</style>