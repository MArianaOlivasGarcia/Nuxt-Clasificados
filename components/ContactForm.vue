<template>
  <form
    v-on:submit.prevent="sendMain"
    role="form"
    class="p-1 contact-form mt-0 mb-5 justify-content-center" >
    <div class="row form-group">
      <div class="col-md-12 mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="form.name"
          @blur="v.form.name.$touch()"
        />
        <small>
            <span v-if=" !v.form.name.required  &&
                              v.form.name.$dirty"
                class="text-danger">El nombre es requerido.</span>
        </small>
      </div>

      <div
        class="col-md-12 mb-3"
      >
        <input
          type="email"
          placeholder="Correo electrónico"
          class="form-control"
          v-model="form.email"
          @blur="v.form.email.$touch()"
        />
        <small>
            <span v-if=" !v.form.email.required  &&
                              v.form.email.$dirty"
                class="text-danger">El correo electrónico es requerido.</span>
        </small>
        <small>
            <span v-if=" !v.form.email.email  &&
                              v.form.email.$dirty"
                class="text-danger">Correo electrónico inválido.</span>
        </small>
      </div>


      <div
        class="col-md-12 mb-3"
      >

       <vue-tel-input
          class="form-control"
          v-bind="telProps"
          v-model="form.phone"
          @blur="v.form.phone.$touch()"
        ></vue-tel-input>

        <small>
            <span v-if=" !v.form.phone.required  &&
                        v.form.phone.$dirty"
                class="text-danger">El número teléfonico es requerido.</span>
        </small>
      </div>

      <div
        class="col-md-12 mb-5"
      >
        <textarea
          cols="30"
          rows="5"
          class="form-control"
          placeholder="Mensaje"
          v-model="form.message"
          @blur="v.form.message.$touch()"
        ></textarea>
        <small>
            <span v-if=" !v.form.message.required  &&
                        v.form.message.$dirty"
                class="text-danger">El mensaje es requerido.</span>
        </small>
      </div>

      <div class="col-md-12">
        <button
          type="submit"
          class="btn btn-primary py-3 px-5 mb-2"
          :disabled="isLoading">
          Enviar
        </button>
        <!-- <div >
          <Loader />
        </div> -->
      </div>
    </div>
    <div class="text-center">
      Este sitio está protegido por reCAPTCHA y Google
      <a href="https://policies.google.com/privacy">Política de privacidad</a>
      y Se aplican
      <a href="https://policies.google.com/terms">Términos de servicio</a>
      .
    </div>
  </form>
</template>



<script>

import Swal from 'sweetalert2'


export default {
    props: {
        form: {
            type: Object,
            required: true
        },
        v: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            isLoading: false,
            telProps: {
                id: "phoneContact",
                mode: "international",
                defaultCountry: "MX",
                disabledFetchingCountry: false,
                disabled: false,
                disabledFormatting: true,
                inputOptions: {
                    placeholder: "9999-9999-999",
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
            },
        }
    },
    methods: {
        async sendMain(){

            if ( this.v.$invalid ) {
                this.v.$touch()
                return 
            } 

            this.isLoading = true


            const { name } = await this.$store.dispatch('sendMain', this.form)

    
            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: `${ name }, se ha enviado tu mensaje con éxito.`
            })

            this.isLoading = false

        }
    },
}
</script>




<style scoped>
input {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}
textarea {
  display: inline-block;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.vti__dropdown {
  outline: none !important;
}

.vti__input:focus {
  border-color: #1f3c88 !important;
}

.form-group label {
  font-weight: 400;
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.1rem;
  line-height: 1.7;
}
.vue-tel-input {
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.logo {
  display: inline-block;
  max-width: 10%;
  margin-top: auto;
}

.logo img {
  margin-top: 40%;
  margin-left: -10px;
  max-width: 20px;
  max-height: 30px;
}

.sin-logo {
  display: none;
}

.btn-primary {
  padding: 12px 46px !important;
}
sup {
  color: #ff0303;
}
</style>
