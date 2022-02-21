

<template>
  <div class="row m-0 pb-4 pt-4" style="width: 100%; background-color: #135da3; border-top: 3px solid #F2E113;">
      <div class="col-md-3 col-6 text-center">
          <h5>NAVEGACIÓN INTERNA</h5>
          <NuxtLink to="/">INICIO</NuxtLink>
          <NuxtLink to="#categories">CATEGORÍAS</NuxtLink>
          <p>SERVICIOS</p>
          <NuxtLink :to="`/category?operation=1&page=1&state=${ userStateLocation.folio }`">INMUEBLES EN VENTA</NuxtLink>
          <NuxtLink :to="`/category?operation=2&page=1&state=${ userStateLocation.folio }`">INMUEBLES EN RENTA</NuxtLink>
          <NuxtLink :to="`/category?category=3&page=1&state=${ userStateLocation.folio }`">LOCALES COMERCIALES</NuxtLink>
          <NuxtLink :to="`/category?category=5&page=1&state=${ userStateLocation.folio }`">OFICINAS</NuxtLink>
          <p>CASOS DE ÉXITO</p>
          <p>NOTICIAS</p>
          <p>TRABAJA CON NOSOTROS</p>
          <p>CONTACTO</p>
      </div>

      <div class="col-md-3 col-6">
          <div class="row">
              <div class="col text-center">
                    <h5>RECURSOS</h5>
                    <p>DESCARGABLES</p>
                    <p>EBOOKS</p>
                    <p>CURSOS EN LÍNEA</p>
                    <p>WEBINARS</p>
                </div>
          </div>
          <div class="row">
              <div class="col text-center">
                    <h5>LEGALES</h5>
                    <p>AVISO DE PRIVACIDAD</p>
                    <p>TÉRMINOS Y CONDICIONES</p>
                </div>
          </div>
      </div>
      
      
      
      <div class="col-md-3 col-6">
          <div class="row">
              <div class="col text-center">
                    <h5>VENTA</h5>
                    <p>CASAS EN VENTA</p>
                    <p>DEPARTAMENTOS EN RENTA</p>
                    <p>DESARROLLOS EN VENTA</p>
                    <p>REMATES</p>
                    <p>TERRENOS EN VENTA</p>
                </div>
          </div>
          <div class="row">
              <div class="col text-center">
                    <h5>RENTA</h5>
                    <p>CASAS EN RENTA</p>
                    <p>DEPARTAMENTOS EN RENTA</p>
                    <p>CASAS VACACIONALES EN RENTA</p>
                    <p>CUARTOS EN RENTA</p>

                </div>
          </div>
      </div>
      

    <div class="col-md-3 col-6">
          <div class="row">
              <div class="col text-center">
                    <h5>PROPIEDADES COMERCIALES</h5>
                    <p>LOCALES EN VENTA</p>
                    <p>LOCALES EN RENTA</p>
                    <p>OFICINAS EN VENTA</p>
                    <p>OFICINAS EN RENTA</p>
                </div>
          </div>
          <div class="row">
              <div class="col text-center">
                    <h5>SERVICIOS A EMPRESAS INMOBILIARIAS</h5>
                    <p>SERVICIOS A DESARROLLADORES</p>
                    <p>SERVICIOS A BROKERS</p>
                    <p>SERVICIOS A AGENCIAS INMOBILIARIAS</p>
                    <p>SERVICIOS A ASESORES INDEPENDIENTES</p>

                </div>
          </div>
      </div>

      
      <div class="col-md-3 col-6"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({ userStateLocation: 'getUserStateLocation' })
    },
}
</script>

<style scoped>

h5 {
    color: #F2E113;
    font-size: 16px;
}

a, p {
    color: white;
    margin: 0px;
    font-size: 14px;
    display: block;
}

.centrar {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>