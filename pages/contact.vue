<template>
  <div>
    <section class="ftco-section bg-light ftco-animated fadeInUp">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-7 mb-5">
            <div class="text-center bg-white">
            <router-link to="/">
              <img class="logo mt-3 m-0" src="@/static/clasificadoslogo.png" />
            </router-link>
            </div>
            <ContactForm :v="$v" :form="form"/>
          </div>
          <div class="col-lg-5">
            <div class="pl-4 pb-4 pr-4 mb-3">   
              <div class="d-flex bg-white p-3 mb-3 right-info ftco-animated fadeInUp">
                <div class="align-self-center">
                  <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icn-background"></i>
                    <i class="fas fa-map-marker-alt fa-stack-1x icn-on"></i>
                  </span>
                </div>
                <div class="align-self-center">
                  <p class="mb-4">
                      Circuito Alamos 98, Dep. 1 Interior
                      Alamos 2da. Sección.
                      Querétaro, Qro. C.P. 76160
                  </p>
                </div>
              </div>
              <div class="d-flex bg-white p-3 mb-3 right-info ftco-animated fadeInUp">
                <div class="align-self-center">
                  <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icn-background"></i>
                    <i class="fas fa-envelope fa-stack-1x icn-on"></i>
                  </span>
                </div>
                <div class="align-self-center">
                  <p class="mb-4">
                    <a :href="'mailto:'">
                      info@clasificadoscontacto.com 
                    </a>
                  </p>
                </div>
              </div>
                <div class="d-flex bg-white p-3 mb-3 right-info ftco-animated fadeInUp">
                <div class="align-self-center">
                  <span class="fa-stack fa-2x">
                    <i class="fa fa-circle fa-stack-2x icn-background"></i>
                    <i class="fas fa-phone fa-stack-1x icn-on"></i>
                  </span>
                </div>
                <div class="align-self-center">
                  <p class="mb-4">
                    <a href="">
                    442 223 5803,  442 195 0982
                    </a>
                     
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>




<script>

import { required, email } from 'vuelidate/lib/validators' 


export default {
  head: {
    titleTemplate: 'Clasificados Contacto | Contancto',
  },
  data() {
    return {
      form: {
          name: '',
          email: '',
          phone: '',
          message: '',
      },
    }
  },
  validations: {
      form: {
          name: {
              required,
          },
          email: {
              required,
              email,
          },
          phone: {
              required,
          },
          message: {
              required,
          },
      },
  },
}
</script>

<style >
.bannr-section{
  padding: 0px;
}
.bannr-section .hero-wrap{
  width: 100%;
  padding: 5em 0;
  position: relative;
}
.bannr-section .hero-wrap .slider-text .bread {
  color: #000;
  font-family: 'Poppins';
}

.logo {
  display: inline-block;
  max-width: 40%;
  margin-top: auto;
}

.logo img {
  margin-top: 40%;
  margin-left: -10px;
  max-width: 20px;
  max-height: 30px;
}

.color-grey{
  color: #808080;
}

.icn-background {
    color: #f2e115;
}
.icn-on{
  color:#fff;
}
.contact-section .right-info{
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
}
</style>