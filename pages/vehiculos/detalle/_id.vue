<template>  
    <client-only v-if="!isLoading">    
<h1>Hola</h1>
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
        const vehiculo = await store.dispatch('getVehiculoById', id)

        return {
            vehiculo,
        }
      } catch (error) {
        // Redirect to error page or 404 depending on server response
      }
    },
    // head() {

    //   if ( !this.property ) {
    //     return {
    //       title: 'Clasificados contacto | El buscador'
    //     }
    //   }
    //   const { title, description, image } = this.property.meta

    //   return {
    //     title: title,
    //     meta: [
    //       { hid:'description', name:'description', content: description},
    //       { hid: 'og-title', property: 'og:title', content: title },
    //       { hid: 'og-description', property: 'og:description', content: description },
    //       { hid: 'og-image', property: 'og:image', content: image }
    //     ] 
    //   } 
    // },
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

        console.log(this.vehiculo)
        // const { fullPath } = this.$route
        // this.url = `https://clasificadoscontacto.com${ fullPath }`


        // for (const property in this.property.images) {
        //   this.images.push(this.property.images[property]['largefile'])
        // } 

    },
    mounted(){
      // if ( this.property ){
      //   console.log(this.property)
      //   this.isLoading = false
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