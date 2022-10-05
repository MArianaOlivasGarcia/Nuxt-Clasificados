<template>  

      <div class="container mt-4 mb-4" style="background-color: #fff; padding: 1.25rem;">

        <Fab 
          v-if="vehiculo.user.cellphone" 
          :whatsApp="vehiculo.user.cellphone" 
          :folioProperty="vehiculo.folio"
          :whatsForm="whatsForm"
          :v="$v"/>

        <div class="row">

          <!-- <div class="col-md-7 gallery-content ">
            <lightbox :cells="4" :items="images"></lightbox>
          </div> -->

          <div class="col-md-7">
            <Gallery :items="images"/>
          </div>


          <div class="col-md-5 data-container">
            
            <div>
              <h1>{{ vehiculo.productName }}</h1>
              <p class="card-text text-muted">{{ vehiculo.city }}, {{ vehiculo.state }}</p>
              <h4 class="price" v-if="vehiculo.price">$ {{ Number(vehiculo.price).toLocaleString()  }} {{ vehiculo.currency }}</h4>
              <h5 v-if="!vehiculo.price" class="card-title pricecard m-0">Consultar el precio</h5>

              <!-- <div class="postcard-bar"></div> -->
              <div class="text-center m-3">
                  <span v-if="vehiculo.usename"><i class="fas fa-car pl-2 pr-1"></i>{{ Number(vehiculo.usename.split(' ')[0]).toLocaleString() }} {{ vehiculo.usename.split(' ')[1] }}</span>
                  <br>
                  <span style="font-size: 18px;"><strong style="color: #00569d;">Año:</strong> {{ vehiculo.year }}</span>
              </div>
            </div>

            <div>
                <div class="text-center"><span style="font-weight: bold;">Compartir</span></div>
                <div class="d-flex justify-content-center mt-2">
                  <a class="social" :href="`http://www.facebook.com/sharer.php?u=${ url }&t=${ vehiculo.description }`" target="_blank"><i class="fab fa-facebook"></i></a>
                  <a class="social" :href="`https://twitter.com/intent/tweet?url=${ url }&text=${ vehiculo.description }`" target="_blank"><i class="fab fa-twitter"></i></a>
                  <a class="social" :href="`https://api.whatsapp.com/send?text=${ vehiculo.description } ${url}`" target="_blank"><i class="fab fa-whatsapp"></i></a>
                </div>
              </div>

            <!-- <div>
              <span style="font-weight: bold;">Ubicación</span>
              <GoogleMap 
                style="width: 100%; height: 250px" 
                :mapLat="vehiculo.latitude" 
                :mapLng="vehiculo.longitude" 
                :draggable="false"
                :scaleControl="false"/>
            </div> -->
          </div>

        </div>

        <div class="row mt-5">


          <div class="col-md-7">


            <div class="row">
              <div class="col">
                <h5 style="font-weight: bold;">Descripción</h5>
                <div class="postcard-bar"></div>

                <div style="font-size: 14px; text-align: justify; line-height:normal;" v-html="vehiculo.descriptionlong"></div>
              </div>
            </div>

             
             
             <div class="row mt-3">
              <div class="col">
                <h5 style="font-weight: bold;">Ficha Técnica</h5>
                <div class="postcard-bar"></div>


                <div class="row mt-3">


                  <div v-if="vehiculo.folio" class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Publicación</small>
                      <span># {{ vehiculo.folio }}</span>
                    </p>
                  </div>

                  <div v-if="vehiculo.marca" class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Marca</small>
                      <span>{{ vehiculo.marca }}</span>
                    </p>
                  </div>

                  <div v-if="vehiculo.modelo" class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Modelo</small>
                      <span>{{ vehiculo.modelo }}</span>
                    </p>
                  </div>


                </div>

                <div class="row mt-3">


                  <div v-if="vehiculo.tipo" class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Tipo</small>
                      <span>{{ vehiculo.tipo }}</span>
                    </p>
                  </div>

                  <div v-if="vehiculo.usename" class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Recorrido</small>
                      <span>{{  vehiculo.usename ? Number(vehiculo.usename.split(' ')[0]).toLocaleString() +' ' + vehiculo.usename.split(' ')[1] : 0 + ' km' }}</span>
                    </p>
                  </div>

                  <div v-if="vehiculo.ac" class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>A/C</small>
                      <span>{{ vehiculo.ac }}</span>
                    </p>
                  </div>


                </div>



                <div class="row mt-3">


                  <div v-if="vehiculo.traction" class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Tracción</small>
                      <span>{{ vehiculo.traction }}</span>
                    </p>
                  </div>

                  <div v-if="vehiculo.glasses" class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Vidrios</small>
                      <span>{{ vehiculo.glasses }}</span>
                    </p>
                  </div>

                  <div  v-if="vehiculo.transmission"  class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Transmisión</small>
                      <span>{{ vehiculo.transmission }}</span>
                    </p>
                  </div>


                </div>



                <div class="row mt-3">


                  <div  v-if="vehiculo.motor"  class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Motor</small>
                      <span>{{ vehiculo.motor }}</span>
                    </p>
                  </div>

                  <div  v-if="vehiculo.interior"  class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Interiores</small>
                      <span>{{ vehiculo.interior }}</span>
                    </p>
                  </div>

                  <div  v-if="vehiculo.fuel"  class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Combustible</small>
                      <span>{{ vehiculo.fuel }}</span>
                    </p>
                  </div>


                </div>




                <div class="row mt-3">


                  <div  v-if="vehiculo.direction"  class="col-md-4 d-flex align-items-center">
                    <i class="fas fa-angle-right mr-2"></i>
                    <p class="m-0 d-flex" style="flex-direction: column;">
                      <small>Dirección</small>
                      <span>{{ vehiculo.direction }}</span>
                    </p>
                  </div>

                

                </div>





              </div>
            </div>


            <!-- <div class="row mt-3">
              <div class="col">
                <h5 style="font-weight: bold;">Equipamiento</h5>
                <div class="postcard-bar"></div>


                

              </div>
            </div> -->


            
          </div>


          <div class="col-md-5">

            

            <div class="contact-form">
              
              
                <div class="text-center">

                  <img
                    v-if="vehiculo.user.image && vehiculo.user.image == '0'"
                    class="img-inmo"
                    src="@/static/images/auto-placeholder.jpeg"
                  />
                  <img
                    v-if="vehiculo.user.image && vehiculo.user.image != '0'"
                    class="img-inmo"
                    :src="vehiculo.user.image"
                  />

                 
                  <p class="ml-2 pt-3 font-weight-bold text-left mb-1">
                    {{vehiculo.user.name}} {{vehiculo.user.lastname}}
                  </p>
                  <p class="mb-0 pt-2 ml-2 text-left"><i class="icon-phone"></i> {{vehiculo.user.cellphone}}</p>
                  <p class="mb-0 pt-2 ml-2 text-left"><i class="icon-mail-envelope-closed"></i> {{vehiculo.user.email}}</p>
                
                </div>

                <div class="rounded">
                  <ContactForm 
                    :v="$v" 
                    :form="form"
                    :productid="vehiculo.folio"
                    :category="2"/>
                </div>



            </div>
          </div>
        </div>

      </div>
