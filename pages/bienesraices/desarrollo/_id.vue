<template>  

  <div class="container mt-4 mb-4" style="background-color: #fff; padding: 1.25rem;">

    <Fab 
      v-if="property && property.user.cellphone" 
      :whatsApp="property.user.cellphone" 
      :folioProperty="property.folio"
      :whatsForm="whatsForm"
      :v="$v"/>

    <div class="row">


      <div class="col-md-8">
        <div v-if="property.outstanding == '1'" style="text-align: end;">
          <span style="font-size: 18px; border: 1px solid black; padding: 2px; border-radius: 10px;">DESCATADO <i class="fa-regular fa-star" style="color: #E7B211;"></i></span>
        </div>
        <h1>{{ property.name }}</h1>
        <p class="card-text text-muted">{{ property.colonia }}, {{ property.municipio }}, {{ property.state }}</p>
        <h4 class="price" v-if="property.precmin">Desde $ {{ Number(property.precmin).toLocaleString()  }} {{ property.currency }}</h4>
        <h4 class="price" v-if="!property.precmin">Consultar el precio</h4>
      </div>

      <div class="col-md-4">
        <div class="text-center"><span style="font-weight: bold;">Compartir</span></div>
            <div class="d-flex justify-content-center mt-2">
              <a class="social" :href="`http://www.facebook.com/sharer.php?u=${ url }&t=${ property.description }`" target="_blank"><i class="fab fa-facebook"></i></a>
              <a class="social" :href="`https://twitter.com/intent/tweet?url=${ url }&text=${ property.description }`" target="_blank"><i class="fab fa-twitter"></i></a>
              <a class="social" :href="`https://api.whatsapp.com/send?text=${ property.description } ${url}`" target="_blank"><i class="fab fa-whatsapp"></i></a>
            </div>

      </div>
    

    </div>

    <div class="row mt-3">

      <div class="col-12">
        <GalleryHorizontal :items="images"/>
      </div>

    </div>



    <div class="row mt-5">



      <div class="col-md-7">

        <div class="mb-2">
          <p>Desde: </p>
          <span v-if="property.roomsmin > 0"><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>{{ property.roomsmin }}</span>
          <span v-if="property.bathroomsmin > 0"><i class="icon-bath pl-2 pr-1"></i>{{ property.bathroomsmin }}</span>
          <span v-if="property.m2cmin > 0"><i class="icon-ruler pl-2 pr-1"></i>{{ property.m2cmin }} m<sup>2</sup></span>
          <span v-if="property.m2lotmin > 0"><i class="icon-text  pl-2 pr-1"></i>{{ property.m2lotmin }} m<sup>2</sup></span>
        </div>


        <div class="mb-3">
          <p>Hasta: </p>
          <span v-if="property.roomsmax > 0"><i class="icon-big-bed-with-one-pillow pl-2 pr-1"></i>{{ property.roomsmax }}</span>
          <span v-if="property.bathroomsmax > 0"><i class="icon-bath pl-2 pr-1"></i>{{ property.bathroomsmax }}</span>
          <span v-if="property.m2cmax > 0"><i class="icon-ruler pl-2 pr-1"></i>{{ property.m2cmax }} m<sup>2</sup></span>
          <span v-if="property.m2lotmax > 0"><i class="icon-text  pl-2 pr-1"></i>{{ property.m2lotmax }} m<sup>2</sup></span>
        </div>

        <div class="mb-3">
          <span style="font-weight: bold;">Descripción</span>
          <div class="mt-3" style="font-size: 14px; text-align: justify; line-height:normal;" v-html="property.descriptionlong"></div>
        </div>


        <div class="amenities mb-3">
          <span style="font-weight: bold; color: black; font-size: 16px;">Amenidades</span>
          
              <h2>Interiores</h2>
              <div class="row">

                  <div v-for="i in interiors" :key="i" class="col-6 col-md-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <span :class="i == 'Amueblado' 
                        ? 'icon-armchair'
                        : i == 'Aire_acondicionado'
                        ? 'icon-air-conditioner'
                        : i == 'Mini_split'
                        ? 'icon-aire'
                        : i == 'Sala'
                        ? 'icon-living-room'
                        : i == 'Cuarto_con_television'
                        ? 'icon-television'
                        : i == 'Cuarto_de_lavado'
                        ? 'icon-washing-machine'
                        : i == 'Cocina'
                        ? 'icon-kitchen'
                        : i == 'Casa_inteligente'
                        ? 'icon-smart-home'
                        : i == 'Lavadero'
                        ? 'icon-washing-machine'
                        : i == 'Comedor'
                        ? 'icon-mesa'
                        : i == 'Lavavajillas'
                        ? 'icon-lavavajillas'
                        : i == 'Ventilacion'
                        ? 'icon-ventilacion'
                        : i == 'Estacionamiento_interior'
                        ? 'icon-garage'
                        : 'icon-air-conditioner' "></span>
                      <p><small>{{i.replace(/_/g, ' ')}}</small></p>
                    </div>
                  </div>


                    
                  <!--   <li v-if="property.amenities?.interior[13]?.Elevador" >
                      <div class="listings_details_icon">
                        <span class="ico-elevador"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Elevador</p>
                      </div>
                    </li>

                  <li v-if="property.amenities.interior[14]['Mascotas permitidas']" >
                      <div class="listings_details_icon">
                        <span class="ico-mascotas"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Mascotas permitidas</p>
                      </div>
                    </li>

                    <li v-if="property.amenities.interior[15]['Jacuzzi']" >
                      <div class="listings_details_icon">
                        <span class="ico-jacuzzi"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Jacuzzi</p>
                      </div>
                    </li>

                    <li v-if="property.amenities.interior[16]['Chimenea']" >
                      <div class="listings_details_icon">
                        <span class="ico-chimenea"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Chimenea</p>
                      </div>
                    </li>-->

                  
              </div>  


              <h2>Exteriores</h2>
                <div class="row">

                  <div v-for="e in exteriors" :key="e" class="col-6 col-md-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <span :class="e == 'Balcon' 
                        ? 'icon-balcon'
                        : e == 'Terraza' 
                        ? 'icon-terraza'
                        : e == 'Jardin' 
                        ? 'icon-jardin'
                        : e == 'Piscina' 
                        ? 'icon-piscina'
                        : e == 'Ascensor' 
                        ? 'icon-elevator'
                        : e == 'Cajon_Exterior' 
                        ? 'icon-persianas'
                        : e == 'BBq' 
                        ? 'icon-grill'
                        : e == 'Bar' 
                        ? 'icon-cocktail'
                        : e == 'Gym' 
                        ? 'icon-weightlifter'
                        : e == 'Muelle' 
                        ? 'icon-muelle'
                        : e == 'Cortina_anticiclonica' 
                        ? 'icon-cyclone'
                        : e == 'Zona_de_maniobras' 
                        ? 'icon-trasvolar'
                        : e == 'Area_de_descargo' 
                        ? 'icon-discharge'
                        :  e == 'Stand' 
                        ? 'icon-food-stand'
                        :  e == 'Cortina_de_metal' 
                        ? 'icon-blinds'
                        :  e == 'Congelador' 
                        ? 'icon-freezer'
                        :  e == 'Estacionamiento_exterior' 
                        ? 'icon-parking-area'
                        :  e == 'Cisterna' 
                        ? 'icon-water-tank'
                        : 'icon-balcon'"></span>
                      <p><small>{{e.replace(/_/g, ' ')}}</small></p>
                    </div>
                  </div>

              </div>  


                 
            
                    <!-- 
                    <li v-if="property.amenities.exterior[18].Garaje">
                      <div class="listings_details_icon">
                        <span class="ico-garaje"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Garaje</p>
                      </div>
                    </li>


                    <li v-if="property.amenities.exterior[19].Parrilla">
                      <div class="listings_details_icon">
                        <span class="ico-parrilla"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Parrilla</p>
                      </div>
                    </li>


                    <li v-if="property.amenities.exterior[20]['Cancha de tenis']">
                      <div class="listings_details_icon">
                        <span class="ico-tenis"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Cancha de tenis</p>
                      </div>
                    </li>

                    <li v-if="property.amenities.exterior[21]['Patio']">
                      <div class="listings_details_icon">
                        <span class="ico-patio"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Patio</p>
                      </div>
                    </li>


                    <li v-if="property.amenities.exterior[22]['Cisterna']">
                      <div class="listings_details_icon">
                        <span class="icon-water-tank"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Cisterna</p>
                      </div>
                    </li>

                    <li v-if="property.amenities.exterior[23]['Vista al mar']">
                      <div class="listings_details_icon">
                        <span class="ico-vista-mar"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Vista al mar</p>
                      </div>
                    </li>



                    <li v-if="property.amenities.exterior[24]['Frente a la playa']">
                      <div class="listings_details_icon">
                        <span class="ico-frente-playa"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Frente a la playa</p>
                      </div>
                    </li>

                    <li v-if="property.amenities.exterior[24]['Acceso a la playa']">
                      <div class="listings_details_icon">
                        <span class="ico-entrada-playa"></span>
                      </div>
                      <div class="listings_details_content">
                        <p>Acceso a la playa</p>
                      </div>
                    </li> -->

        </div>


        <div>
          <span style="font-weight: bold;">Ubicación</span>
          <client-only>

            <GoogleMap 
              style="width: 100%; height: 450px" 
              :mapLat="property.latitude" 
              :mapLng="property.longitude" 
              :draggable="false"
              :scaleControl="false"/>
          </client-only>
        </div>


      </div>



      <div class="col-md-5">
        <div class="text-center">
            <div style="justify-content: center; display: flex; align-items: center;">
              <img class="logo-crediteka" src="https://www.crediteka.com/img/logo_color.png" alt="Logo Crediteka">
              <p style="font-weight: 500; font-size: 18px;">¿Te interesa esta propiedad?</p>
            </div>
            <a href="https://crediteka.com/precalificate" target="__blank" class="btn btn-credi">Crédito pre autorizado</a>
          </div>

          <div class="contact-form" >
          
            <div class="text-center">
              <img
                v-if="property.user.image && property.user.image == '0'"
                class="img-inmo"
                src="@/static/images/property-placeholder.jpeg"
              />
              <img
                v-if="property.user.image && property.user.image != '0'"
                class="img-inmo"
                :src="property.user.image"
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
                :productid="property.folio"
                :category="1" />
            </div>

          </div>


          <div class="mt-3" v-if="property.prototipos.length > 0">

            <div class="protContainer">

              <p style="font-weight: bold; color: grey;">En venta / <span style="color: black;">{{ property.prototipos.length }} unidades</span></p>

              <div  href="" class="card protoCard mb-2" v-for="p in property.prototipos" :key="p.prototypeid">
                <PropCardMini :p="p"/>
              </div>  

            </div>


          </div>


      </div>

    </div>



    <div class="row mt-5">
      
      <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
        <h2 class="mb-4 subtitle">MÁS DESARROLLOS COMO ESTE</h2>
      </div>

      <div class="col-12 px-5">

        <h6 v-if="property.prototipos.length == 0" class="text-center mb-5">No hay más desarrollos como este por el momento.</h6>

          <VueHorizontalList v-else
                :items="property.prototipos"
                :options="options"
                >
                <template v-slot:default="{item}">
                  <ProductCardSlider :item={...item} />
                </template>
          </VueHorizontalList>

      </div>

    </div>


  </div>
 
