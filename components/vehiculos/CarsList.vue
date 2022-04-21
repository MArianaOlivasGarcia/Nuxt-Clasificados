

<template>
  <section class="mt-5">
        <div class="container">
            <div class="row justify-content-center mb-2 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                    <h2 class="mb-4">VEHÍCULOS DESTACADOS</h2>
                </div>
            </div>

            <!-- <SectionLoader v-if="outstanding.length == 0"/> -->
            
            <div class="card-columns">
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
            vehiculos: [{
                id: '1',
                name: 'Ford Fiesta',
                image: 'https://images.kavak.services/images/22409/ford-fiesta-se2016-frontal-lateral-piloto-lejana-1601321312766.jpg?d=540x310',
                year: '2016',
                operation: 'Venta',
                category: 'Auto',
                price: '162,999.00',
                currency: 'MXN',
                km: '100,000',
                city: 'Cancún',
                state: 'Quintana Roo',
            },
            {
                id: '2',
                name: 'Hyundai Grand i10',
                image: 'https://autobild.com.mx/wp-content/uploads/2020/08/hyundai-grand-i10-2021-precio-en-mexico.jpg',
                year: '2021',
                operation: 'Venta',
                category: 'Auto',
                price: '234,000.00',
                currency: 'MXN',
                km: '0',
                city: 'Querétaro',
                state: 'Querétaro',
            },
            {
                id: '3',
                name: 'Ford Fiesta',
                image: 'https://images.kavak.services/images/22409/ford-fiesta-se2016-frontal-lateral-piloto-lejana-1601321312766.jpg?d=540x310',
                year: '2016',
                operation: 'Venta',
                category: 'Auto',
                price: '162,999.00',
                currency: 'MXN',
                km: '100,000',
                city: 'Cancún',
                state: 'Quintana Roo',
            },
            {
                id: '4',
                name: 'Italika 250',
                image: 'https://images.segundamano.mx/api/v1/smmx/images/99/9975921745.jpg?rule=webp_web_gallery_3x',
                year: '2021',
                operation: 'Venta',
                category: 'Moto',
                price: '36,000.00',
                currency: 'MXN',
                km: '2,500',
                city: 'Cancún',
                state: 'Quintana Roo',
            },
            {
                id: '5',
                name: 'Ford Fiesta',
                image: 'https://images.kavak.services/images/22409/ford-fiesta-se2016-frontal-lateral-piloto-lejana-1601321312766.jpg?d=540x310',
                year: '2016',
                operation: 'Venta',
                category: 'Auto',
                price: '162,999.00',
                currency: 'MXN',
                km: '100,000',
                city: 'Cancún',
                state: 'Quintana Roo',
            },
            {
                id: '6',
                name: 'Ford Fiesta',
                image: 'https://images.kavak.services/images/22409/ford-fiesta-se2016-frontal-lateral-piloto-lejana-1601321312766.jpg?d=540x310',
                year: '2016',
                operation: 'Venta',
                category: 'Auto',
                price: '162,999.00',
                currency: 'MXN',
                km: '100,000',
                city: 'Cancún',
                state: 'Quintana Roo',
            },
            {
                id: '7',
                name: 'Vendo bonito Nissan Platina, todo pagado, motor al 100. Detalles esteticos de su año, NO apto para princesos. ',
                image: 'https://img.automexico.com/crop/535x349/2019/06/11/e2020979-8-7cab.jpg',
                year: '2011',
                operation: 'Venta',
                category: 'Auto',
                price: '38,000.00',
                currency: 'MXN',
                km: '172,000',
                city: 'Cancún',
                state: 'Quintana Roo',
            },
            {
                id: '8',
                name: 'Ford Fiesta',
                image: 'https://images.kavak.services/images/22409/ford-fiesta-se2016-frontal-lateral-piloto-lejana-1601321312766.jpg?d=540x310',
                year: '2016',
                operation: 'Venta',
                category: 'Auto',
                price: '162,999.00',
                currency: 'MXN',
                km: '100,000',
                city: 'Cancún',
                state: 'Quintana Roo',
            },
            {
                id: '9',
                name: 'Ford Fiesta',
                image: 'https://images.kavak.services/images/22409/ford-fiesta-se2016-frontal-lateral-piloto-lejana-1601321312766.jpg?d=540x310',
                year: '2016',
                operation: 'Venta',
                category: 'Auto',
                price: '162,999.00',
                currency: 'MXN',
                km: '100,000',
                city: 'Cancún',
                state: 'Quintana Roo',
            }]

        }
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