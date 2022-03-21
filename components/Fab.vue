

<template>

  <div>

  	<a :href="`https://wa.me/+52${ this.number }?text=${ text }`" 
      class="fab shadow" target="_blank"> 
    
      <!-- <i class="fab fa-whatsapp"></i> -->
      <i class="fas fa-times"></i>
    </a> 

    <WhatsAppForm />
  </div>


</template>

<script>


export default {

  props: {
      whatsApp: {
          type: String,
          required: true,
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