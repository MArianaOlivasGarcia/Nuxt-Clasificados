

<template>
  <section >
        <div class="container">

            <div class="row m-0">

                
                    <ProductCard
                    v-for="product in products"
                    :key="product.id"
                    :item="product" />
                
            </div>
        </div>
    </section>
</template>

<script>
export default {

    props: {
        products: []
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