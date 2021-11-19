
const state = {
    // API_URL: "https://www.clasificadoscontacto.com/api/",
    API_URL: "https://www.clasificadoscontacto.host/api/",
    API_PARAMS: {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: {},
    },
    GET_STATES: '?site=WHFNUnMvempwajFZNUYyaDNkenpFTXRsdnhDR3lDNVNNb3hzQVZDWVJRND0=',
    GET_CITIES: '?site=bSthSTBJZEwrc0xZaWFrcTNLMVdRVElzdmxKU0tpZ3BkcjNSWEtwRjMzTT0=',
    GET_PRODUCTSTYPE: '?site=UHZLWEF6Q2FtZjFjWHNrWDNORjNOQXpJaTRFNG9zOWtoTHNQczRXUW1GMD0=',
    GET_PROPERTYDETAIL: '?site=elBvMEtpVmt4Qjk1U3dhMXNENDZQZWpQSnJPNjBOM3FxL203d1VRQ2U2TT0=',
    SEARCH_PROPERTIES: '?site=aHoxd1ZFOUdhYlRmNC9zMWRSNmdpTm15VVptaWE4aUhCaysraEk1ZFhJND0=',
    LOGIN_USER: '?site=a0VXNDI5SHhCSlljR1BXaThyL2kyQT09',
    REGISTER_USER: '?site=bERwdld0UGkwNU5iVmh4cDZzbU1BQT09',
    VISIT_CONTACT: '?site=VlRndFVwVVl2MExnVGtxVW4rZzhKZz09',
    FORGOT_PASSWORD: '?site=bXoyN0tvN2tRdHFLZE5WYUVHYkxyZnBhYUZvSnVrM29LT1NPazRtSUE3az0=',


    /* Listado de Estados */
    statesList: [],
    /* Listado de Ciudades */
    citiesList: [],
    /* Listado de propiedades por tipo, obtenidas por nombre de la ciudad*/
    productsType: [],
    /* Formulario busqueda */
    searchForm: {
        bathroom: '',
        bedroom: '',
        category: '',
        city: '',
        keyword: '',
        limit: '',
        m2c: '',
        m2t: '',
        outstanding: '',
        pricemax: '',
        pricemin: '',
        state: '',
        type: '',
        page: 1
    },
    /* CARGANDO... */
    isLoading: true,
    /* Listado de propiedades */
    propertiesList: [],
    /* Listado de propiedades sobresalientes */
    outstanding: [],
    /* Types / Categorias */
    propertiesTypes: [
        { name: 'Casa',               value: 1 },
        { name: 'Departamento',       value: 2 },
        { name: 'Local Comercial',    value: 3 },
        { name: 'Terreno',            value: 4 },
        { name: 'Oficina',            value: 5 },
        { name: 'Conjunto Cerrado',   value: 6 },
        { name: 'Rancho',             value: 7 },
        { name: 'Membresia',          value: 8 },
        { name: 'Hotel',              value: 9 },
        { name: 'Marina',             value: 10 },
        { name: 'Inversiones',        value: 11 },
        { name: 'Bodega',             value: 12 },
        { name: 'Edificio',           value: 13 },
        { name: 'Casa Comercial',     value: 14 },
        { name: 'Estacionamiento',    value: 15 },
        { name: 'Edificio Comercial', value: 16 },
        { name: 'Granja',             value: 17 },
        { name: 'Anexo ',             value: 18 },
    ],
    /* Folio del usuario logeado */
    userLogged: null

}


export default state;