</template> 




<script>

import { required, email } from 'vuelidate/lib/validators'
import GalleryHorizontal from '~/components/GalleryHorizontal.vue' 
import VueHorizontalList from 'vue-horizontal-list'

export default {

async asyncData({ params, store, redirect}) {
    const rutaCortada = params.id.split("_");
    const id = rutaCortada[rutaCortada.length - 1].split(".")[0];
    
    let property = {};
    let similares = [];
  
    try {

        
        property = await store.dispatch("getDevById", id);
        // similares = await store.dispatch("getPropertiesSimilares", { folio: id });


        if ( property.descriptionlong ) {
          property.descriptionlong = property.descriptionlong
            // .replace(/\r\n\r\n/g, '<br><br>')
            .replace(/\r\n/g, '<br>');
        }


        return {
            property,
            similares
        };
    }
    catch (error) {
        // Redirect to error page or 404 depending on server response
      redirect('/not-found.html')

    }
},
head() {
    if (!this.property) {
        return {
            title: "Clasificados contacto | El buscador"
        };
    }
    const { name, descriptionlong, image } = this.property.meta;
    const { keywords } = this.property;

    return {
        title: name,
        meta: [
            { hid: "description", name: "description", content: descriptionlong },
            { hid: "og-title", property: "og:title", content: name },
            { hid: "og-description", property: "og:description", content: descriptionlong },
            { hid: "og-image", property: "og:image", content: image },
            { name: "keywords", content: keywords ? keywords : 'propiedad' },

        ]
    };
},
data() {
    return {
        form: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        whatsForm: {
            name: "",
            whatsapp: "",
            message: "",
            email: "",
        },
        url: "",
        images: [],


        interiors: [],
        exteriors: [],

        options: {
            responsive: [
            { end: 576, size: 1 },
            { start: 576, end: 768, size: 2 },
            { start: 768, end: 992, size: 3 },
            { size: 4 },
            ],
            list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,

            // Because: #app {padding: 80px 24px;}
            padding: 24,
            },
            position: {
              start: 0,
            },
            autoplay: { play: false, repeat: false, speed: 2500 },
      },
        
    };
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

created() {

  console.log(this.property)
  const { fullPath } = this.$route;
    this.url = `https://clasificadoscontacto.com${fullPath}`;
    for (const property in this.property.images) {
      this.images.push('https://clasificadoscontacto.com' + this.property.images[property]['image']);
    }

    // Amenidades
    this.property.amenities.interior.forEach( i => {
      if ( i[Object.keys(i)] == 1 ) {
        this.interiors.push(Object.keys(i).toString())
      }
    })

    this.property.amenities.exterior.forEach( i => {
      if ( i[Object.keys(i)] == 1 ) {
        this.exteriors.push(Object.keys(i).toString())
      }
    })


},

components: { GalleryHorizontal, VueHorizontalList },

}
</script>




<style scoped>

@media (max-width: 991px) { 
  .container {
    padding: 10px;
    max-width: 95%;
  }
}

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

h2.subtitle {
  font-size: 24px;
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
/* justify-content: space-between; */
}

div.galleryHorizonGalleryHoriHorizontal-content {
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




.amenities span {
  font-size: 20px;
  color: #00569d;
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


.isFixed {
  position: fixed;
  bottom: 0;
  margin-right: 165px;
  margin-bottom: 15px;
  z-index: 9 !important;
}

.protoImage {
  width: 100% !important;
}

.protoCard p, .protoCard span,  .protoCard i{
  font-size: 14px;
}

.protContainer {
  border: 1px solid #e3e6e7;
  padding: 10px 10px;
}

</style>