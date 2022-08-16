<template>
<div>
  <client-only v-if="!isLoading">
    <section class="ftco-section ResetP pb-5 pt-5 mt-5 mb-5">
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
              <div class="text-left pt-3">
                <div class="form-group">
                  <label class="text-left">Ingresa tu nueva contraseña:</label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    placeholder="Contraseña"
                    v-model="password"
                  />
                </div>
                <div class="form-group">
                  <label class="text-left">Confirma tu contraseña</label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    placeholder="Confirma tu contraseña"
                    v-model="password2"
                  />
                </div>
                <div class="mb-2" v-if="showMessage">
                  <span class="text-danger">Las contraseñas no coinciden.</span>
                </div>
                <div v-if="!disabled">
                  <button
                    type="submit"
                    @click="changePassword()"
                    class="btn btn-primary btn-block"
                  >
                    Aceptar
                  </button>
                </div>
                <div v-else>
                  <button
                    disabled
                    type="submit"
                    class="btn btn-primary btn-block"
                  >
                    <i class="fas fa-spinner"></i> CARGANDO...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </client-only>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    //Banner,
    // SearchForm,
    // ContactForm,
  },
  data() {
    return {
      token: '',
      password: '',
      password2: '',
      disabled: false,
      showMessage: false,
      isLoading: true
    };
  },
  async created()  {

    this.token = this.$route.params.token;
  
    const { status } = await this.$store.dispatch('verifyToken', this.token)


    if ( status != 200 ) {
      this.$router.push('/');
    }

    this.isLoading = false;

  },
  methods: {
    async changePassword() {

      this.disabled = true;

      const values = {
        token: this.token,
        password: this.password
      }

      if ( this.password != this.password2 ) {
        this.showMessage = true;
        this.disabled = false;
        return
      } 
      this.showMessage = false;
      const { status } = await this.$store.dispatch('changePassword', values )

      this.disabled = false;

      if ( status == 200 ) {
        this.$router.push("/emailsend");
      }



    }
  },
};
</script>

<style scoped>
.ResetP h1 {
  font-size: 1.5rem;
}
.ResetP .card {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 15px;
  border: inherit;
}
.ResetP .check {
  margin-top: -43px;
}
.ResetP .icn-background {
  color: #00569d;
}
</style>