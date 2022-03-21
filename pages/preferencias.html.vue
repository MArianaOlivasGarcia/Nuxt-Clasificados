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
                        :class="{ 'btn-active': formOne.operation == 1 }"
                        @click="changeOperation( 1 )">
                        <span>Venta</span>
                        <img class="opt-selected" v-if="formOne.operation == 1" style="width: 25px" src="https://img.icons8.com/material/72/ffffff/checkmark--v1.png" alt="">
                        <img class="opt-diselected" v-else style="width: 25px" src="https://img.icons8.com/ios-glyphs/2x/ffffff/delete-sign.png" alt="">
                    </button>
                </div>
                <div class="col-md-6 text-center p-1" >
                        <button type="button" 
                            style="width: 80%; font-size: 16px !important" 
                            class="btn btn-opt"
                            :class="{ 'btn-active': formOne.operation == 2 }"
                            @click="changeOperation( 2 )">
                            <span>Renta</span>
                            <img class="opt-selected" v-if="formOne.operation == 2" style="width: 25px" src="https://img.icons8.com/material/72/ffffff/checkmark--v1.png" alt="">
                            <img class="opt-diselected" v-else style="width: 25px" src="https://img.icons8.com/ios-glyphs/2x/ffffff/delete-sign.png" alt="">
                    </button>
                </div>
            </div>


        </div>

        <div class="form-group pb-3">
            <label class="strong">¿Qué tipo de inmueble?<span class="text-danger">*</span></label>
            <select 
                v-model="formOne.type" 
                class="form-control"
                @blur="$v.formOne.type.$touch()">
                <option :value="null">Seleccione una opción</option>
                <option v-for="category in categories" 
                    :key="category.value" 
                    :value="category.value">{{ category.name }}</option>
            </select>
            <small>
                <span v-if="!$v.formOne.type.required  && $v.formOne.type.$dirty"
                    class="text-danger">El tipo de inmueble es requerido.</span>
            </small>
         </div>

         <div class="row ">
             <div class="col-md-4 form-group pb-3">
                <label class="strong">No. Recámaras mínimas<span class="text-danger">*</span></label>
                <select 
                    v-model="formOne.bedroom" 
                    @blur="$v.formOne.bedroom.$touch()"
                    class="form-control">
                    <option :value="null">Seleccione una opción</option>
                    <option :value="1">1</option>
                    <option :value="2">2</option>
                    <option :value="3">3</option>
                    <option :value="4">4</option>
                    <option :value="5">5</option>
                    <option :value="6">6</option>
                    <option :value="7">7</option>
                    <option :value="8">8</option>
                    <option :value="9">9</option>
                    <option :value="10">10</option>
                </select>
                <small>
                    <span v-if="!$v.formOne.bedroom.required  && $v.formOne.bedroom.$dirty"
                        class="text-danger">El número de recámaras es requerido.</span>
                </small>
            </div>
            <div class="col-md-4 form-group pb-3">
                <label class="strong">No. Baños mínimos<span class="text-danger">*</span></label>
                <select 
                    v-model="formOne.bathroom" 
                    @blur="$v.formOne.bathroom.$touch()"
                    class="form-control" >
                    <option :value="null">Seleccione una opción</option>
                    <option :value="1">1</option>
                    <option :value="2">2</option>
                    <option :value="3">3</option>
                    <option :value="4">4</option>
                    <option :value="5">5</option>
                    <option :value="6">6</option>
                    <option :value="7">7</option>
                    <option :value="8">8</option>
                    <option :value="9">9</option>
                    <option :value="10">10</option>
                </select>
                <small>
                    <span v-if="!$v.formOne.bathroom.required  && $v.formOne.bathroom.$dirty"
                        class="text-danger">El número de baños es requerido.</span>
                </small>
            </div>
            <div class="col-md-4 form-group pb-3">
                <label class="strong">Estacionamientos mínimos<span class="text-danger">*</span></label>
                <select 
                    v-model="formOne.parking" 
                    @blur="$v.formOne.parking.$touch()"
                    class="form-control" >
                    <option :value="null">Seleccione una opción</option>
                    <option :value="0">No requiero estacionamiento</option>
                    <option :value="1">1</option>
                    <option :value="2">2</option>
                    <option :value="3">3</option>
                    <option :value="4">4</option>
                    <option :value="5">5</option>
                    <option :value="6">6</option>
                    <option :value="7">7</option>
                    <option :value="8">8</option>
                    <option :value="9">9</option>
                    <option :value="10">10</option>
                </select>
                <small>
                    <span v-if="!$v.formOne.parking.required  && $v.formOne.parking.$dirty"
                        class="text-danger">El número de estacionamientos es requerido.</span>
                </small>
            </div>
         </div>

         <div class="row">
             <div class="col-md-6 form-group pb-3">
                    <label class="strong">m² de construcción<span class="text-danger">*</span></label>
                    <input 
                        v-model="formOne.m2c" 
                        @blur="$v.formOne.m2c.$touch()"
                        type="number" 
                        class="form-control" 
                        placeholder="m² de construcción" />
                    <small>
                        <span v-if="!$v.formOne.m2c.required  && $v.formOne.m2c.$dirty"
                        class="text-danger">La cantidad de m²c es requerida.</span>
                    </small>
            </div>
            <div class="col-md-6 form-group pb-3">
                    <label class="strong">m² de terreno<span class="text-danger">*</span></label>
                    <input type="number" 
                        class="form-control" 
                        v-model="formOne.m2t" 
                        @blur="$v.formOne.m2t.$touch()"
                        placeholder="m² de terreno" />
                    <small>
                        <span v-if="!$v.formOne.m2t.required  && $v.formOne.m2t.$dirty"
                        class="text-danger">La cantidad de m²t es requerida.</span>
                    </small>
            </div>
         </div>

         <div class="form-group">
            <label class="strong">Ingresa el rango de precio<span class="text-danger">*</span></label>
            <div class="row">
                <div class="col-md-6 form-group pb-3">
                    <label>Mínimo</label>
                    <input type="number" 
                        v-model="formOne.pricemin" 
                        @blur="$v.formOne.pricemin.$touch()"
                        class="form-control" placeholder="Precio mínimo" />
                    <small>
                        <span v-if="!$v.formOne.pricemin.required  && $v.formOne.pricemin.$dirty"
                        class="text-danger">El precio mínimo es requerido.</span>
                    </small>
                </div>
                <div class="col-md-6 form-group pb-3">
                    <label>Máximo</label>
                    <input type="number" 
                        v-model="formOne.pricemax" 
                        @blur="$v.formOne.pricemax.$touch()"
                        class="form-control" placeholder="Precio máximo" />
                    <small>
                        <span v-if="!$v.formOne.pricemax.required  && $v.formOne.pricemax.$dirty"
                        class="text-danger">El precio máximo es requerido.</span>
                    </small>
                </div>
            </div>
         </div>

         <div class="text-center mt-5">
             <button 
                type="button"
                class="btn btn-primary" 
                style="width: 40%; padding: 10px"
                @click="changeTab(2)">Siguiente</button>
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
                        <label class="strong">Estado<span class="text-danger">*</span></label>
                        <select 
                            class="form-control is-valid"
                            v-model="formTwo.state" 
                            @blur="$v.formTwo.state.$touch()">
                            <option :value="null">Seleccione un estado</option>
                            <option v-for="state in states" 
                                :key="state.folio"
                                :value="state.folio">{{ state.name }}</option>
                        </select>
                        <small>
                            <span v-if="!$v.formTwo.state.required  && $v.formTwo.state.$dirty"
                            class="text-danger">El Estado es requerido.</span>
                        </small>
                    </div>

                    <div class="form-group">
                        <label class="strong">Municipio</label>
                        <select 
                            class="form-control is-valid"
                            v-model="formTwo.city" >
                            <option :value="null">Seleccione un municipio</option>
                            <option
                               v-for="city in cities"
                               :key="city.id"
                               :value="city.id">
                               {{city.itemName}}
                             </option>
                        </select>
                        <!-- <small>
                            <span v-if="!$v.formTwo.city.required  && $v.formTwo.city.$dirty"
                            class="text-danger">El Municipio es requerido.</span>
                        </small> -->
                    </div>

                    <div class="form-group">
                        <label class="strong">Colonia</label>
                        <select class="form-control"
                            v-model="formTwo.suburb" >
                            <option :value="null">Selecciona una colonia</option>
                            <option
                                :key="colonia.id"
                                v-for="colonia in colonias"
                                :value="colonia.id">
                                {{colonia.itemName}}
                            </option>
                        </select>
                        <!-- <small>
                            <span v-if="!$v.formTwo.suburb.required  && $v.formTwo.suburb.$dirty"
                            class="text-danger">La colonia es requerida.</span>
                        </small> -->
                    </div>

                    <div class="text-right">
                        <button type="button"
                            class="btn add-button"
                            @click="addZonaIdeal( false )">Añadir</button>
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
                        <button 
                            type="button"
                            class="btn add-button"
                            @click="addZonaIdeal( true )">Añadir zona personalizada</button>
                    </div>


            </div>


            <div class="col-md-6" >

                <div v-if="zonasIdeales.length > 0">

                    <h4 style="font-size: 18px">Tus zonas ideales son:</h4>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" 
                            v-for="(item, i) in zonasIdeales"
                            :key="i">
                            <div class="item-ubication">
                                <span v-if="item.coords">{{ `Zona Personalizada` }}</span>
                                <span v-else-if="!item.city">{{ `${item.state.name}` }}</span>
                                <span v-else-if="!item.suburb">{{ `${item.state.name}, ${item.city.itemName}` }}</span>
                                <span v-else>{{ `${item.state.name}, ${item.city.itemName}, ${item.suburb.itemName}` }}</span>
                                <span @click="removeZonaIdeal(i)"><i class="fas fa-trash-alt"></i></span>
                            </div>
                        </li>
                    </ul>

                </div>


            </div>

        </div>

        <div class="text-center mt-5">
            <button class="btn btn-primary" 
                style="width: 40%; padding: 10px"
                @click="changeTab(3)">Siguiente</button>
        </div>
    </div>



    <!-- TAB 3 -->
    <div class="tab-pane container fade p-3 active show" id="menu2" v-if="tabSelected == 3">
        <span @click="changeTab( 2 )" style="cursor: pointer; font-size: 14px;"><i class="fas fa-angle-left"></i> Regresar</span>

        <h3>Estás a un paso de encontrar el inmueble de tus sueños.<br>Necesitamos más información sobre ti.</h3>


        <form class="p-5  mx-5">
            <div class="form-group pb-2">
                <label class="strong">¿Cúal es tu nombre?<span class="text-danger">*</span></label>
                <input 
                class="form-control" 
                placeholder="Nombre completo"
                v-model="formThree.name" 
                @blur="$v.formThree.name.$touch()" />
                <small>
                    <span v-if="!$v.formThree.name.required  && $v.formThree.name.$dirty"
                    class="text-danger">Tu nombre es requerido.</span>
                </small>
            </div>

            <div class="form-group pb-2">
                <label class="strong">¿Cúal es tu correo electrónico?<span class="text-danger">*</span></label>
                <input 
                    class="form-control" 
                    type="email" 
                    placeholder="ejemplo@ejemplo.com" 
                    v-model="formThree.email" 
                    @blur="$v.formThree.email.$touch()" />
                <small>
                    <span v-if="!$v.formThree.email.required  && $v.formThree.email.$dirty"
                    class="text-danger">Tu correo electrónico es requerido.</span>
                </small>
                <small>
                <span v-if="!$v.formThree.email.email  &&
                                  $v.formThree.email.$dirty"
                    class="text-danger">Correo electrónico inválido.</span>
                </small>
            </div>

            <div class="form-group pb-2">
                <label class="strong">¿Cúal es número teléfonico?<span class="text-danger">*</span></label>
                <input class="form-control"  
                    placeholder="(999) 999 9999"
                    v-model="formThree.phone" 
                    @blur="$v.formThree.phone.$touch()" />
                <small>
                    <span v-if="!$v.formThree.phone.required  && $v.formThree.phone.$dirty"
                    class="text-danger">Tu número telefónico es requerido.</span>
                </small>
            </div>

            <div class="form-group pb-2">
                <label class="strong">¿Cúal es el nombre de tu negocio?<span class="text-danger">*</span></label>
                <input 
                    class="form-control"
                    placeholder="Nombre del negocio"
                    v-model="formThree.businessName" 
                    @blur="$v.formThree.businessName.$touch()" />
                <small>
                    <span v-if="!$v.formThree.businessName.required  && $v.formThree.businessName.$dirty"
                    class="text-danger">El nombre de tu negocio es requerido.</span>
                </small>
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
                <button 
                    type="button"
                    class="btn btn-primary" 
                    style="width: 40%; padding: 10px"
                    @click="submitForm()">Guardar</button>
            </div>
        </form>



    </div>



    </div>
  </div>
