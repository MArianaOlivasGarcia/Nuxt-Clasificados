const actions = {

    async renewToken({ commit, state }) {

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.RENEW_TOKEN, config).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setToken', resp.data[0].token)

            return resp.data[0].token
        } 
    },

    async singInWithGoogle({ state }, token ){
        const resp = await fetch(state.APIV2_URL + state.GOOGLE_SINGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `token=${ token ? token : ':)' }`
        }).then((resp) => resp.json())
        return resp
    },

    async getStates({ commit, state }) {

        const resp = await fetch(state.API_URL + state.GET_STATES, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            }
        }).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setStatesList', resp.data)
            return resp.data
        } 
    },

    async getCities({ commit, state }, folio){

        commit('setAPI_PARAMS', { body: `id=${ folio }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_CITIES, config).then( resp => resp.json() )

        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setCitiesList', resp.data)
            return resp.data;
        } 
        

    },

    async getColonias({ commit, state }, folio ) {

        commit('setAPI_PARAMS', { body: `id=${ folio }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_COLONIAS, config).then( resp => resp.json() )
        if ( resp.status == 200 && resp.data.length > 0 ) {
            commit('setColoniasList', resp.data)
            return resp.data
        } 
    },

    async getPropertyDetail({ commit, state }, id ){
        if ( id == undefined ) return
        commit('setAPI_PARAMS', { body: `folio=${ id }`});
        const config = state.API_PARAMS
        try {
            const resp = await fetch(state.API_URL + state.GET_PROPERTYDETAIL, config).then( resp => resp.json() )

            if ( resp.status == 200 ) {
                return resp.data
            } 
        } catch( err ){
        }
    },
    

    async getProductsTypeByCityName({ commit, state }, folio){

        commit( 'setLoading', true )


        commit('setAPI_PARAMS', { body: `folio=${ folio }`})

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.GET_PRODUCTSTYPE, config).then((res) => res.json())
        
        commit( 'setLoading', false )

        if ( resp.status == 200) {
            commit('setProductsTypeByCityName', resp.data)
        }

    },
    async searchProducts({ commit, state }, formData){

      
        commit( 'setLoading', true )

        // establecer el formulario al state
        commit('setSearchFormValues', formData)
        // commit('setAPI_PARAMS', { body: ``})
        
        commit('setAPI_PARAMS', { body: `ids=${ formData.ids ? formData.ids  : ''}&page=${ formData.page ? formData.page : '' }&state=${formData.state ? formData.state : ''}&keyword=${formData.keyword ? formData.keyword : ''}&municipality=${formData.city != undefined ? formData.city : ''}&category=${formData.category ? formData.category : ''}&limitProperties=${ formData.limit ? formData.limit : 20 }&m2t=${formData.m2t ? formData.m2t : ''}&m2c=${formData.m2c ? formData.m2c : ''}&bedroom=${formData.bedroom ? formData.bedroom : ''}&bathroom=${formData.bathroom ? formData.bathroom : ''}&pricemax=${formData.pricemax ? formData.pricemax : ''}&pricemin=${formData.pricemin ? formData.pricemin : ''}&type=${formData.category ? formData.category : ''}&operation=${formData.operation  ? formData.operation : ''}&folio=${formData.folio ? formData.folio : ''}&outstanding=${ formData.outstanding ? formData.outstanding : '' }&suburb=${ formData.suburb ? formData.suburb : '' }&keywordAddrs=${ formData.keywordAddrs ? formData.keywordAddrs : '' }&token=${ state.token }`})


        let config = state.API_PARAMS;
      
        const resp = await fetch(state.API_URL + state.SEARCH_PROPERTIES, config).then((res) => res.json())
        
        
        if ( resp.status == 200  ) {
            commit("setPropertiesList", resp.resp.data);
            commit( 'setLoading', false )
            return resp.resp
        } 
  
    },



    async searchVehiculos({ commit, state }, formData ){

        // folio,
        // country,
        // city,
        // pricemin,
        // pricemax,
        // outstanding,
        // keyword,
        // ids,
        // token,
        
        // type,

        // state,
        // municipality,
        // suburb,


        // limit,
        // operation,

        commit('setSearchFormVehiculosValues', formData)


        const resp = await fetch(state.API_URL + state.SEARCH_VEHICULOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `page=${ formData.page }`
                + `${ formData.operation != undefined ? `&operation=${formData.operation}` : '' }`
                + `${ formData.subcat != undefined ? `&subcat=${formData.subcat}` : '' }`
                + `${ formData.brand != undefined ? `&brand=${formData.brand}` : '' }`
                + `${ formData.type != undefined ? `&type=${formData.type}` : '' }`
                + `${ formData.state != undefined ? `&state=${formData.state}` : '' }`
                + `${ formData.municipality != undefined ? `&municipality=${formData.municipality}` : '' }`
                + `${ formData.suburb != undefined ? `&suburb=${formData.suburb}` : '' }`
                + `${ formData.keywordAddrs != undefined ? `&keywordAddrs=${formData.keywordAddrs}` : '' }`
                + `${ formData.year_from != undefined ? `&year_from=${formData.year_from}` : '' }`
                + `${ formData.year_to != undefined ? `&year_to=${formData.year_to}` : '' }`
                + `${ formData.pricemin != undefined ? `&pricemin=${formData.pricemin}` : '' }`
                + `${ formData.pricemax != undefined ? `&pricemax=${formData.pricemax}` : '' }`
                + `&limit=${ 20 }`
                + `&token=${ state.token }`
        }).then((res) => res.json())
        // &type=${ formData.type }
        
        if ( resp.status == 200  ) {
            return resp.resp
        } 
  
    },




    async searchGeneral({ commit, state }, formData ){

        const resp = await fetch(state.API_URL + state.SEARCH_GENERAL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `limit=${ formData.limit }`
        }).then((res) => res.json())
        
        if ( resp.status == 200  ) {

            return resp.resp.data
        } 
  
    },


    async getPropertiesSimilares({ commit, state }, formData ){

        const resp = await fetch(state.API_URL + state.GET_PROPIEDADES_SIMILARES, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `folio=${ formData.folio }`
        }).then((res) => res.json())
        if ( resp.status == 200  ) {
            return resp.resp.data
        } 
  
    },


   
    
    async toIDI({ commit, state }, formData){

        const config = state.API_PARAMS

        commit('setAPI_PARAMS', { body: `state=${formData.state ? formData.state : ''}&municipality=${formData.municipality != undefined ? formData.municipality : ''}&category=${formData.category ? formData.category : ''}&m2t=${formData.m2t ? formData.m2t : ''}&m2c=${formData.m2c ? formData.m2c : ''}&bedroom=${formData.bedroom ? formData.bedroom : ''}&bathroom=${formData.bathroom ? formData.bathroom : ''}&pricemax=${formData.pricemax ? formData.pricemax : ''}&pricemin=${formData.pricemin ? formData.pricemin : ''}&type=${formData.category ? formData.category : ''}&operation=${formData.operation  ? formData.operation : ''}&suburb=${ formData.suburb ? formData.suburb : '' }&token=${ state.token }`})


        const resp = await fetch(state.API_URL + state.IDI, config).then( resp => resp.json() )


        if ( resp.status == 200  ) {
            return resp.resp
        } 
        return null
    },


    async sendToWhatsApp({ commit, state }, formData){


        const resp = await fetch(state.API_URL + state.WHATSFORM, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
                body: `RDx_nombre=${ formData.name }&RDx_correo=${ formData.email }&RDx_telefono=${ formData.whatsapp }&RDx_message=${ formData.message }&RDx_productid=${ formData.productId }`
            },
        ).then( resp => resp.json() )


        if ( resp.status == 200  ) {
            return resp
        } 
        return null
    },


    async getUrlsFooter({ commit, state }){


        const resp = await fetch(state.API_URL + state.GET_URLS, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
                body: ``
            },
        ).then( resp => resp.json() )


        if ( resp.status == 200  ) {
            return resp
        } 
        return null
    },



      async login({ commit, state }, form ){


        commit('setAPI_PARAMS', { body: `RDx_correo=${form.email}&RDx_contra=${form.password}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.LOGIN_USER, config).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.data
        }

    },


    async register({ commit, state }, form ){


        commit('setAPI_PARAMS', { body: `RDx_nombre=${form.name}&RDx_correo=${form.email}&RDx_contra=${form.password}&SDx_empresa=${form.company}&SDx_celular=${form.phone}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.REGISTER_USER, config).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.data
        }

    },



    async sendMain({commit, state}, form ) {

        commit('setAPI_PARAMS', { body: `RDx_nombre=${form.name}&RDx_correo=${form.email}&RDx_message=${form.message}&RDx_telefono=${form.phone}&RDx_productid=${form.idProduct}` } )
      

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.VISIT_CONTACT, config).then((res) => res.json())
    
        if ( resp.status == 200 ) {
            return resp.data
        } else {
            return null
        }

    },

    async getSliders({commit, state}, category = 1 ) {

        commit('setAPI_PARAMS', { body: `category=${ category }` } )

    
        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.SLIDERDESTACADOS, config).then((res) => res.json())
    
        if ( resp.status == 200 ) {
            return resp.resp
        } else {
            return null
        }

    },


    async getOutstanding({ commit, state } ){
      
        commit( 'setLoading', true )

        commit('setAPI_PARAMS', { body: `limitProperties=${ 20 }&outstanding=${ 1 }`})
        
        let config = state.API_PARAMS;
      
        const resp = await fetch(state.API_URL + state.SEARCH_PROPERTIES, config).then((res) => res.json())
        
        if ( resp.status == 200  ) {
            commit("setOutstanding", resp.resp.data);
            return resp.resp.data
        } 
        commit('setLoading', false )
  
      },


      async getVehiculosOutstanding({ state } ){
      
        const resp = await fetch(state.API_URL + state.SEARCH_VEHICULOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `limit=${ 20 }&outstanding=${ 1 }`
        }).then((res) => res.json())
   
        if ( resp.status == 200  ) {
            return resp.resp.data
        } 
  
      },


      async getVehiculoById({ state }, folio ){
      

        const resp = await fetch(state.API_URL + state.GET_VEHICULODETAIL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `category=${2}&folio=${ folio }`
        }).then((res) => res.json())
        
        if ( resp.status == 200  ) {
            return resp.data
        } 
  
      },



      async forgotPassword({commit, state}, form ) {

        commit('setAPI_PARAMS', { body: `email=${form.email}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.FORGOT_PASSWORD, config).then((res) => res.json())
        .catch( e => console.log(e))

        /* Api clasificados.host */
        if (!resp) {
            return null
        }
        /* FIN Api clasificados.host */

        
        if ( resp.status != 200 ) {
            return null
        } 
        
        return resp.data
        

    },


    async verifyToken({commit, state}, token){

        commit('setAPI_PARAMS', { body: `token=${token}` } )

        const config = state.API_PARAMS

       const resp = await fetch(state.API_URL + state.VERIFICATE_PASS, config).then((res) => res.json())
 
       return resp.data
        
    },


    async changePassword({commit, state}, values){

        commit('setAPI_PARAMS', { body: `token=${values.token}&RDx_contra=${values.password}` } )

        const config = state.API_PARAMS

        const resp = await fetch(state.API_URL + state.CHANGE_PASSWORD, config).then((res) => res.json())

        return resp.data


    },


    async getNews({ commit, state } ) {

      

        const resp = await fetch('https://api.newscatcherapi.com/v2/search?q=inmobiliarias&page_size=4&countries=mx', {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '8ju2OkZitjD-igaZTJ99_51lRRgBsQS9Vmq50FkAD_c'
            }
        }).then( resp => resp.json() )
        if ( resp.status == 'error'){
            return null;
        } else {
            return resp.articles;
        }

        
    },



    
    async getMarcasVehiculos({ commit, state } ){ 

        const resp = await fetch(state.API_URL + state.GET_MARCAS_VEHICULOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: `category=2`
        }).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            commit('setMarcasVehiculos', resp.data)
            return resp.data
        }
  
    },


    async getTiposVehiculos({ commit, state }, brand ){ 

        const resp = await fetch(state.API_URL + state.GET_TIPOS_VEHICULOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: `category=2&brand=${ brand }`
        }).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            commit('setTiposVehiculos', resp.data)
            return resp.data
        }
  
    },

    async getModelosVehiculos({ commit, state }, data ){ 

        const resp = await fetch(state.API_URL + state.GET_MODELOS_VEHICULOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: `category=2&brand=${ data.brand }&subcategory=${ data.subcategory }`
        }).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            commit('setModelosVehiculos', resp.data)
            return resp.data
        }
  
    },


    async getDevs({ commit, state } ){ 

        const resp = await fetch(state.API_URL + state.GET_DEVS, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: `tipo=1`
        }).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            commit('setDevs', resp.resp.data)
            return resp.resp.data
        }
  
    },

    async getDevById({ commit, state }, idDev ){ 

        const resp = await fetch(state.API_URL + state.GET_DEVDETAIL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: `tipo=3&searchid=${idDev}`
        }).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.resp.data
        }
  
    },

    async getPrototypeById({ commit, state }, id ){ 

        const resp = await fetch(state.API_URL + state.GET_DEVDETAIL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: `tipo=4&searchid=${id}`
        }).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.resp.data
        }
  
    },



    // NUEVO BUSCADOR
    async getTotalsSearch({ commit, state }, formData ){

        const resp = await fetch(state.API_URL + state.GETTOTALS, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `ids=${ formData.ids ? formData.ids  : ''}&page=${ formData.page ? formData.page : '' }&state=${formData.state ? formData.state : ''}&keyword=${formData.keyword ? formData.keyword : ''}&municipality=${formData.city != undefined ? formData.city : ''}&category=${formData.category ? formData.category : ''}&limit=${ formData.limit ? formData.limit : 20 }&m2t=${formData.m2t ? formData.m2t : ''}&m2c=${formData.m2c ? formData.m2c : ''}&bedroom=${formData.bedroom ? formData.bedroom : ''}&bathroom=${formData.bathroom ? formData.bathroom : ''}&pricemax=${formData.pricemax ? formData.pricemax : ''}&pricemin=${formData.pricemin ? formData.pricemin : ''}&type=${formData.type ? formData.type : ''}&operation=${formData.operation  ? formData.operation : ''}&folio=${formData.folio ? formData.folio : ''}&outstanding=${ formData.outstanding ? formData.outstanding : '' }&suburb=${ formData.suburb ? formData.suburb : '' }&keywordAddrs=${ formData.keywordAddrs ? formData.keywordAddrs : '' }&token=${ state.token }`
        }).then((res) => res.json())
        // &type=${ formData.type }
        
        if ( resp.status == 200  ) {
            return resp.resp[0].total;
        }  
  
    },

    async getTotalsSearchv2({ commit, state }, formData ){

        const resp = await fetch(state.API_URL + state.GETTOTALS, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `page=${ formData.page ? formData.page : '' }&category=${formData.category ? formData.category : 1}&params=${formData.params ? formData.params : ''}`
        }).then((res) => res.json())
        // &type=${ formData.type }
        
        if ( resp.status == 200  ) {
            return resp.resp[0].total;
        }  
  
    },

    async search({ commit, state }, formData ){

        commit( 'setLoading', true )
        commit('setSearchFormValues', formData)

        const resp = await fetch(state.API_URL + state.SEARCH, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `ids=${ formData.ids ? formData.ids  : ''}&page=${ formData.page ? formData.page : '' }&state=${formData.state ? formData.state : ''}&keyword=${formData.keyword ? formData.keyword : ''}&municipality=${formData.city != undefined ? formData.city : ''}&category=${formData.category ? formData.category : ''}&limit=${ formData.limit ? formData.limit : 20 }&m2t=${formData.m2t ? formData.m2t : ''}&m2c=${formData.m2c ? formData.m2c : ''}&bedroom=${formData.bedroom ? formData.bedroom : ''}&bathroom=${formData.bathroom ? formData.bathroom : ''}&pricemax=${formData.pricemax ? formData.pricemax : ''}&pricemin=${formData.pricemin ? formData.pricemin : ''}&type=${formData.type ? formData.type : ''}&operation=${formData.operation  ? formData.operation : ''}&folio=${formData.folio ? formData.folio : ''}&outstanding=${ formData.outstanding ? formData.outstanding : '' }&suburb=${ formData.suburb ? formData.suburb : '' }&keywordAddrs=${ formData.keywordAddrs ? formData.keywordAddrs : '' }&token=${ state.token }`
        }).then((res) => res.json())

        if ( resp.status == 200  ) {
            commit("setPropertiesList", resp.resp.data);
            commit( 'setLoading', false )
            return resp.resp
        }  
  
    },

    async searchv2({ commit, state }, formData ){

        commit( 'setLoading', true )
        commit('setSearchFormValues', formData)

        const resp = await fetch(state.API_URL + state.SEARCH, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: `page=${ formData.page ? formData.page : '' }&category=${formData.category ? formData.category : 1}&params=${formData.params ? formData.params : ''}`
        }).then((res) => res.json())

        if ( resp.status == 200  ) {
            commit("setPropertiesList", resp.resp.data);
            commit( 'setLoading', false )
            return resp.resp
        }  
  
    },

    async getDevsMunicipalities({ commit, state }, idDev ){ 

        const resp = await fetch(state.API_URL + state.GET_DEVMUNICIPALITIES, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
            body: ``
        }).then((res) => res.json())
        
        if ( resp.status == 200 ) {
            return resp.data
        }
  
    },


}


export default actions