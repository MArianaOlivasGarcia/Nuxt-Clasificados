<template>
    <main>


        <SliderAdds :adds="
            [{
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_cc.jpg',
                url: '#'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_3.png',
                url: 'bienesraices/propiedad/terenos-en-venta-en-san-miguel-de-allende_51033.html'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_2.png',
                url: 'bienesraices/propiedad/departamentos-en-venta-en-la-vista-residencial_51030.html'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_1.png',
                url: 'bienesraices/propiedad/departamentos-en-venta-en-corregidora_51032.html'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/auto_1.png',
                url: 'vehiculos'
            },]" />
    

        <HistoryList :data="data"/>




        <!-- <AddsList /> -->


        <CategoriesList />

        <IconScroll /> 


    </main>
</template>

<script>



export default {
     async asyncData ({ params, store }) {

      // fetch data from API
      try {
        const data = await store.dispatch('searchGeneral', { limit: 12 });

        return {
            data,
        }
      } catch (error) {
        // Redirect to error page or 404 depending on server response
      }
    },
    head() {

        const description = `Propiedades inmobiliarias: Casas, departamentos, terrenos, bodegas y oficinas. Desarrollos inmobiliarios en preventa, venta y renta. ¡Las mejores oportunidades de inversión patrimonial! Zonas de alta Plusvalía y seguridad.`;
        const title = 'Clasificados Contacto';
        const keywords = 'preventas, desarrollos, inversión, patrimonial, departamentos, casas, terrenos, zonas, plusvalía, seguridad, compra, venta, renta';
        
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