</template>

<script>

import { required, email } from 'vuelidate/lib/validators' 
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex';


export default {
    head: {
        titleTemplate: 'Clasificados Contacto | Preferencias',
    },
    data() {
        return {
            zoom: 5,
            center: { lat: 19.4311971, lng: -99.2047097 },
            markers: [
                { Id: 1, position: { lat: 19.4311971, lng: -99.2047097 }},
            ],
            formOne: {
                operation: 1,
                type: null,
                bedroom: null,
                bathroom: null,
                parking: null,
                m2c: null,
                m2t: null,
                pricemin: null,
                pricemax: null
            },
            formTwo: {
                // country: null,
                state: null,
                city: null,
                suburb: null,
                municipality: null,
            },
            formThree: {
                name: null,
                email: null,
                phone: null,
                businessName: null
            },
            tabSelected: 1,

            zonasIdeales: [],

            mapData: {
                coords: { lat: 19.4311971, lng: -99.2047097 },
                radius: 100
            }
        }
    },
    validations: {
        formOne: {
            type: { required },
            bedroom: { required },
            bathroom: { required },
            parking: { required },
            m2c: { required },
            m2t: { required },
            pricemin: { required },
            pricemax: { required },
        },
        formTwo: {
            // country: { required },
            state: { required },
            // city: { required },
            // suburb: { required },
        },
        formThree: {
            name: { required },
            email: { required, email },
            phone: { required },
            businessName: { required }
        },
    },
    created() {
        this.formTwo.state = this.userStateLocation.folio
        console.log(this.stateById('61'))
    },
    methods: {
        changeTab( idTab ) {


            if ( idTab == 2 && this.$v.formOne.$invalid ) {
                console.log('Es inválido el formulario de la TAB 1')
                this.$v.formOne.$touch();
                Swal.fire({
                    icon: 'warning',
                    title: '¡Hay datos requeridos que no has contestado!',
                    text: `Para darte una mejor experiencia en tu búsqueda, es necesario que contestes los datos que son señalados con un asterisco *.`
                })
                return;
            }


            if ( idTab == 3 && this.zonasIdeales.length == 0 ) {
                console.log('Es inválido el formulario de la TAB 2')
                this.$v.formTwo.$touch();
                Swal.fire({
                    icon: 'warning',
                    title: '¡Es necesario establecer almenos una zona!',
                    text: `Por favor indicanos en que zona(s) te gustaría vivir.`
                })
                return;
            }

            this.tabSelected = idTab;
        },
        changeOperation( idOperation ) {
            this.formOne.operation = idOperation;
        },
        dragCircle( value ) {
            this.mapData.coords.lat = value.latLng.lat()
            this.mapData.coords.lng = value.latLng.lng()
            console.log(this.mapData)
        },
        radiusChanged( value ) {
            this.mapData.radius = value
            console.log(this.mapData)
        },
        async submitForm(){
            if ( this.$v.formThree.$invalid  ) {
                this.$v.formThree.$touch()
                Swal.fire({
                    icon: 'warning',
                    title: '¡Hay datos requeridos que no has contestado!',
                    text: `Para darte una mejor experiencia en tu búsqueda, es necesario que contestes los datos que son señalados con un asterisco *.`
                })
                return 
            } 

             Swal.fire({
                title: '¡Por favor espere!',
                text: 'Estamos buscando el inmueble de tus sueños',
                onBeforeOpen: () => {
                    Swal.showLoading()
                },
                showLoading: true,
                allowEscapeKey: false,
                allowOutsideClick: false,
                showConfirmButton: false
            });

            const states = this.zonasIdeales.filter( zona => zona.state != undefined ).map( zona => zona.state.folio )
            const municipalities = this.zonasIdeales.filter( zona => zona.city != undefined ).map( zona => zona.city.id )
            const suburbs = this.zonasIdeales.filter( zona => zona.suburb != undefined ).map( zona => zona.suburb.id )
           
         
            const form = {
                token: localStorage.getItem('token') || '',
                ...this.formOne,
                ...this.formTwo,
                contact: {
                    ...this.formThree
                },
                city: null,
                municipality: municipalities.filter( (z, i) => municipalities.indexOf(z) === i).toString(),
                state: states.filter( (z, i) => states.indexOf(z) === i).toString(),
                suburb: suburbs.filter( (z, i) => suburbs.indexOf(z) === i).toString()
            }

           console.log(form)


           const resp = await this.$store.dispatch('toIDI', form)

            if ( !resp ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Ocurrio un error.'
                })
                return;
            }


            if ( resp.data.length == 0 ){
                Swal.fire({
                    title: ':(',
                    text: 'En este momento no tenemos inmuebles como los que buscas, pero nuestros Asesores Inmobiliarios se comunicarán contigo cuando tengan la mejor opción para ti.'
                })
            } else if ( resp.data.length > 0 ) {
                Swal.fire({
                    title: '¡Genial!',
                    text: 'Estos son los inmuebles ideales para ti.'
                })
            }





        },
        addZonaIdeal( isPersonalizada ){
            let data = {}
            if ( isPersonalizada ) {
                data = { ...this.mapData }
            } else {

                if ( this.$v.formTwo.$invalid  ) {

                    Swal.fire({
                        icon: 'warning',
                        title: '¡Hay datos requeridos que no has contestado!',
                        text: `Para darte una mejor experiencia en tu búsqueda, es necesario que contestes los datos que son señalados con un asterisco *.`
                    })

                    return;
                }

                data = { state: this.stateById(this.formTwo.state), city: this.municipalityById(this.formTwo.city), suburb: this.suburbById(this.formTwo.suburb) }
            }
            this.zonasIdeales.push( data )
        },
        removeZonaIdeal( index ){
            this.zonasIdeales.splice( index, 1)
        }
    },
    computed: {
        ...mapGetters({ states: 'getStatesList',
                        cities: 'getCitiesList', 
                        colonias: 'getColoniasList', 
                        categories: 'getPropertiesTypes',
                        userStateLocation: 'getUserStateLocation',
                        stateById: 'getStateById',
                        municipalityById: 'getMunicipalityById',
                        suburbById: 'getSuburbById'})
    },
    watch: {
      'formTwo.state': {
        immediate: true,
        async handler( newValue, oldValue  ) {
          
          await this.$store.dispatch('getCities', this.formTwo.state )
          
          if ( oldValue == null || oldValue == undefined ){
            return;
          }

          this.formTwo.city = null;
          this.formTwo.suburb = null;
          this.$store.commit('resetSuburs', [])
          
        }
      },
      'formTwo.city': {
        immediate: true,
        async handler( newValue, oldValue  ) {
          
          await this.$store.dispatch('getColonias', this.formTwo.city )
          
          if ( oldValue == null || oldValue == undefined ){
            return;
          }

          this.formTwo.suburb = null;

          
        }
      }
    },

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