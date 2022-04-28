


const getters = {
    
    getToken( state ) {
        return state.token
    },
    getUserStateLocation( state ) {
        return state.userStateLocation
    },
    getUserLogged( state ) {
        return state.userLogged
    },
    getStatesList( state ) {
        return state.statesList
    },
    getCitiesList( state ) {
        return state.citiesList
    },
    getColoniasList( state ) {
        return state.coloniasList
    },
    getProductsTypeByCityName( state ) {
        return state.productsType
    },
    getSearFormValues( state ) {
        return state.searchForm
    },
    getSearFormVehiculosValues( state ) {
        return state.searchFormVehiculos
    },
    getIsLoading( state ) {
        return state.isLoading
    },
    getPropertiesList( state ) {
        return state.propertiesList
    },
    getPropertiesTypes( state ) {
        return state.propertiesTypes
    },
    getOutstanding( state ) {
        return state.outstanding
    },
    getShowSearchGeneral( state ) {
        return state.showSearchGeneral
    },
    getCookiesAccepted( state ) {
        return state.coockiesAccepted
    },
    getShowIDI( state ) {
        return state.showIDI
    },
    getWhatsContactValues( state ) {
        return state.whatsContactValues
    },
    getShowWhatsForm( state ) {
        return state.showWhatsForm
    },



    // HELPERS
    getCategoryById: (state) => (id) => {
        return state.propertiesTypes.find(c => c.value == id)
    },
    getStateById: (state) => (id) => {
        return state.statesList.find(e => e.folio === id)
    },
    getMunicipalityById: (state) => (id) => {
        return state.citiesList.find(c => c.id === id)
    },

    getSuburbById: (state) => (id) => {
        return state.coloniasList.find(c => c.id === id)
    },
    getMarcaVehiculoById: (state) => (id) => {
        return state.marcasVehiculos.find(c => c.id == id)
    },
    getTipoVehiculoById: (state) => (id) => {
        return state.tiposVehiculos.find(c => c.id == id)
    },
    getModeloVehiculoById: (state) => (id) => {
        return state.modelosVehiculos.find(c => c.id == id)
    },

}

export default getters;