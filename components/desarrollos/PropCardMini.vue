

<template>
  <a :href="url">
        <div class="row m-0">

            <div class="col-md-4 p-0 d-flex justify-content-center align-items-center">
              <img  
              class="protoImage"
              :src=" 'https://clasificadoscontacto.com'+ p.image"
              alt="">
            </div>

            <div class="col-md-8 d-flex flex-column justify-content-center ">
              <p style="font-weight: bold;">{{ p.name }}</p>
              <!-- <p class="m-0 card-text text-muted">{{ property.colonia }}, {{ property.municipio }}, {{ property.state }}</p> -->
              <p class="m-0 price" v-if="p.price">Venta ${{ Number(p.price).toLocaleString()  }} {{ p.currency }}</p>
              <p class="m-0 price" v-if="p.pricer">Renta ${{ Number(p.pricer).toLocaleString()  }} {{ p.currencyr }}</p>
              <p class="m-0 price" v-if="!p.price">Consultar el precio</p>
              <p class="m-0 price" v-if="!p.pricer">Consultar el precio</p>
            </div>

                


        </div>


        <div class="row m-0 m-3">
          <div class="col-md-12 d-flex justify-content-center align-items-center p-0">

            <span v-if="p.bedrooms > 0"><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>{{ p.bedrooms }}</span>
            <span v-if="p.bathrooms > 0"><i class="icon-bath pl-2 pr-1"></i>{{ p.bathrooms }}</span>
            <span v-if="p.m2c > 0"><i class="icon-ruler pl-2 pr-1"></i>{{ p.m2c }} m<sup>2</sup></span>
            <span v-if="p.mlot > 0"><i class="icon-text  pl-2 pr-1"></i>{{ p.mlot }} m<sup>2</sup></span>
                  
          </div>
        </div>


    </a>
</template>

<script>

import helpers from '@/helpers/helpers'

export default {
    props: {
        p: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            url: ''
        }
    },
    created() {
        this.url = '/bienesraices/desarrollo/prototipo/' + helpers.normalize(this.p.name) + '_' + this.p.prototypeid + '.html';
    },
}
</script>

<style>

</style>