<template>
  <div>
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

              <form class="text-left pt-3"
              v-on:submit.prevent="changePassword">
                <div class="form-group">
                  <label class="text-left">Ingresa tu nueva contraseña:</label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    placeholder="Contraseña"
                    v-model="form.password"
                  />
                </div>
                <div class="form-group">
                  <label class="text-left">Confirma tu contraseña</label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    placeholder="Confirma tu contraseña"
                    v-model="form.password2"
                  />
                </div>
                <div v-if="!isLoading">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block"
                  >
                    Aceptar
                  </button>
                </div>
                <div v-else>
                  <button
                    disabled
                    class="btn btn-primary btn-block">
                    <i class="fas fa-spinner"></i> CARGANDO...
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    head: {
        titleTemplate: 'Clasificados Contacto | Recuperar Contraseña',
    },
    data() {
        return {
            form: {
                password: '',
                password2: '',
            },
            isLoading: false
        }
    },
    methods: {
        changePassword(){
            console.log('Cambiar password')
        }
    }
}
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
