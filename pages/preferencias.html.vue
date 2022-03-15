<template>
  <div class="container mt-5">
      <!-- Nav tabs -->
<ul class="centrar nav nav-pills">
  <li class="nav-item">
    <a class="nav-link ready" data-toggle="pill" @click="changeTab( 1 )">1. Mi inmueble ideal</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ready" data-toggle="pill" @click="changeTab( 2 )">2. Mi zona ideal</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ready" data-toggle="pill" @click="changeTab( 3 )">3. Mis datos</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">

    <!-- TAB 1 -->
  <div class="tab-pane container fade p-3 active show" id="home" v-if="tabSelected == 1">
    <h3>Estás a 3 pasos de encontrar el inmueble de tus sueños.</h3>
    <!-- <span style="color: #135da3; font-size: 14px">P.</span> -->

      <form class="p-5  mx-5">
        <div class="form-group pb-3">
            <label class="strong">¿Qué tipo de operación deseas realizar?<span class="text-danger">*</span></label>
            
             <div class="row m-0 pb-2" style="width: 100%;">
                <div class="col-md-6 text-center p-1" >
                    <button type="button" 
                        style="width: 80%; font-size: 16px !important" 
                        class="btn btn-opt"
                        :class="{ 'btn-active': form.operation == 1 }"
                        @click="changeOperation( 1 )">
                        <span>Venta</span>
                        <img class="opt-selected" v-if="form.operation == 1" style="width: 25px" src="https://img.icons8.com/material/72/ffffff/checkmark--v1.png" alt="">
                        <img class="opt-diselected" v-else style="width: 25px" src="https://img.icons8.com/ios-glyphs/2x/ffffff/delete-sign.png" alt="">
                    </button>
                </div>
                <div class="col-md-6 text-center p-1" >
                        <button type="button" 
                            style="width: 80%; font-size: 16px !important" 
                            class="btn btn-opt"
                            :class="{ 'btn-active': form.operation == 2 }"
                            @click="changeOperation( 2 )">
                            <span>Renta</span>
                            <img class="opt-selected" v-if="form.operation == 2" style="width: 25px" src="https://img.icons8.com/material/72/ffffff/checkmark--v1.png" alt="">
                            <img class="opt-diselected" v-else style="width: 25px" src="https://img.icons8.com/ios-glyphs/2x/ffffff/delete-sign.png" alt="">
                    </button>
                </div>
            </div>


        </div>

        <div class="form-group pb-3">
            <label class="strong">¿Qué tipo de inmueble?<span class="text-danger">*</span></label>
            <select class="form-control">
                <option>Casa</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
         </div>

         <div class="row ">
             <div class="col-md-4 form-group pb-3">
                <label class="strong">No. Recámaras mínimas<span class="text-danger">*</span></label>
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="col-md-4 form-group pb-3">
                <label class="strong">No. Baños mínimos<span class="text-danger">*</span></label>
                <select class="form-control" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="col-md-4 form-group pb-3">
                <label class="strong">Estacionamientos mínimos<span class="text-danger">*</span></label>
                <select class="form-control" >
                    <option>No requiero estacionamiento</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
         </div>

         <div class="row">
             <div class="col-md-6 form-group pb-3">
                    <label class="strong">m² de construcción<span class="text-danger">*</span></label>
                    <input class="form-control" placeholder="m² de construcción" />
            </div>
            <div class="col-md-6 form-group pb-3">
                    <label class="strong">m² de terreno<span class="text-danger">*</span></label>
                    <input class="form-control" placeholder="m² de terreno" />
            </div>
         </div>

         <div class="form-group">
            <label class="strong">Ingresa el rango de precio<span class="text-danger">*</span></label>
            <div class="row">
                <div class="col-md-6 form-group pb-3">
                    <label>Mínimo</label>
                    <input class="form-control" placeholder="Precio mínimo" />
                </div>
                <div class="col-md-6 form-group pb-3">
                    <label>Máximo</label>
                    <input class="form-control" placeholder="Precio máximo" />
                </div>
            </div>
         </div>

         <div class="text-center mt-5">
             <button type="submit"  class="btn btn-primary" style="width: 40%; padding: 10px">Siguiente</button>
         </div>
      </form>
  </div>



    <!-- TAB 2 -->

    <div class="tab-pane container fade p-3 active show" id="menu1" v-if="tabSelected == 2">
        <span @click="changeTab( 1 )" style="cursor: pointer; font-size: 14px;"><i class="fas fa-angle-left"></i> Regresar</span>
        <h3>Mi ubicación ideal</h3>
        <span style="color: #135da3; font-size: 14px">Selecciona las que te gustaría vivir ó dibuja en el mapa y da clic en "Añadir".</span>

        <div class="row m-0 mt-3">

            <div class="col-md-6">

                <form>

                    <div class="form-group">
                        <label class="strong">Estado</label>
                        <select class="form-control is-valid">
                            <option>Quintana Roo</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="strong">Municipio</label>
                        <select class="form-control is-valid" >
                            <option>Benito Júarez</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="strong">Colonia</label>
                        <select class="form-control" >
                            <option>Selecciona una colonia</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div class="text-right">
                        <button class="btn add-button">Añadir</button>
                    </div>
                   

                </form>

                <hr>

                <div>
                    <span style="color: #135da3; font-size: 14px"><strong>Instrucciones: </strong>Para añadir zonas personalizadas coloca y arrastra circulos en tus zona favorita. Después da clic en "Añadir zona personalizada".</span>

                    <gmap-map
                        class="map-container"
                        :center="center"
                        :zoom="17" >
                        <GmapCircle
                            @dragend="dragCircle"
                            @radius_changed="radiusChanged" 
                            v-for="(pin, index) in markers"
                            :key="index"
                            :center="pin.position"
                            :radius="100"
                            :visible="true"
                            :editable="true"
                            :draggable="true"
                            :options="{fillColor:'#00569d',fillOpacity:.6}"
                        ></GmapCircle>
                    </gmap-map>
                </div>

                <div class="text-right mt-3">
                        <button class="btn add-button">Añadir zona personalizada</button>
                    </div>


            </div>


            <div class="col-md-6">
                <h4 style="font-size: 18px">Tus zonas ideales son:</h4>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <div class="item-ubication"><span>Benito Júarez, Quintana Roo</span><span><i class="fas fa-trash-alt"></i></span></div>
                    </li>
                </ul>
            </div>

        </div>

        <div class="text-center mt-5">
            <button class="btn btn-primary" style="width: 40%; padding: 10px">Siguiente</button>
        </div>
    </div>



    <!-- TAB 3 -->
    <div class="tab-pane container fade p-3 active show" id="menu2" v-if="tabSelected == 3">
        <span @click="changeTab( 2 )" style="cursor: pointer; font-size: 14px;"><i class="fas fa-angle-left"></i> Regresar</span>

        <h3>Estas a un paso de encontrar el inmueble de tus sueños.<br>Necesitamos más información sobre ti.</h3>


        <form class="p-5  mx-5">
            <div class="form-group pb-2">
                <label class="strong">¿Cúal es tu nombre?<span class="text-danger">*</span></label>
                <input class="form-control" placeholder="Nombre completo" />
            </div>

            <div class="form-group pb-2">
                <label class="strong">¿Cúal es tu correo electrónico?<span class="text-danger">*</span></label>
                <input class="form-control" type="email" placeholder="ejemplo@ejemplo.com" />
            </div>

            <div class="form-group pb-2">
                <label class="strong">¿Cúal es número teléfonico?<span class="text-danger">*</span></label>
                <input class="form-control"  placeholder="(999) 999 9999" />
            </div>

            <div class="form-group pb-2">
                <label class="strong">¿Cúal es el nombre de tu negocio?<span class="text-danger">*</span></label>
                <input class="form-control"  placeholder="Nombre del negocio" />
            </div>


            <div class="form-group pb-2">
                <label class="strong">¿Con quién te vas a mudar?<span class="text-danger">*</span></label>
                <div class="col d-flex" style="justify-content: space-around;">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Amigo(a)</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">Pareja</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option2">
                        <label class="form-check-label" for="inlineCheckbox3">Familia</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option2">
                        <label class="form-check-label" for="inlineCheckbox4">Mascota</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option2">
                        <label class="form-check-label" for="inlineCheckbox5">Solo(a)</label>
                    </div>

                </div>
            </div>



            <label class="strong pb-2">¿Realizas/realizan las siguientes actividades?<span class="text-danger">*</span></label>
            
            <div class="form-group pb-2">
                <label>1. ¿Fumar?<span class="text-danger"></span></label>
                <br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">No</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Ocacionalmente</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3">
                    <label class="form-check-label" for="inlineRadio3">Si</label>
                </div>
            </div>

            <div class="form-group pb-2">
                <label>2. ¿Tocar instrumentos musicales?<span class="text-danger"></span></label>
                <br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4">
                    <label class="form-check-label" for="inlineRadio4">No</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="option5">
                    <label class="form-check-label" for="inlineRadio5">Ocacionalmente</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="option6">
                    <label class="form-check-label" for="inlineRadio6">Si</label>
                </div>
            </div>

            <div class="form-group pb-2">
                <label>3. ¿Tener visitas?<span class="text-danger"></span></label>
                <br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio7" value="option7">
                    <label class="form-check-label" for="inlineRadio7">No</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio8" value="option8">
                    <label class="form-check-label" for="inlineRadio8">Ocacionalmente</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio9" value="option9">
                    <label class="form-check-label" for="inlineRadio9">Si</label>
                </div>
            </div>


            <div class="form-group pb-2">
                <label>4. ¿Organizar fiestas?<span class="text-danger"></span></label>
                <br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio10" value="option7">
                    <label class="form-check-label" for="inlineRadio10">No</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio11" value="option8">
                    <label class="form-check-label" for="inlineRadio11">Ocacionalmente</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio12" value="option9">
                    <label class="form-check-label" for="inlineRadio12">Si</label>
                </div>
            </div>

            <div class="text-center mt-5">
                <button type="submit"  class="btn btn-primary" style="width: 40%; padding: 10px">Guardar</button>
            </div>
        </form>



    </div>



    </div>
  </div>
