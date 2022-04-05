


<template>
  <div class="adviser-container animate__animated animate__fadeInUp animate__faster p-3">

      <div style="text-align: end;">
        <span @click="close()"><i class="fas fa-times"></i></span>
      </div>

        <div class="mt-2">
            <h4 class="m-0">Completa tus datos</h4>
            <p class="mt-2">Te comunicaremos con <span style="font-weight: bold;">{{whatsContactValues.nameInmo.trim() }}</span>, tu asesor inmobiliario.</p>
        </div> 

        <form v-on:submit.prevent="startChat">
        
       <div class="form-group  m-0">
            <label class="strong">Nombre<span class="text-danger">*</span></label>
            <input class="form-control"  
                placeholder="Nombre completo"
                v-model="whatsForm.name"
                @blur="v.whatsForm.name.$touch()"/>
            <small>
                <span v-if="!v.whatsForm.name.required  && v.whatsForm.name.$dirty"
                class="text-danger">Tu nombre es requerido.</span>
            </small>
        </div>


        <div class="form-group  m-0">
            <label class="strong">Whatsapp<span class="text-danger">*</span></label>
            <vue-tel-input
                  class="form-control"
                  v-bind="telProps"
                  v-model="whatsForm.whatsapp"
                @blur="v.whatsForm.whatsapp.$touch()"
                ></vue-tel-input>
            <small>
                <span v-if="!v.whatsForm.whatsapp.required  && v.whatsForm.whatsapp.$dirty"
                class="text-danger">Tu número telefónico es requerido.</span>
            </small>
        </div>


         <div class="form-group  m-0">
            <label class="strong">Correo electrónico</label>
            <input class="form-control"  
                type="email"
                placeholder="ejemplo@ejemplo.com"
                v-model="whatsForm.email"/>
        </div>
 

        <div class="form-group  m-0">
            <label class="strong">Mensaje<span class="text-danger">*</span></label>
            <textarea class="form-control"  
                rows="2"
                placeholder="Escribe tu mensaje aquí"
                v-model="whatsForm.message"
                @blur="v.whatsForm.message.$touch()"></textarea>
            <small>
                <span v-if="!v.whatsForm.message.required  && v.whatsForm.message.$dirty"
                class="text-danger">Tu mensaje es requerido.</span>
            </small>
        </div>


        <div class="mt-3">
            <button type="submit" class="btn btn-primary">Iniciar Chat</button>
        </div>

        </form> 
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex';

export default {
    props: {
       v: {
            type: Object,
            required: true
        },
        whatsForm: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            telProps: {
                id: "phoneContact",
                mode: "international",
                defaultCountry: "MX",
                disabledFetchingCountry: false,
                disabled: false,
                disabledFormatting: true,
                inputOptions: {
                    placeholder: "(999)-999-9999",
                },
                required: false,
                enabledCountryCode: true,
                enabledFlags: true,
                preferredCountries: ["MX"],
                onlyCountries: [],
                ignoredCountries: [],
                autocomplete: "off",
                name: "telephone",
                maxLen: 18,
                inputClasses: "form-control",
            }

        }
    },
    created() {
    },
    methods: {
        async startChat() {
            if( this.v.whatsForm.$invalid ) {
                this.v.whatsForm.$touch()
                return
            }

            const { propertyId, whatsappInmo } = this.whatsContactValues


            const data = {
                ...this.whatsForm,
                productId: propertyId
            }


            const resp = await this.$store.dispatch('sendToWhatsApp', data)
            
            if ( !resp ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Ocurrio un error. Por favor inténtalo más tarde.'
                })
                return;
            } 

            window.open(`https://wa.me/+52${ whatsappInmo }?text=${ this.whatsForm.message  } - https://clasificadoscontacto.com${this.$route.path}`, '_blank');
        },
        close() {
            this.$store.commit('setShowWhatsForm', false)
        }
    },
    computed: {
      ...mapGetters({ whatsContactValues: 'getWhatsContactValues'}),
    },
    
}
</script>

<style scoped>

.adviser-container {
    z-index: 99;
    position: fixed;
    bottom: 5%;
    right: 3%;
    width: 25% !important;
    margin: 0px;
    background: #EAF0F5;
    border-radius: 20px;
    padding-top: 2px !important;
    box-shadow: rgba(0, 0, 0, 0.09) 2.4px 2.4px 3.2px !important; 
}

p {
    line-height: 1.3;
    font-size: 12px;
    color: #425b76;
    font-weight: 500;
}

.asesor {
    display: flex;
    align-items: end;
}

.fist-message {
   display: flex; 
}

.second-message {
   margin-top: 9px;
}


img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 55px;
    left: -50px;
}

.message {
    background-color: #EAF0F5;
    padding: 10px;
    border-radius: 20px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.09) 2.4px 2.4px 3.2px;
}


button.btn-primary, 
button.btn-primary:hover {
    background-color: #23D366 !important;
    border-color: #23D366 !important;
    color: white;
    padding: 10px;
    width: 100% !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
}


button.btn-primary:hover {
    background-color: #25c45f !important;
    background-color: #25c45f !important;
}

span i {
    cursor: pointer;
}

h4 {
    font-size: 18px !important;
}


input.form-control, .vue-tel-input{
    height: 30px !important;
    border: none !important;
    font-size: 14px !important;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;
}


textarea.form-control{
    border: none !important;
    font-size: 14px !important;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;
}

span {
    font-size: 12px !important;
}


label {
    font-size: 14px !important;
}

</style>