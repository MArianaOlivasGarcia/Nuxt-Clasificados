<template>
    <main>


        <SliderAdds :adds="
            [{
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_cc.jpg',
                url: '#'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_3.png',
                url: 'https://clasificadoscontacto.com/bienesraices/propiedad/terenos-en-venta-en-san-miguel-de-allende_51033.html'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_2.png',
                url: 'https://clasificadoscontacto.com/bienesraices/propiedad/departamentos-en-venta-en-la-vista-residencial_51030.html'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_1.png',
                url: 'https://clasificadoscontacto.com/bienesraices/propiedad/departamentos-en-venta-en-corregidora_51032.html'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/auto_1.png',
                url: '#'
            },]" />
    

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
    },
    // head() {
    //     if (process.browser){
    //         function gtag(){dataLayer.push(arguments);}

    //         gtag('event', 'conversion', {'send_to': 'AW-653666729/6vYNCLC94LYDEKnT2LcC'});

    //     }

    // }
  
} 

</script>


<style scoped>

    main{
        background: #ebebeb !important;
    }


</style>