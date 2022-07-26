<template>  
    <client-only v-if="!isLoading">    

      <div class="container mt-4 mb-4" style="background-color: #fff; padding: 1.25rem;">

        <Fab 
          v-if="property.user.cellphone" 
          :whatsApp="property.user.cellphone" 
          :folioProperty="property.folio"
          :whatsForm="whatsForm"
          :v="$v"/>

        <div class="row">

          <div class="col-md-7 gallery-content ">
            <lightbox :cells="4" :items="images"></lightbox>
          </div>

          <div class="col-md-5 data-container">
            
            <div>
              <h1>{{ property.productName }}</h1>
              <p class="card-text text-muted">{{ property.colonia }}, {{ property.municipio }}, {{ property.state }}</p>
              <h4 class="price">$ {{ Number(property.price).toLocaleString()  }} {{ property.currency }}</h4>
              <div class="postcard-bar"></div>
              <div class="text-center">
                  <span v-if="property.bedrooms > 0"><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>{{ property.bedrooms }}</span>
                  <span v-if="property.bathrooms > 0"><i class="icon-bath pl-2 pr-1"></i>{{ property.bathrooms }}</span>
                  <span v-if="property.m2c > 0"><i class="icon-ruler pl-2 pr-1"></i>{{ property.m2c }} m<sup>2</sup></span>
                  <span v-if="property.mlot > 0"><i class="icon-text  pl-2 pr-1"></i>{{ property.mlot }} m<sup>2</sup></span>
              </div>
            </div>

            <div>
              <div class="text-center"><span style="font-weight: bold;">Compartir</span></div>
                <div class="d-flex justify-content-center mt-2">
                  <a class="social" :href="`http://www.facebook.com/sharer.php?u=${ url }&t=${ property.description }`" target="_blank"><i class="fab fa-facebook"></i></a>
                  <a class="social" :href="`https://twitter.com/intent/tweet?url=${ url }&text=${ property.description }`" target="_blank"><i class="fab fa-twitter"></i></a>
                  <a class="social" :href="`https://api.whatsapp.com/send?text=${ property.description } ${url}`" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </div>
              </div>

            <div>
              <span style="font-weight: bold;">Ubicación</span>
              <GoogleMap 
                style="width: 100%; height: 250px" 
                :mapLat="property.latitude" 
                :mapLng="property.longitude" 
                :draggable="false"
                :scaleControl="false"/>
            </div>
          </div>

        </div>

        <div class="row mt-5">
          <div class="col-md-7">
            <div>
              <span style="font-weight: bold;">Descripción</span>
              <div style="font-size: 14px; text-align: justify; line-height:normal;" v-html="property.descriptionlong"></div>
            </div>


            <div class="amenities mt-3">
              <span style="font-weight: bold;">Amenidades</span>
              
              <div>
                <h2>Interiores</h2>
                <div class="container-fluid">
                    <ul>
                      <li v-if="property.amenities.interior[0].Amueblado">
                        <div class="listings_details_icon">
                          <span class=" icon-armchair"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Amueblado</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[1].Aire_acondicionado" >
                        <div class="listings_details_icon">
                          <span class="icon-air-conditioner"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Aire acondicionado</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[2].Mini_split" >
                        <div class="listings_details_icon">
                          <span class="icon-aire"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Mini split</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[3].Sala">
                        <div class="listings_details_icon">
                          <span class="icon-living-room"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Sala</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li v-if="property.amenities.interior[4].Cuarto_con_television" >
                        <div class="listings_details_icon">
                          <span class="icon-television"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Cuarto con televisión</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[5].Cuarto_de_lavado">
                        <div class="listings_details_icon">
                          <span class="icon-washing-machine"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Cuarto de lavado</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[6].Cocina">
                        <div class="listings_details_icon">
                          <span class="icon-kitchen"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Cocina</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[7].Casa_inteligente" >
                        <div class="listings_details_icon">
                          <span class="icon-smart-home"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Casa inteligente</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li v-if="property.amenities.interior[8].Lavadero" >
                        <div class="listings_details_icon">
                          <span class="icon-washing-machine"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Lavadero</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[9].Comedor">
                        <div class="listings_details_icon">
                          <span class="icon-mesa"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Comedor</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[10].Lavavajillas">
                        <div class="listings_details_icon">
                          <span class="icon-lavavajillas"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Lavavajillas</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[11].Ventilacion">
                        <div class="listings_details_icon">
                          <span class="icon-ventilacion"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Ventilación</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.interior[12].Estacionamiento_interior" >
                        <div class="listings_details_icon">
                          <span class="icon-garage"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Estacionamiento interior</p>
                        </div>
                      </li>
                    </ul>
                    
                </div>  
              </div>


              <div>
                <h2>Exteriores</h2>
                    <div class="container-fluid">
                    <ul>
                      <li v-if="property.amenities.exterior[0].Balcon" >
                        <div class="listings_details_icon">
                          <span class="icon-balcon"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Balcón</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[1].Terraza">
                        <div class="listings_details_icon">
                          <span class="icon-terraza"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Terraza</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[2].Jardin" >
                        <div class="listings_details_icon">
                          <span class="icon-jardin"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Jardín</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[3].Piscina" >
                        <div class="listings_details_icon">
                          <span class="icon-piscina"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Piscina</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li v-if="property.amenities.exterior[4].Ascensor">
                        <div class="listings_details_icon">
                          <span class="icon-elevator"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Ascensor</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[5].Cajon_Exterior">
                        <div class="listings_details_icon">
                          <span class="icon-persianas"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Cajón exterior</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[6].BBq">
                        <div class="listings_details_icon">
                          <span class="icon-grill"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>BBq</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[7].Bar">
                        <div class="listings_details_icon">
                          <span class="icon-cocktail"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Bar</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li v-if="property.amenities.exterior[8].Gym" >
                        <div class="listings_details_icon">
                          <span class="icon-weightlifter"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Gym</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[9].Muelle">
                        <div class="listings_details_icon">
                          <span class="icon-muelle"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Muelle</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[10].Cortina_anticiclonica">
                        <div class="listings_details_icon">
                          <span class="icon-cyclone"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Cortina anticiclónica</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[11].Zona_de_maniobras">
                        <div class="listings_details_icon">
                          <span class="icon-trasvolar"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Zona de maniobras</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li v-if="property.amenities.exterior[12].Area_de_descargo">
                        <div class="listings_details_icon">
                          <span class="icon-discharge"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Área de descargo</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[13].Stand">
                        <div class="listings_details_icon">
                          <span class="icon-food-stand"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Stand</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[14].Cortina_de_metal">
                        <div class="listings_details_icon">
                          <span class="icon-blinds"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Cortina de metal</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[15].Congelador">
                        <div class="listings_details_icon">
                          <span class="icon-freezer"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Congelador</p>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      <li v-if="property.amenities.exterior[16].Estacionamiento_exterior">
                        <div class="listings_details_icon">
                          <span class="icon-parking-area"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Estacionamiento exterior</p>
                        </div>
                      </li>
                      <li v-if="property.amenities.exterior[17].Cisterna">
                        <div class="listings_details_icon">
                          <span class="icon-water-tank"></span>
                        </div>
                        <div class="listings_details_content">
                          <p>Cisterna</p>
                        </div>
                      </li>
                    </ul>
                  </div>
              </div>

            </div>
          </div>


          <div class="col-md-5">

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
                    {{property.user.name}} {{property.user.lastname}}
                  </p>
                  <p class="mb-0 pt-2 ml-2 text-left"><i class="icon-phone"></i> {{property.user.cellphone}}</p>
                  <p class="mb-0 pt-2 ml-2 text-left"><i class="icon-mail-envelope-closed"></i> {{property.user.email}}</p>
                
                </div>

                <div class="rounded">
                  <ContactForm 
                    :v="$v" 
                    :form="form"
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
        const property = await store.dispatch('getPropertyDetail', id)

        return {
            property,
        }
      } catch (error) {
        // Redirect to error page or 404 depending on server response
      }
    },
    head() {

      if ( !this.property ) {
        return {
          title: 'Clasificados contacto | El buscador'
        }
      }
      const { title, description, image } = this.property.meta

      return {
        title: title,
        meta: [
          { hid:'description', name:'description', content: description},
          { hid: 'og-title', property: 'og:title', content: title },
          { hid: 'og-description', property: 'og:description', content: description },
          { hid: 'og-image', property: 'og:image', content: image }
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
            email: { email }
        },
        
    },
    async created() {

        const { fullPath } = this.$route
        this.url = `https://clasificadoscontacto.com${ fullPath }`


        for (const property in this.property.images) {
          this.images.push(this.property.images[property]['largefile'])
        } 

    },
    mounted(){
      if ( this.property ){
        console.log(this.property)
        this.isLoading = false
      }
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
    line-height: 10px;
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