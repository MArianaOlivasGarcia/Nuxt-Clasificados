<template>
  <div class="container mb-5 mt-5">
        <div class="row centrar">
            <div class="col-md-4 text-center">
                <h5 class="mb-4" style="font-weight: 700; font-size: 1.5rem;">OFICINAS CENTRALES</h5>
                <p><strong>Dirección:</strong> Circuito Alámos 98, Dep. 1 Interior Alámos 2da. Sección. Querétaro, Qro. C.P. 76160</p>
                <p><strong>Teléfono:</strong> 442 223 5803<br>442 195 0982</p>
                <p><strong>Correo:</strong><br>info@clasificadoscontacto.com</p>
                <div style="width: 100%; display: flex; justify-content: center;">
                    <div class="logo-container">
                        <img src="https://clasificadoscontacto.com/_nuxt/img/clasificados-logo-blanco.0c970fd.png" alt="">
                    </div>
                </div>
                
            </div>
            <div class="col-md-8 text-center">
               
               <form class="p-3" v-on:submit.prevent="sendMain">
                   <div class="row mb-3">
                       <span class="col-md-3" style="font-weight: bold; display: flex; align-items: center;">Nombre</span>
                        <div class="col-md-9">
                          <input
                            type="text"
                            placeholder="Nombre"
                            class="form-control"
                            v-model="form.name"
                            @blur="v.form.name.$touch()"
                          />
                        <small>
                            <span v-if=" !v.form.name.required  &&
                                              v.form.name.$dirty"
                                class="text-danger">El nombre es requerido.</span>
                        </small>
                        </div>
                   </div>
                   <div class="row mb-3">
                       <span class="col-md-3" style="font-weight: bold; display: flex; align-items: center;">Teléfono</span>
                        <div class="col-md-9">
                          
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
                   </div>
                   <div class="row mb-3">
                       <span class="col-md-3" style="font-weight: bold; display: flex; align-items: center;">Correo</span>
                        <div class="col-md-9">
                          <input
                            type="email"
                            placeholder="example@example.com"
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
                   </div>
                   <div class="row mb-3">
                       <span class="col-md-3" style="font-weight: bold; display: flex; align-items: center;">Asunto</span>
                        <div class="col-md-9">
                          <select class="form-control">
                              <option value="Asesor inmobiliario">Asesor inmobiliario</option>
                              <option value="Desarrollador">Desarrollador</option>
                              <option value="Agencia inmobiliaria">Agencia inmobiliaria</option>
                              <option value="Vendedor">Vendedor</option>
                          </select>
                        </div>
                   </div>
                   <div class="row mb-3">
                       <span class="col-md-3" style="font-weight: bold; display: flex; align-items: center;">Mensaje</span>
                        <div class="col-md-9">
                          <textarea rows="5" class="form-control" placeholder="Escribe tu mensaje..."
                              v-model="form.message"
                              @blur="v.form.message.$touch()">
                          </textarea>
                          <small>
                              <span v-if=" !v.form.message.required  &&
                                          v.form.message.$dirty"
                                  class="text-danger">El mensaje es requerido.</span>
                          </small>
                        </div>
                   </div>
                   <div class="row mb-3" style="justify-content: end;">
                       <button 
                        :disabled="isLoading" 
                        type="submit"
                        class="btn btn-primary mr-3" style="width: 30%; padding: 10px 0px;">Enviar</button>
                   </div>
               </form>
            </div>
        </div>
    </div>
 
</template>

<script>

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
    methods: {
        async sendMain(){

            if ( this.v.$invalid ) {
                this.v.$touch()
                return 
            } 

            this.isLoading = true


          const success = await this.$store.dispatch('sendMain', this.form)

           if ( !success ){
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: `No se pudo enviar el mensaje.`
            })
           } 

           const { name } = success
    
            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: `${ name }, se ha enviado tu mensaje con éxito.`
            })

            this.isLoading = false

        }
    }
}
</script>

<style scoped>

input.form-control {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.vue-tel-input{
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.logo-container {
    background-color: rgb(19, 93, 163);
    width: 150px;
    height: 150px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 10px;
    border-radius: 100%;
}



</style>