


<template>
  <div class="adviser-container animate__animated animate__fadeInTop p-3">

        <div class="mt-2">
            <h4 class="m-0">Completa tus datos</h4>
            <p class="mt-2">Te comunicaremos con uno de nuestros asesores.</p>
        </div> 

        <div class="form-group  m-0">
            <label class="strong">Nombre<span class="text-danger">*</span></label>
            <input class="form-control"  
                placeholder="Nombre completo"/>
            <small>
                <span
                class="text-danger">Tu nombre es requerido.</span>
            </small>
        </div>


        <div class="form-group  m-0">
            <label class="strong">Whatsapp<span class="text-danger">*</span></label>
            <input class="form-control"  
                placeholder="+52 (999) 999 9999"/>
            <small>
                <span
                class="text-danger">Tu número telefónico es requerido.</span>
            </small>
        </div>


         <div class="form-group  m-0">
            <label class="strong">Correo electrónico</label>
            <input class="form-control"  
                type="email"
                placeholder="ejemplo@ejemplo.com"/>
        </div>
 

        <div class="form-group  m-0">
            <label class="strong">Mensaje<span class="text-danger">*</span></label>
            <textarea class="form-control"  
                rows="2"
                placeholder="Escribe tu mensaje aquí"></textarea>
            <small>
                <span
                class="text-danger">Tu número telefónico es requerido.</span>
            </small>
        </div>

        <div class="mt-3">
            <button type="button" class="btn btn-primary">Iniciar Chat</button>
        </div>
  </div>
</template>

<script>
export default {

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
    box-shadow: rgba(0, 0, 0, 0.09) 2.4px 2.4px 3.2px;
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


input.form-control{
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