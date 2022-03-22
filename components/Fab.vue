

<template>

  <div>

  	<!-- <a :href="`https://wa.me/+52${ this.number }?text=${ text }`" 
      class="fab shadow" target="_blank">  -->
    <button type="button" @click="openWhatsForm()" class="fab shadow" >
      <i v-if="!showWhatsForm" class="fab fa-whatsapp"></i>
      <i style="font-size: 18px !important" v-else class="fas fa-times"></i>
    </button>
    <!-- </a>  -->

    <WhatsAppForm 
      v-if="showWhatsForm"
      :whatsForm="whatsForm"
      :whatsappNumber="number"
      :v="v"/>
  </div>


</template>

<script>
import { mapGetters } from 'vuex';


export default {

  props: {
      whatsApp: {
          type: String,
          required: true,
      },
      whatsForm: {
            type: Object,
            required: true
      },
      v: {
          type: Object,
          required: true
      }
    },
  data() {
    return {
      text: '',
      number: ''
    }
  },
  created() {
    this.number = this.whatsApp.replace('(', '')
                             .replace(' ', '')
                             .replace(')', '')
                             .replace('-', '');
    this.text = `Me gustaría tener más información sobre esta propiedad. https://clasificadoscontacto.com${this.$route.path}` ;
  },
  computed: {
    ...mapGetters({ showWhatsForm: 'getShowWhatsForm' })
  },
  methods: {
    openWhatsForm() {
      this.$store.commit('setShowWhatsForm', !this.showWhatsForm)
    }
  }

}
</script>



<style scoped>

.fab {
  position:fixed;
  width:60px;
  height:60px;
  bottom:20px;
  right:20px;
  background-color:#25d366;
  border-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
  display: flex;
  justify-content: center;
  align-items: center;
}

i {
      font-size: 35px !important;
}

</style>