</template>

<script>
export default {

    data() {
        return {
            zoom: 5,
            center: { lat: 21.1619184, lng: -86.8503969 },
            markers: [
                { Id: 1, position: { lat: 21.1619184, lng: -86.8503969 }},
            ],
            form: {
                operation: 1
            },
            tabSelected: 1
        }
    },
    methods: {
        changeTab( idTab ) {
            this.tabSelected = idTab;
        },
        dragCircle( value ) {
            console.log(value)
            console.log(value.latLng.lat())
        },
        radiusChanged( value ) {
            console.log( value )
        }
    }

}
</script>

<style scoped>



a.nav-link {
    cursor: pointer;
}

ul.centrar {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.nav-link {
    color: #135DA3;
}

.nav-link.ready, a:hover, .nav-link.active {
    background-color: #FED823;
    color: #135DA3;
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

li.nav-item::after {
    display: none !important;
}


h3 {
    font-size: 24px;
    text-align: center;
}


.strong {
    font-weight: 500;
}


.item-ubication {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

i.fa-trash-alt {
    cursor: pointer;
    color: #E9303D;
}

.is-valid {
  border: 1.5px solid #6FD18C !important;
}

.is-invalid {
  border: 1.5px solid #E9303D !important;
}


.add-button {
    color: #135DA3;
    font-weight: 600;
}

.add-button:hover {
    background-color: #f3f3f3;
}


.btn-opt {
  /* background-color: #fff;
  color: #00569d; */
  color: white !important;
  background-color: #043a68;
  border-radius: 20px ;
  height: 46px !important;
  font-family: 'Poppins';
}

.btn-active{
  background-color: #00569d !important;
  color: white;
}



.btn-active:hover{
  background-color: #043a68 !important;
  transition: 0.2s all ease-in;
  color: white !important;
}

.btn-opt:hover {
  /* color: white !important;
  background-color: #043a68;
  transition: 0.2s all ease-in; */
  background-color: #00569d !important;
  transition: 0.2s all ease-in;
  color: white !important;
}

button span {
  font-size: 16px ;
}

button img.opt-selected {
  background: #6FD18C;
  border-radius: 100%;
  padding: 2px;
}

button img.opt-diselected {
  background: #E9303D;
  border-radius: 100%;
  padding: 4px;
}

</style>