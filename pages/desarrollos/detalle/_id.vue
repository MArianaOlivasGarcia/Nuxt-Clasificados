<template>  
    <client-only v-if="!isLoading">    

      <div class="container mt-4 mb-4" style="background-color: #fff; padding: 1.25rem;">
<!-- 
        <Fab 
          v-if="property.user.cellphone" 
          :whatsApp="property.user.cellphone" 
          :folioProperty="property.folio"
          :whatsForm="whatsForm"
          :v="$v"/> -->

        <div class="row">

          <div class="col-md-7 gallery-content ">
            <lightbox :cells="4" :items="images"></lightbox>
          </div>

          <div class="col-md-5 data-container">
            
            <div>
              <h1>{{ dev.name }}</h1>
              <p class="card-text text-muted">{{ dev.state }}, {{ dev.city }}</p>
              <h4 class="price">Desde $ {{ Number(dev.precmin).toLocaleString() }} {{ dev.currency }} <br> Hasta $ {{ Number(dev.precmax).toLocaleString() }} {{ dev.currency }}</h4>
              <div class="postcard-bar"></div>
              <div class=" d-flex flex-column m-3">
                  <p class="text-primary">Número de pisos: {{ dev.floors }}</p>
                  <span v-if="dev.roomsmin"><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>Desde {{ dev.roomsmin }} hasta {{ dev.roomsmax }}. </span>
                  <span v-if="dev.bathroomsmin"><i class="icon-bath pl-2 pr-1"></i>Desde {{ dev.bathroomsmin }} hasta {{ dev.bathroomsmax }}.</span>
                  <span v-if="dev.m2cmin"><i class="icon-ruler pl-2 pr-1"></i>Desde {{ dev.m2cmin }} m<sup>2</sup> hasta {{ dev.m2cmax }} m<sup>2</sup>.</span>
                  <span v-if="dev.m2lotmin"><i class="icon-text  pl-2 pr-1"></i>Desde {{dev.m2lotmin}} m<sup>2</sup> hasta {{ dev.m2lotmax }} m<sup>2</sup>.</span>
              </div>
            </div>

            <div>
              <div class="text-center"><span style="font-weight: bold;">Compartir</span></div>
                <div class="d-flex justify-content-center mt-2">
                  <a class="social" :href="`http://www.facebook.com/sharer.php?u=${ url }&t=${ dev.name }`" target="_blank"><i class="fab fa-facebook"></i></a>
                  <a class="social" :href="`https://twitter.com/intent/tweet?url=${ url }&text=${ dev.name }`" target="_blank"><i class="fab fa-twitter"></i></a>
                  <a class="social" :href="`https://api.whatsapp.com/send?text=${ dev.name } ${url}`" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </div>
              </div>

            <div v-if="dev.latitude && dev.longitude">
              <span style="font-weight: bold;">Ubicación</span>
              <GoogleMap 
                style="width: 100%; height: 250px" 
                :mapLat="dev.latitude" 
                :mapLng="dev.longitude" 
                :draggable="false"
                :scaleControl="false"/>
            </div>
          </div>

        </div>

        <div class="row mt-5 px-3">
          <div class="col-md-8">

            <div class="row flex-column"> 
              <span style="font-weight: bold;">Descripción</span>
              <div style="font-size: 14px; text-align: justify; line-height:normal;" v-html="dev.descriptionlong"></div>
            </div>

            <div class="row mt-4">
              <span style="font-weight: bold;">Explora los prototipos de {{ dev.name }}</span>
            </div>

            <div class="row justify-content-center" v-if="dev.prototipos.length == 0">
              <p class="text-muted mt-3" style="font-size: 14px">De momento no hay prototipos.</p>
            </div>

            <div class="row" v-else>
              <PrototypeCard 
                v-for="(prop, idx) in dev.prototipos"
                :key="idx"
                :prototype="prop"
              />
            </div>

            
          </div>


          <div class="col-md-4">

            <div class="text-center">
              <div style="justify-content: center;
                  display: flex;
                  align-items: center;">
                <img class="logo-crediteka" src="https://www.crediteka.com/img/logo_color.png" alt="Logo Crediteka">
                <p style="font-weight: 500; font-size: 18px;">¿Te interesa esta propiedad?</p>
              </div>
              <a href="https://crediteka.com/precalificate" target="__blank" class="btn btn-credi">Crédito pre autorizado</a>
            </div>




            <div class="contact-form">
              
              
                <div class="text-center">
                  <img
                    class="img-inmo"
                    src="@/static/images/property-placeholder.jpeg"
                  />
                  <p class="ml-2 pt-3 font-weight-bold text-left mb-1">
                    {{ dev.user.name }} {{ dev.user.lastname }}
                  </p>
                  <p class="mb-0 pt-2 ml-2 text-left"><i class="icon-phone"></i> {{ dev.user.cellphone }}</p>
                  <p class="mb-0 pt-2 ml-2 text-left"><i class="icon-mail-envelope-closed"></i> {{ dev.user.email }}</p>
                
                </div>

                <div class="rounded">
                  <ContactForm 
                    :v="$v" 
                    :form="form"
                    :productid="dev.productid"
                    :category="1" />
                </div>



            </div>
          </div>
        </div>

      </div> 
   
    </client-only>
