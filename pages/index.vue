<template>
    <main>


        <SliderAdds :adds="
            [{
                image: 'https://http2.mlstatic.com/D_NQ_883539-MLA49499729246_032022-OO.webp',
                url: 'https://http2.mlstatic.com/D_NQ_883539-MLA49499729246_032022-OO.webp'
            },
            {
                image: 'https://http2.mlstatic.com/D_NQ_735309-MLA49634844915_042022-OO.webp',
                url: 'https://http2.mlstatic.com/D_NQ_735309-MLA49634844915_042022-OO.webp'
            }]" />
    

        <HistoryList />




        <!-- <AddsList /> -->


        <CategoriesList />

        <IconScroll /> 


    </main>
</template>

<script>



export default {
    head: {
      titleTemplate: 'Clasificados Contacto | El buscador',
    },
    async created(){
    
    },
    data() {
        return {
        }
    }
  
} 

</script>


<style scoped>

    main{
        background: #ebebeb !important;
    }


</style>