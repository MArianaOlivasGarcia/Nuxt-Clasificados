<template>
    <main>


        <SliderAdds :adds="adds" />
    
        <!-- <div class="container">
            <Gallery :items="items"/>
        </div> -->

        <HistoryList :data="data"/>



        <!-- <AddsList /> -->
        


        <CategoriesList />

        <IconScroll /> 


    </main>
</template>

<script>
import Gallery from '~/components/Gallery.vue';



export default {
    async asyncData({ params, store }) {
        try {
            const data = await store.dispatch("searchGeneral", { limit: 12 });
            return {
                data,
                items: [
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
                    // 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
                ],
            };
        }
        catch (error) {
            // Redirect to error page or 404 depending on server response
        }
    },
    head() {
        const description = `Propiedades inmobiliarias: Casas, departamentos, terrenos, bodegas y oficinas. Desarrollos inmobiliarios en preventa, venta y renta. ¡Las mejores oportunidades de inversión patrimonial! Zonas de alta Plusvalía y seguridad.`;
        const title = "Clasificados Contacto";
        const keywords = "preventas, desarrollos, inversión, patrimonial, departamentos, casas, terrenos, zonas, plusvalía, seguridad, compra, venta, renta";
        return {
            title: "Clasificados Contacto",
            meta: [
                { hid: "description", name: "description", content: description },
                { hid: "og-title", property: "og:title", content: title },
                { hid: "og-description", property: "og:description", content: description },
                { hid: "og-image", property: "og:image", content: "https://clasificadoscontacto.com/_nuxt/img/clasificados-logo-blanco.0c970fd.png" },
                { hid: "keywords", property: "keywords", content: keywords }
            ]
        };
    },
    async created() {
        // try {
        //     await this.$store.dispatch("searchGeneral", { limit: 12 });
        // } catch (error) {
        //     console.log(error)
        // }
    },
    data() {
        return {
            adds: [{
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_cc.jpg',
                url: '#'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/banner_3.png',
                url: 'bienesraices/propiedad/terenos-en-venta-en-san-miguel-de-allende_51033.html'
            },
            {
                image: 'https://clasificadoscontacto.com/views/images/banners/auto_1.png',
                url: 'vehiculos'
            }]
        };
    },
    components: { Gallery }
} 

</script>


<style scoped>

    main{
        background: #ebebeb !important;
    }


</style>