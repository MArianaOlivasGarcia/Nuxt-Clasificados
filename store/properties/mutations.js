

const mutations = {

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



    resetSuburs( state, value ) {
        state.coloniasList = value
    }

}


export default mutations