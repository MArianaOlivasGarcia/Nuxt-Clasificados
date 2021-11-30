<template>

     <main>

    <client-only v-if="!isLoading" >

      
   
      <!-- GENERAL CONTAINER -->
      <section class="ftco-section detail-section bg-light pb-5">
  
          <div class="container">
              <Carousel :items="property.images" />
          </div>
        
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="listing_details_top_left">
                <div class="listing_details_top_title">
                  <h1>{{property.productName}}</h1>
                  <span> <i class="icon-location"></i> {{property.city}} , {{property.state}} </span>
                
                  <h4>${{property.price}} {{property.currency}}</h4>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="listing_details_top_right clearfix">
                <div class="listing_details_top_product_list_box">
                  <ul class="listing_details_top_product_list list-unstyled">
                    <li>
                      <div class="icon_box">
                        <span class="icon-hashtag"></span>
                      </div>
                      <div class="text_box">
                        <h5>Folio</h5>
                        <p>{{property.folio}}</p>
                      </div>
                    </li>
                    <li v-if="property.bedrooms > 0" >
                      <div class="icon_box">
                        <span class="icon-bed"></span>
                      </div>
                      <div class="text_box">
                        <h5>{{property.bedrooms}}</h5>
                        <p>recamaras</p>
                      </div>
                    </li>
                    <li v-if="property.bathrooms > 0">
                      <div class="icon_box">
                        <span class="icon-bathtub"></span>
                      </div>
                      <div class="text_box">
                        <h5>{{property.bathrooms}}</h5>
                        <p>baños</p>
                      </div>
                    </li>
                  </ul>
                   <ul class="listing_details_top_product_list list-unstyled ">
                    <li v-if="property.m2c > 0">
                      <div class="icon_box">
                        <span class="icon-house-size"></span>
                      </div>
                      <div class="text_box">
                        <h5>{{property.m2c}}</h5>
                        <p>m<sup>2</sup></p>
                      </div>
                    </li>
                    <li v-if="property.mlot > 0">
                      <div class="icon_box">
                        <span class="icon-resize"></span>
                      </div>
                      <div class="text_box">
                        <h5>{{property.mlot}}</h5>
                        <p>m<sup>2</sup></p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="row">
                  <div class="col-md-6 mt-3">
                    <div class="share-property text-center">
                      <a :href="`http://www.facebook.com/sharer.php?u=${ url }&t=${ property.description }`" target="_blank" class="pl-3 pr-3">
                        <span class="icon-facebook"></span>
                      </a>
                      <a :href="`https://twitter.com/intent/tweet?url=${ url }&text=${ property.description }`" target="_blank" class="pl-3 pr-3">
                        <span class="icon-twitter"></span>
                      </a>
                      <a :href="`https://api.whatsapp.com/send?text=${ property.description } ${url}`" target="_blank" class="pl-3 pr-3">
                        <span class="icon-whatsapp"></span>
                      </a>
                      <div class="text-center mb-3">
                        <p>COMPARTE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="property-info pt-3 pb-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#description"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    >Descripción</a
                  >
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#amenity"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >Amenidades</a
                  >
                </li>
              </ul>
              <div class="tab-content mt-3 mb-3" id="myTabContent">
                <!-- DESCRIPCION/UBICACION/VIDEO -->
                <div
                  class="tab-pane fade show active
                      fadeInUp
                      ftco-animated"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div v-html="property.descriptionlong" class="col-md-12 mb-3 text-justify descrip">
                  </div>
                  <div>
                    <div
                      class="
                        col-md-12
                        ftco-animate
                        fadeInUp
                        ftco-animated
                        pt-3
                      "
                    >
                     <h2>UBICACIÓN</h2>
                    </div>
                   <div v-if="property.latitude || property.longitude" class="col-md-12 mb-3 pt-2">
                      <div class="col-12">
                        
                        <GoogleMap :mapLat="property.latitude" :mapLng="property.longitude" />
                      </div>
                    </div>

                  </div>
                </div>


                <!-- AMENIDADES -->
                <div
                  class="tab-pane fade"
                  id="amenity"
                  role="tabpanel"
                  aria-labelledby="amenity-tab"
                >
                  <div
                    class="
                      amenities
                      ftco-animate
                      mb-5
                      mt-4
                      fadeInUp
                      ftco-animated
                    "
                  >
                    <h2 class="text-center">AMENIDADES</h2>
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
            </div>


            <!-- FORMULARIO AGENTE -->
            <div class="col-lg-4 bg-softcc">
              <div class="ftco-section contact-section">
                <div class="ml-1 mr-1 text-center">
                  <img
                    class="img img-agent"
                    width="50%"
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg"
                  />
                  <p class="ml-2 pt-3 font-weight-bold text-left mb-1">
                    {{property.user.name}} {{property.user.lastname}}
                  </p>
                  <p class="mb-0 pt-2 ml-2 text-left">
                    <b class="texto2"><i class="icon-phone"></i> </b>
                    <a
                      class="contact-links"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Contactar en WhatsApp"
                      target="_blank"
                    >
                      {{property.user.cellphone}}
                    </a>
                  </p>
                  <p class="mb-1 ml-2 text-left">
                    <b class="texto2"
                      ><i class="icon-mail-envelope-closed"></i>
                    </b>
                    <a class="contact-links"> {{property.user.email}} </a>
                  </p>
                </div>

                <div class="rounded">
                  <ContactForm :v="$v" :form="form"/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      </client-only>

    <Loader v-else/>
  
  </main>
