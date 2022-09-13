
const state = {
    API_URL: "https://www.sandbox.clasificadoscontacto.com/data/api/",
    // API_URL: "https://www.clasificadoscontacto.host/api/",
    API_PARAMS: {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: {},
    },
    GET_STATES: '?site=WHFNUnMvempwajFZNUYyaDNkenpFTXRsdnhDR3lDNVNNb3hzQVZDWVJRND0=',
   // GET_CITIES: '?site=bSthSTBJZEwrc0xZaWFrcTNLMVdRVElzdmxKU0tpZ3BkcjNSWEtwRjMzTT0=',
    GET_CITIES: '?site=YkVKanNRdmE3U29DV09kVHJxdkVIT3pKNnRkVU0rQXJxRHVpQUFJTmdnZz0=',
    GET_PRODUCTSTYPE: '?site=UHZLWEF6Q2FtZjFjWHNrWDNORjNOQXpJaTRFNG9zOWtoTHNQczRXUW1GMD0=',
    GET_PROPERTYDETAIL: '?site=elBvMEtpVmt4Qjk1U3dhMXNENDZQZWpQSnJPNjBOM3FxL203d1VRQ2U2TT0=',
    SEARCH_GENERAL: '?site=SExZaXRmb3lXMkhybEJWc1NnOWszb1MwUjFlS1ZQTTJicXdkWnM2eHI4RT0=',
    SEARCH_PROPERTIES: '?site=aHoxd1ZFOUdhYlRmNC9zMWRSNmdpTm15VVptaWE4aUhCaysraEk1ZFhJND0=',
    SEARCH_VEHICULOS: '?site=dXVEcWRqeXhRckQrcDQvU3hJNzZ2cFkvM205WFNJTVBYeEYrMjJaZFl0dz0=',
    LOGIN_USER: '?site=a0VXNDI5SHhCSlljR1BXaThyL2kyQT09',
    REGISTER_USER: '?site=bERwdld0UGkwNU5iVmh4cDZzbU1BQT09',
    VISIT_CONTACT: '?site=VlRndFVwVVl2MExnVGtxVW4rZzhKZz09',
    FORGOT_PASSWORD: '?site=bXoyN0tvN2tRdHFLZE5WYUVHYkxyZnBhYUZvSnVrM29LT1NPazRtSUE3az0=',
    VERIFICATE_PASS: '?site=RlhlaWptQy9wSU1oZFhTQU1RMTg4Z0F2VmdZMHRFWnhvL2ExZU1oeWZQYz0=',
    CHANGE_PASSWORD: '?site=c3ord1N0azN1MVlTSXl2SGRMZHZzVnFlKzZ1QnM3Qm9pNGVUS05MQUVPTT0=',
    GET_COLONIAS: '?site=ditYbW90MU1LRGp5OTlkTkpET3F1dz09',
    RENEW_TOKEN:'?site=eWsySVBlWldtQW42Z3Y1c1lQYTVVZz09',

    IDI: '?site=ODA1SmQ4U1RsMTczcjVnUThzNUQycTNwTGdaUVJ2enpmNDNaM0Q2cG5xbz0=',
    WHATSFORM: '?site=MWM2OW1oTWhXVG9JcnlNNThYL1gwSHlZRFEyTXRzZHFXeWYzT3QwR1BWRT0=',
    SLIDERDESTACADOS: '?site=a0VmZ2hyUDBoZGxxRmt2RHJnNkl6UT09',


    // VEHÍCULOS
    GET_MARCAS_VEHICULOS: '?site=SEhrRHYrMWJpY0ZMUlUzUlJKZWxEZz09',
    GET_TIPOS_VEHICULOS: '?site=eEd6YVBzY2MzRmM2NEhTbzQrbXp0c1dKczlyODZid3hyd1N2eE5adzdTOD0=',
    GET_MODELOS_VEHICULOS: '?site=MktPTjlBWnU1VXdEanRJUFdHbHZ6dz09',
    GET_VEHICULODETAIL: '?site=R25EbUlHWFZWeWFsUjNnSDFQeU1wUUVaRFRpTEJTQ1ZlbXJmai9sbG1DST0=',

    // DESARROLLOS
    GET_DEVS: '?site=a1BoT2JmNmxvL1dRcit0VmIwbkRzSTI1NWVsbXF6UDdLYitTVlVadG5LMD0=',
    GET_DEVDETAIL: '?site=a1BoT2JmNmxvL1dRcit0VmIwbkRzSTI1NWVsbXF6UDdLYitTVlVadG5LMD0=',
    GET_DEVMUNICIPALITIES: '?site=RmNNNVpJaXVtemg5VGZjL2FpcHV0UT09',

    // NUEVA BUSQUEDA
    GETTOTALS: '?site=VFp2ckNTNmhjUGdNYk93UythUHJxSTVMdktETC9YaG9tTWIyTDlPWCtZaz0=',
    SEARCH: '?site=cU5OVVhzSUpoMjZhdSs5YTJyaTRPK3FNamZ0YVBnSnpQbDJ6M1Z3OTcrND0=',

    // FOOTER
    GET_URLS: '?site=aS9aQzRTZkY3QkpvRjIvUXBUNVBHZz09',

    
    token: '',
    userStateLocation: {
        folio: "61",
        image: "https://www.clasificadoscontacto.com/view/assets/images/states/DF.jpg",
        name: "Distrito Federal"
    },

    /* Listado de Estados */
    statesList: [],
    /* Listado de Ciudades */
    citiesList: [],
    /* Listado de Colonias */
    coloniasList: [],
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
        suburb: '',
        type: '',
        operation: null, //1
        page: 1
    },
     /* Formulario busqueda */
    searchFormVehiculos: {
        marca: undefined,
        tipo: undefined,
        modelo: undefined,
        state: undefined,
        state: undefined,
        municipality: undefined,
        colony: undefined,
    },
    marcasVehiculos: [],
    tiposVehiculos: [],
    modelosVehiculos: [],


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
    userLogged: null,
    showSearchGeneral: false,
    showIDI: false,
    showWhatsForm: false,
    coockiesAccepted: true,

    // Formulario de whats
    whatsContactValues: {
        nameInmo: '',
        whatsappInmo: '',
    },
    // DEVS
    devsList: [],


    // FOOTER 

}


export default state;