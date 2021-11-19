

const mutations = {

    setUserLogged(state, folio){
        state.userLogged = folio
    },
    setStatesList(state, states){
        state.statesList = states
    },
    setCitiesList(state, cities){
        state.citiesList = cities
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
    }

}


export default mutations