</template>






<script>

import { required, email } from 'vuelidate/lib/validators' 

export default {
    async asyncData ({ params, store }) {

      const { id } = params
      
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
            url: '',
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
    async created() {

        const { fullPath } = this.$route
        this.url = `https://clasificadoscontacto.com${ fullPath }`

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
.nav-tabs .nav-link {
    border-color: #e9ecef #e9ecef #dee2e6;
}
.amenities ul {
  display: flex;
  list-style: none;
}

.amenities li {
  flex: auto;
}

.amenities span {
  color: #00569d;
  font-size: 35px;
}
.img-agent {
  border-radius: 50% !important;
}
.listings_details_content p {
  font-size: 13px;
}
.property-info img {
  width: 30% !important;
}
.property-info .bg-softcc {
  border-radius: 15px;
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
.texto2 {
  color: #00569d;
}
.detail-section h1 {
  font-size: 30px !important;
  font-weight: 600 !important;
}
.detail-section i {
  color: #f2e21e;
}
.listing_details_top_title h4 {
  font-size: 24px;
  color: #00569d;
  font-weight: 700;
  line-height: 10px;
}
.detail-section h5 {
  font-size: 18px !important;
}
.detail-section p {
  font-size: 15px;
  color: #717580;
}
.listing_details_top_product_list_box::before {
  position: absolute;
  top: 16px;
  left: -30px;
  bottom: 16px;
  content: "";
  width: 1px;
  background: #e0e3eb;
}
.listing_details_top_product_list {
  display: flex !important;
  align-items: center;
}
.listing_details_top_product_list li {
  display: flex;
  align-items: center;
}
.property-info .nav-link{
  font-size: 19px;
}
@media only screen and (max-width: 991px) {
  .listing_details_top_product_list li {
    flex-direction: column;
    text-align: center;
  }
  .listing_details_top_product_list li .text_box p {
    font-size: 12px;
  }
  .listing_details_top_product_list li .text_box h5 {
    font-size: 14px;
  }
  .amenities ul {
    display: inline-block;
  }

  .amenities li {
    flex: inherit;
  }
}

.listing_details_top_product_list li .icon_box {
  height: 54px;
  width: 54px;
  border: 1px solid #e0e3eb;
  border-radius: 50%;
  color: #00569d;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.listing_details_top_product_list li .text_box {
  margin-left: 10px;
  line-height: 0.5 !important;
}
.listing_details_top_product_list li .text_box1 {
  margin-left: 10px;
  line-height: 1.5;
}
.listing_details_top_product_list li + li {
  margin-left: 30px;
}
.share-property span {
  font-size: 23px;
}
.property-info .heading-section h2 {
  font-size: 2rem;
  font-weight: 600;
  position: relative;
}
.descrip{
  font-size: 18px;
}
</style>
