

<template>
  <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">DESCUBRE NUEVOS PRODUCTOS</h2>
                </div>
            </div>

            <!-- <SectionLoader v-if="outstanding.length == 0"/> -->
            
            <div class="card-columns">
              <AddCard 
                v-for="add in adds"
                :key="add.id"
                :add="add" />
            </div>

        </div>
    </section>
</template>

<script>
export default {

    data() {
        return {
            adds: [{
                id: '1',
                title: 'TITULO DE PRUEBA',
                subtitle: 'ESTE ES UN SUBTITULO',
                image: 'https://www.factumarket.com/wp-content/uploads/2017/09/sistema-facturacion-agencia-viajes.png',
                url: '/',
                category: 'Viajes',
            },
            {
                id: '2',
                title: 'EL INMUEBLE DE TUS SUEÑOS',
                subtitle: 'DESCUBRE',
                image: 'https://www.academiadeinversion.com/wp-content/uploads/2014/03/como-calcular-valor-inmueble-metodos-ejemplos.png',
                url: '/',
                category: 'Inmuebles',
            },
            {
                id: '3',
                title: 'LLEVATE A CASA UN NUEVO AUTO',
                subtitle: 'LO QUE BUSCAS ESTA AQUÍ',
                image: 'https://www.densoautoparts.com/Portals/DensoAutoParts/Images/SlideShow/Spanish/dom-car-es.png',
                url: '/',
                category: 'Vehículos',
            },
            {
                id: '4',
                title: '¿PORQUE INVERTIR EN BIENES RAICES?',
                subtitle: 'ES AHORA O NUNCA!',
                image: 'https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0019/7536/cr%C3%A9ditos-hipotecarios.jpg?1432200008',
                url: '/',
                category: 'Inversiones',
            },
            {
                id: '5',
                title: '10% DE DESCUENTO EN PRODUCTOS APPLE',
                subtitle: 'ESTRENA NUEVO IPHONE',
                image: 'https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone-x-space-grey_2_3_4_1_3_2.jpg',
                url: '/',
                category: 'Tecnología',
            },
            {
                id: '6',
                title: 'FORMA PARTE DEL EQUIPO',
                subtitle: 'TE ESPERAMOS',
                image: 'https://www.eltiempo.com/files/image_640_428/uploads/2021/05/20/60a7318ec729b.jpeg',
                url: '/',
                category: 'Empleos',
            }]
        }
    }

}
</script>

<style scoped>

    @media (min-width: 768px){
 
        .card-columns{
            column-count: 2 !important;
        }
    }
</style>