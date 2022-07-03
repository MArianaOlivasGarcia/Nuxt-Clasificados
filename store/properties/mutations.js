

const mutations = {

    setToken(state, token) {
        state.token = token
    },

    userStateLocation(state, element){
        state.userStateLocation = element
    },

    setUserLogged(state, folio){
        state.userLogged = folio
    },
    setStatesList(state, states){
        state.statesList = states
    },
    setCitiesList(state, cities){
        state.citiesList = cities
    },
    setColoniasList(state, colonias){
        state.coloniasList = colonias
    },
    setAPI_PARAMS(state, api_params){
        state.API_PARAMS = {
            ...state.API_PARAMS,
            ...api_params
        }
    },
    setProductsTypeByCityName(state, productsType){
        state.productsType = productsType
    },
    setSearchFormValues(state, values){
        state.searchForm = {
            ...state.searchForm,
            ...values
        }
    },
    setSearchFormVehiculosValues(state, values){
        state.searchFormVehiculos = {
            ...state.searchFormVehiculos,
            ...values
        }
    },
    setLoading(state, isLoading){
        state.isLoading = isLoading
    },
    setPropertiesList(state, properties){
        state.propertiesList = properties
    },
    setOutstanding(state, properties){
        state.outstanding = properties
    },

    setShowSearchGeneral( state, value ) {
        state.showSearchGeneral = value
    },
    setShowIDI( state, value ) {
        state.showIDI = value
    },
    setWhatsContactValues( state, value ) {
        state.whatsContactValues = value
    },
    setShowWhatsForm( state, value ) {
        state.showWhatsForm = value
    },



    resetSuburs( state, value ) {
        state.coloniasList = value
    },

    setCookiesAccepted( state, value ) {
        state.coockiesAccepted = value
    },


    setMarcasVehiculos( state, value ) {
        state.marcasVehiculos = value
    },
    setTiposVehiculos( state, value ) {
        state.tiposVehiculos = value
    },
    setModelosVehiculos( state, value ) {
        state.modelosVehiculos = value
    },
    setDevs( state, value ) {
        state.devsList = value
    }
}


export default mutations