</template> 




<script>

import { required, email } from 'vuelidate/lib/validators' 

export default {
    async asyncData ({ params, store }) {

      const rutaCortada = params.id.split('_')
      const id = rutaCortada[ rutaCortada.length - 1 ].split('.')[0]
      // fetch data from API
      try {
        const dev = await store.dispatch('getDevById', id)

        return {
            dev,
        }
      } catch (error) {
        // Redirect to error page or 404 depending on server response
      }
    },
    head() {

      if ( !this.dev ) {
        return {
          title: 'Clasificados contacto | El buscador'
        }
      }

      const { name, descriptionlong, image } = this.dev.meta

      return {
        title: name,
        meta: [
          { hid:'description', name:'description', content: descriptionlong},
          { hid: 'og-title', property: 'og:title', content: name },
          { hid: 'og-description', property: 'og:description', content: descriptionlong },
          { hid: 'og-image', property: 'og:image', content: 'https://clasificadoscontacto.com/' + image }
        ] 
      } 
    },
    data() {
        return {
            isLoading: true,
            form: {
                name: '',
                email: '',
                phone: '',
                message: '',
            },
            whatsForm: {
                name: '',
                whatsapp: '',
                message: '',
                email: '',
            },
            url: '',
            images: [],
        }
    },
    validations: {
        form: {
            name: { required },
            email: { required, email },
            phone: { required },
            message: { required }
        },
        whatsForm: {
            name: { required },
            whatsapp: { required },
            message: { required },
            email: { required, email }
        },
        
    },
    async created() {

        const { fullPath } = this.$route
        this.url = `https://clasificadoscontacto.com${ fullPath }`


        for (const property in this.dev.images) {
          this.images.push('https://clasificadoscontacto.com/' + this.dev.images[property]['image'])
        } 

    },
    mounted(){
      if ( this.dev ){
        this.isLoading = false
      }
    },
    methods: {
      
    }
}
</script>




<style scoped>
  h1 {
    font-size: 25px;
    font-weight: 500;
  }
  h4.price {
    font-size: 24px;
    color: #00569d;
    font-weight: 700;
    line-height: 30px;
  }

  h2 {
    font-size: 16px;
    font-weight: 500;
  }

  .postcard-bar {
    width: 50px;
    height: 3px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #f2e115;
    transition: width 0.2s ease;
  }

  i {
     color: #01569D;
     font-size: 20px;
  }


  div.data-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div.gallery-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }


  .social {
    margin: 0px 10px;
  }

  .social > i{
    font-size: 30px;
  }
  
  i.fa-facebook {
    color: #0D96F5;
  }

  i.fa-twitter {
    color: #08A6E6;
  }


  i.fa-whatsapp {
    color: #3FC250;
  }

  .contact-form {
    background-color: #EBEBEB;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
  }


  img.logo-crediteka {
    width: 30%;
  }


  .btn-credi {
    width: 100%;
    padding: 15px;
    background: #FED823;
  }

  .btn-credi:hover {
    background: rgb(250, 209, 5);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px !important; 
  }

  img.img-inmo {
    height: 180px;
    width: 180px;
    border-radius: 100%;
  }




  .amenities ul {
  display: flex;
  list-style: none;
}

.amenities li {
  flex: auto;
}



.listings_details_content p {
  font-size: 13px;
}
.property-info img {
  width: 30% !important;
}
.listings_details_features_list li {
  position: relative;
  display: block;
  padding-left: 40px;
}
.listings_details_features_list li .listings_details_icon {
  position: absolute;
  top: 0;
  left: 0;
}


.listings_details_icon > span::before {
    color: #00569d;
  font-size: 35px;
}
</style>