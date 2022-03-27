
<template>

    <section class="height-70 bg-gradient pt-2 pb-2 BannerHome">
    <img
      src="@/static/images/examples/background-yellow.jpg"
      alt="Image"
      class="bg-image opacity-60"
    />
    <div class="hero-wrap">
      <div class="overlay"></div>

      <div class="container">

        <div class="row no-gutters slider-text align-items-center justify-content-center">
          
          <div class="col-lg-8 col-md-12 col-sm-12 ftco-animate text-center">
                <div class="d-block d-sm-block d-md-block d-lg-none ">
                    <img src="@/static/images/examples/sideimage.png" class="img-lone" alt="" />
                </div>
            <h1> En <b>Clasificados contacto</b>, lo buscas lo encuentras, lo anuncias lo <b>vendes</b> </h1>
            <section class="ftco-search mt-2 mb-2 pt-1">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-12 search-wrap p-0">
                  
                    <SearchHome />
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div class="col-lg-4 col-md-12 text-right d-none d-lg-block d-md-none ftco-animated fadeInRight">
            <img src="@/static/images/examples/sideimage.png" alt="" />
          </div>

        </div>


      </div>
    </div>
  </section>
</template>


<script>

import { mapGetters } from 'vuex';

export default {
  computed: {
      ...mapGetters({ userStateLocation: 'getUserStateLocation' }),
  },
  watch: {
    'userStateLocation': {
      async handler(newValue, oldValue) {
        console.log('bambio el userlocation');
        console.log(newValue);
        console.log(oldValue);
      }
    }
  }
}
</script>



<style scoped> 

@media (max-width: 576px) {
  .BannerHome h1{
    font-size: 1.6rem;
  }
  .img-lone {
    width: 100% !important;
  }
}
@media (max-width: 992px) { 
.img-lone {
  width: 65%;
  }
}

img {
  width: 100%;
}
/* .bg-gradient {
    background: linear-gradient(90deg, #0099FF 0%, #f2ba10 100%);
} */
.height-70 {
  min-height: 70vh;
}
img.bg-image {
  object-fit: cover;
}
.opacity-60 {
  opacity: 0.4;
}
img {
  max-width: 100%;
}
.bg-image {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.bg-image:not([class*="absolute"]) {
  position: absolute;
}
::before,
::after {
  box-sizing: border-box;
}
[class*="height-"]:not(.align-items-initial) {
  align-items: center;
}
[class*="height-"] {
  display: flex;
}
section {
  position: relative;
}
section {
  padding: 4.5rem 0;
}
</style>