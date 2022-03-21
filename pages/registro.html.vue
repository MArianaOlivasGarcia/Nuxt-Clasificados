<template>

  <div>
              
    <section class="ftco-section signup-section pb-5">
      <div class="container cont">
        <div class="row">
          <div class="col-md-7 mb-3">

            <form class="registration-form text-center"
                v-on:submit.prevent="register">
              <div
              id="registro">
                <div class="mb-2 mt-2 text-center">
                  <h1 class="font-weight-bold">REGÍSTRATE EN</h1>
                  <NuxtLink to="/">
                    <img src="@/static/clasificadoslogo.png" />
                  </NuxtLink>
                </div>

                <div class="form-group  text-left">
                    <input
                    v-model="form.name"
                    @blur="$v.form.name.$touch()"
                    type="text" 
                    class="form-control item pl-4 mb-2 mt-3" 
                    placeholder="Nombre">
                    <small><span class="text-danger"
                     v-if="!$v.form.name.required  && $v.form.name.$dirty">El nombre es requerido.</span></small>
                </div>

                <div class="form-group  text-left">
                  <input 
                    v-model="form.email"
                    @blur="$v.form.email.$touch()"
                    type="text" 
                    class="form-control item pl-4 mb-2 mt-3" 
                    placeholder="Correo electrónico">
                  <small><span 
                    class="text-danger" 
                    v-if=" !$v.form.email.required  && $v.form.email.$dirty">Correo eletrónico es requerido.</span></small>
                  <small><span 
                        class="text-danger"
                        v-if="!$v.form.email.email  && $v.form.email.$dirty">Correo electrónico inválido.</span></small>
                </div>

                <div class="form-group  text-left">
                    <!-- <input  
                        v-model="form.phone"
                        @blur="$v.form.phone.$touch()"
                        type="text" 
                        class="form-control item pl-4 mb-2 mt-3" 
                        placeholder="Número teléfonico"> -->

                        <vue-tel-input
                          class="form-control item pl-4 mb-2 mt-3"
                          v-bind="telProps"
                          v-model="form.phone"
                          @blur="$v.form.phone.$touch()"
                        ></vue-tel-input>

                    <small><span class="text-danger"
                        v-if="!$v.form.phone.required  && $v.form.phone.$dirty">El número teléfonico es requerido.</span></small>
                </div>

               
                <div class="form-group  text-left">
                    <input  
                        v-model="form.password"
                        @blur="$v.form.password.$touch()"
                        type="password" 
                        class="form-control item pl-4 mb-2 mt-3" 
                        placeholder="Contraseña">
                    <small><span class="text-danger"
                    v-if="!$v.form.password.required  && $v.form.password.$dirty">Contraseña es requerida.</span></small>
                </div>

                <div class="form-group  text-left">  
                    <input 
                    v-model="form.company"
                    @blur="$v.form.company.$touch()"
                    type="text" 
                    class="form-control item pl-4 mb-2 mt-3" 
                    placeholder="Nombre del negocio">
                    <small><span class="text-danger"
                    v-if="!$v.form.company.required  && $v.form.company.$dirty">El nobre del negocio es requerido.</span></small>
                </div>
                <div class="form-group">
                  <div v-if="!isLoading">
                    <button 
                        type="submit" 
                        class="form-control btn btn-primary font-weight-bold" 
                        style="font-family:'Poppins;" >CREAR MI CUENTA</button>
                  </div>
                  <div v-else>
                    <button type="submit" 
                            disabled 
                            class="form-control btn btn-primary font-weight-bold" 
                            style="font-family:'Poppins;">
                            <i class="fas fa-spinner"></i> CARGANDO...
                    </button>
                  </div>
                    
                </div>
                <NuxtLink to="/session">¿Ya tienes cuenta?, <span style="color: #01569D;"> Inicia sesión </span> </NuxtLink>
              </div>
         </form>
        </div>
         <div class="col-md-5 mb-3 align-self-center d-none d-sm-none d-md-block">
           
           <img src="@/static/images/examples/girl-account.png" alt="sing up image">
                        
            </div>
      </div>
      </div>
    </section>
  </div>
    
</template>




<script>

import { required, email } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2'

export default {
    head: {
      titleTemplate: 'Clasificados Contacto | Registrate',
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                phone: '',
                company: ''
            },
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
    validations: {
        form: {
            name: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required
            },
            phone: {
                required
            },
            company: {
                required
            }
        },
    },
    methods: {
        async register() {
            
            if ( this.$v.$invalid ) {
                this.$v.$touch()
                return 
            }

            this.isLoading = true;

            const { folio, message }  = await this.$store.dispatch('register', this.form)
            
            if ( folio == '0' ) {
                this.isLoading = false

                const { isConfirmed } = await Swal.fire({
                    title: 'El usuario ya está registrado.',
                    text: '¿Desea recuperar sus datos de acceso?',
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#043A68',
                    confirmButtonText: 'Si!',
                    cancelButtonText: 'No, cancelar!',
                    showCloseButton: true,
                })
                

                if ( isConfirmed ) {
                    this.$router.push('/forgotpassword');
                }
                

                return
            }

            this.$router.push('/success');
            this.isLoading = false;


        }
    }
}
</script>