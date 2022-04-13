

<template>
    <form class="p-2" style="background-color: rgba(242, 225, 19, 0.7)">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label>Tipo de operación</label>
                <select class="form-control">
                    <option value="">Tipo de operación</option>
                    <option value="">Venta</option>
                    <option value="">Renta</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label>Tipo de inmueble</label>
                <select class="form-control">
                    <option value="">Tipo de inmueble</option>
                    <option value="">Venta</option>
                    <option value="">Renta</option>
                </select>
            </div>
        </div>
        
        <div class="form-group">
            <label>Ubicación</label>
            <client-only>
                <gmap-autocomplete 
                  placeholder="Ej: Ciudad de México, CDMX, México" >
                </gmap-autocomplete>
              </client-only>
        </div>

          
        <button type="submit" class="btn btn-primary mt-2">Buscar <i class="fas fa-search"></i></button>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
    form {
        /* width: 70% !important; */
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        border-radius: 10px;
    }
    label {
        font-size: 14px;
        margin-bottom: 0.2rem;
    }
    .form-group {
        margin-bottom: 0.5rem !important;
    }
    .form-control {
        box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px !important;
        border: 1px solid rgba(255, 255, 255, 0.6);
    }

</style>