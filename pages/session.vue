

<template >

    <section class="ftco-section login-section pb-5">
      <div class="container cont">
        <div class="row">
          <div class="col-md-12 mb-3 text-center">
            <div class="registration-form text-center">
              <form id="login" 
                    v-on:submit.prevent="login">
                <div class="mb-2 mt-2 text-center">
                  <NuxtLink to="/">
                    <img src="@/static/clasificadoslogo.png" />
                  </NuxtLink>
                </div>


                <div class="form-group mt-4 mb-2 text-left">
                  <input
                    v-model="form.email"
                    @blur="$v.form.email.$touch()"
                    type="text"
                    class="form-control item pl-4 mt-3"
                    placeholder="Correo electrónico"
                  />
                  <small><span
                        v-if=" !$v.form.email.required  &&
                              $v.form.email.$dirty"
                      class="text-danger">El correo electrónico es requerido.
                  </span></small>
                  <small><span
                        v-if="!$v.form.email.email &&
                          $v.form.email.$dirty"
                      class="text-danger"
                      >Correo eletrónico inválido.
                  </span></small>
                </div>


                <div class="form-group mt-4 mb-2 text-left">
                  <input
                    type="password"
                    class="form-control item pl-4 mt-3"
                    placeholder="Contraseña"
                    v-model="form.password"
                    @blur="$v.form.password.$touch()"
                  />
                  <small>
                      <span 
                      v-if=" !$v.form.password.required &&
                            $v.form.password.$dirty "
                      class="text-danger">La contraseña es requerida.</span>
                    </small>
                </div>


                <div v-if="!isLoading" class="form-group mt-4 mb-4">
                  <button 
                    type="submit"
                    class="form-control btn btn-primary font-weight-bold"
                    style="font-family:'Poppins;"
                  >
                    INICIAR SESIÓN
                  </button>
                </div>


                <div  v-else class="form-group mt-4 mb-4">
                  <button
                  disabled
                    type="submit"
                    class="form-control btn btn-primary font-weight-bold"
                    style="font-family:'Poppins;"
                  >
                    <i class="fas fa-spinner"></i> CARGANDO...
                  </button>
                </div>

                <hr>

                  <!-- <div class="row google_btn mb-4">

                     <div id="my-signin2"></div>

                  </div>                   -->
                <NuxtLink to="/forgotpassword"><span>¿Olvidaste tu contraseña?</span></NuxtLink> <br>
                <NuxtLink to="/register"
                  >¿No tienes cuenta?, <span>¡Regístrate!</span></NuxtLink
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>

<script src="https://apis.google.com/js/platform.js"></script>

<script>

import { required, email } from 'vuelidate/lib/validators' 
import Swal from 'sweetalert2'



export default {
  head: {
    titleTemplate: 'Clasificados Contacto | Iniciar Sesión',
  },
  data() {
    return {
      contact: true,
      form: {
        email: '',
        password: ''
      },
      isLoading: false,
      auth2: null
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  mounted() {

    //this.renderButton()
  },
  methods: {
    async login() {

        if ( this.$v.$invalid ) {
            this.$v.$touch()
            return 
        } 

        this.isLoading = true;

        const { folio } =  await this.$store.dispatch('login', this.form)
        
        if ( folio == '0' ){
            this.isLoading = false
            Swal.fire({
                title: 'Oops!',
                text: 'Correo electrónico y/o contraseña incorrectos',
                icon: 'error'
            })
            return
        }

        this.$store.commit('setUserLogged', folio)
        localStorage.setItem('folio', folio)
        window.location.href = 'https://www.clasificadoscontacto.com/panel/#/dashboard'
        //window.open()
        

        this.isLoading = false

    },
    renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
      });
      this.startApp()
    },
    startApp() {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '855212464867-dbmnlv1mtfm7ratcr00h7lk706027u30.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin'
        });
        this.attachSignin(document.getElementById('my-signin2'));
      });
    },
    attachSignin(element) {
      this.auth2.attachClickHandler(element, {},
        (googleUser) => {

          const token = googleUser.getAuthResponse().id_token;
          console.log(token);

        }, (error) => {
          alert(JSON.stringify(error, undefined, 2));
        });
    }
  }
};

</script>

<style >
.login-section {
  background-color: #f8f8f8 !important;
  padding: 4.5rem, 0 !important;
}
.login-section span {
  color: #00569d;
}
.login-section a:hover {
  color: inherit;
}
.login-section img {
  width: 100% !important;
}
.registration-form {
  padding: 30px 0;
}
.registration-form form {
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 50px 70px;
  border-radius: 15px;
  /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075); */
}
.registration-form form {
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 50px 70px;
  border-radius: 15px;
  /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075); */
}
.registration-form form {
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 50px 70px;
  border-radius: 15px;
  /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075); */
}

.google_btn {
  justify-content: center;
}

.google_btn span{
  color: white !important;
}

#not_signed_in8kbhcfzh5fih {
  color: white;
}

@media (max-width: 576px) {
  .registration-form form {
    padding: 50px 20px;
  }
}
.registration-form .item {
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
  border: inherit;
}
.login-section .cont {
  max-width: 600px !important;
  background: #fff;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 20px;
}



</style>