</template> 




<script>

import { required, email } from 'vuelidate/lib/validators' 

export default {
    async asyncData ({ params, store }) {

      const rutaCortada = params.id.split('_')
      const id = rutaCortada[ rutaCortada.length - 1 ].split('.')[0]
      console.log('ID:', id)
      // fetch data from API
      try {
        const vehiculo = await store.dispatch('getVehiculoById', id)

        let images = [];
        for (const v in vehiculo.images) {
          images.push(vehiculo.images[v]['largefile'])
        } 


        return {
            vehiculo,
            images
        }
      } catch (error) {
        // Redirect to error page or 404 depending on server response
      }
    },
    head() {

      if ( !this.vehiculo ) {
        return {
          title: 'Clasificados contacto | El buscador'
        }
      }
      const { title, description, image } = this.vehiculo.meta

      return {
        title: title,
        meta: [
          { hid:'description', name:'description', content: description},
          { hid: 'og-title', vehiculo: 'og:title', content: title },
          { hid: 'og-description', vehiculo: 'og:description', content: description },
          { hid: 'og-image', vehiculo: 'og:image', content: image }
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
            // images: [],
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

        console.log('VEHCIULO:' ,this.vehiculo)
        const { fullPath } = this.$route
        this.url = `https://clasificadoscontacto.com${ fullPath }`
        console.log(this.url)

        

    },
    mounted(){
      // if ( this.vehiculo ){
      //   this.isLoading = false
        
      //   for (const vehiculo in this.vehiculo.images) {
      //     this.images.push(this.vehiculo.images[vehiculo]['largefile'])
      //   } 
      // }

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


  h5 {
    color: #00569d;
    font-size: 18px;
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