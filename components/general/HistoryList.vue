

<template>
  <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">BASADO EN TUS FAVORITOS</h2>
                </div>
            </div>

            <!-- <SectionLoader v-if="outstanding.length == 0"/> -->
            
            <div class="card-columns">
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

    data() {
        return {
            data: [{
                id: '1',
                title: 'Nissan Platina',
                image: 'https://http2.mlstatic.com/D_NQ_NP_720341-MLM49629483538_042022-W.jpg',
                category: 'Vehículos',
                price: '40,000.00',
                currency: 'MXN',
                state: 'Querétaro',
                city: 'Querétaro',
            },
            {
                id: '2',
                title: 'Ford Fiesta 2006',
                image: 'https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/278523853_141308795127826_4643724087005306987_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeHunk0FhBDp51BP6tHxVlTvp4z9SdTDv4mnjP1J1MO_iSurShremiCFdtQOuVTFEh7G-SxkFHzmZboy8XRDHLer&_nc_ohc=9GvYa-KWluYAX_vEYl4&_nc_ht=scontent.fcjs3-1.fna&oh=00_AT9oAO1hRUgtIrJWlMTp4oLrbeFwiPgZylurRkmn_Bjl-Q&oe=626100A5',
                category: 'Vehículos',
                price: '41,000.00',
                currency: 'MXN',
                state: 'Cancún',
                city: 'Quintana Roo',
            },
            {
                id: '3',
                title: 'Departamento en Venta en Sm 19 Cancún Quintana Roo',
                image: 'https://www.bienesonline.com/mexico/photos/fachada31299649289.jpg',
                category: 'Inmuebles',
                price: '4,150,000.00',
                currency: 'MXN',
                state: 'Cancún',
                city: 'Quintana Roo',
            },
            {
                id: '4',
                title: 'Nissan Platina',
                image: 'https://http2.mlstatic.com/D_NQ_NP_720341-MLM49629483538_042022-W.jpg',
                category: 'Vehículos',
                price: '40,000.00',
                currency: 'MXN',
                state: 'Querétaro',
                city: 'Querétaro',
            },
            {
                id: '5',
                title: 'Ford Fiesta 2006',
                image: 'https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/278523853_141308795127826_4643724087005306987_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeHunk0FhBDp51BP6tHxVlTvp4z9SdTDv4mnjP1J1MO_iSurShremiCFdtQOuVTFEh7G-SxkFHzmZboy8XRDHLer&_nc_ohc=9GvYa-KWluYAX_vEYl4&_nc_ht=scontent.fcjs3-1.fna&oh=00_AT9oAO1hRUgtIrJWlMTp4oLrbeFwiPgZylurRkmn_Bjl-Q&oe=626100A5',
                category: 'Vehículos',
                price: '41,000.00',
                currency: 'MXN',
                state: 'Cancún',
                city: 'Quintana Roo',
            },
            {
                id: '6',
                title: 'Departamento en Venta en Sm 19 Cancún Quintana Roo',
                image: 'https://www.bienesonline.com/mexico/photos/fachada31299649289.jpg',
                category: 'Inmuebles',
                price: '4,150,000.00',
                currency: 'MXN',
                state: 'Cancún',
                city: 'Quintana Roo',
            },
            {
                id: '7',
                title: 'Ford Fiesta 2006',
                image: 'https://scontent.fcjs3-1.fna.fbcdn.net/v/t39.30808-6/278523853_141308795127826_4643724087005306987_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-5&_nc_sid=5cd70e&_nc_eui2=AeHunk0FhBDp51BP6tHxVlTvp4z9SdTDv4mnjP1J1MO_iSurShremiCFdtQOuVTFEh7G-SxkFHzmZboy8XRDHLer&_nc_ohc=9GvYa-KWluYAX_vEYl4&_nc_ht=scontent.fcjs3-1.fna&oh=00_AT9oAO1hRUgtIrJWlMTp4oLrbeFwiPgZylurRkmn_Bjl-Q&oe=626100A5',
                category: 'Vehículos',
                price: '41,000.00',
                currency: 'MXN',
                state: 'Cancún',
                city: 'Quintana Roo',
            },
            {
                id: '8',
                title: 'Departamento en Venta en Sm 19 Cancún Quintana Roo',
                image: 'https://www.bienesonline.com/mexico/photos/fachada31299649289.jpg',
                category: 'Inmuebles',
                price: '4,150,000.00',
                currency: 'MXN',
                state: 'Cancún',
                city: 'Quintana Roo',
            }]
        }
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