<template>
  <div>
    <section class="ftco-section ForgotP pb-5 pt-5 mt-5 mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 mb-3">
            <div class="card text-center m-2 pl-4 pr-4 pb-4">
              <div class="justify-content-center check animated bounceIn">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x icn-background"></i>
                  <i class="fas fa-key fa-stack-1x text-white"></i>
                </span>
              </div>
              <h1 class="font-weight-bold animated zoomIn">
                ¿OLVIDASTE TU CONTRASEÑA?
              </h1>
              <form  v-on:submit.prevent="goToEmailSend" >
                <div class="form-group text-left">
                  <label class="text-left"
                    >Ingresa tu e-mail y recibirás las instrucciones para
                    recuperarla:</label
                  >
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    placeholder="E-mail"
                    v-model="form.email"
                    @blur="$v.form.email.$touch()"
                  />
                  <small><span
                      v-if="
                        !$v.form.email.required &&
                        $v.form.email.$dirty"
                      class="text-danger">El correo electrónico es requerido.
                    </span></small>

                <small><span
                      v-if="
                        !$v.form.email.email &&
                        $v.form.email.$dirty"
                      class="text-danger">Correo electrónico inválido.
                    </span></small>

                </div>
                <button
                  class="btn btn-primary btn-block"
                  tupe="submit"
                  >Enviar</button>
              </form>
            </div>
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
        titleTemplate: 'Clasificados Contacto | Recuperar Contraseña',
    },
    data() {
        return {
            form: {
                email: '',
            },
            isLoading: false
        }
    },
    validations: {
        form: {
            email: {
                required,
                email
            }
        },
    },
    methods: {
        async goToEmailSend(){

            if ( this.$v.$invalid ) {
                this.$v.$touch()
                return 
            } 

            // API CLASIFICADOS.HOST
            

            
            // API CLASIFICADOS.COM
            const success = await this.$store.dispatch('forgotPassword', this.form )
            
            if ( !success ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrio un error',
                    text: 'Hable con el administrador.'
                })
                return
            }

            const { status } = success

            if ( status != 200 ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'No existe un usuario con ese correo electrónico'
                })
                return
            } 

            this.$router.push('/emailsend')

        }
    }
}
</script>


<style scoped>
.ForgotP h1 {
  font-size: 1.5rem;
}
.ForgotP .card {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 15px;
  border: inherit;
}
.ForgotP .check {
  margin-top: -43px;
}
.ForgotP .icn-background {
  color: #00569d;
}
</style>
