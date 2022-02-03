


const getters = {
    
    getUserLogged( state ) {
        return state.userLogged
    },
    getStatesList( state ) {
        return state.statesList
    },
    getCitiesList( state ) {
        return state.citiesList
    },
    getProductsTypeByCityName( state ) {
        return state.productsType
    },
    getSearFormValues( state ) {
        return state.searchForm
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
    }
}

export default getters;