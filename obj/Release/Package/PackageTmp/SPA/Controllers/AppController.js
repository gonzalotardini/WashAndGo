var app = angular.module("app", ['ngRoute', 'angularUtils.directives.dirPagination', 'pascalprecht.translate','angularFileUpload']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/solicitarlavado',
        {
            templateUrl: 'SPA/Views/SolicitarLavado.html',
            controller: 'SolicitarLavadoController'          
        })
        .when('/',
        {
            templateUrl: 'SPA/Views/Home.html',
            //controller: 'GestionController'
        })
        .when('/error',
        {
            templateUrl: 'SPA/Views/Error.html',
            //controller: 'GestionController'
        })
        .when('/cliente',
        {
            templateUrl: 'SPA/Views/client.html',
            controller: 'ClienteController'
        })
        .when('/lavador',
            {
                templateUrl: 'SPA/Views/lavador.html',
                controller: 'LavadorController'
        })
        .when('/reportes',
            {
                templateUrl: 'SPA/Views/Reportes.html',
                controller: 'ReportesController'
        })
        .when('/BuscarLavado',
            {
                templateUrl: 'SPA/Views/BuscarLavados.html',
                controller: 'BuscarLavadoController'
        })
        .when('/Upload',
            {
                templateUrl: 'SPA/Views/Upload.html',
                controller: 'UploadController'
            })
        .otherwise({
            templateUrl: 'SPA/Views/Home.html'
            //////controller: 'LoginController'
        });


});


app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('es', {
        'TITLE': 'LAVAMOS TU AUTO DONDE SEA QUE ESTÉS',
        'SOLICITAR LAVADO': 'SOLICITAR LAVADO',
        'MI CUENTA': 'Mi Cuenta',
        'Secundario': 'No te muevas de tu casa, nosotros llegamos y lavamos tu auto.',
        'Solicita tu lavado': '¡Solicitá tu lavado!',
        '¿Quiénes Somos?': '¿Quiénes Somos?',
        'Mision': 'Brindamos la facilidad de contratar un servicio de lavado automotor a domicilio a cualquier residente argentino que sea amante de su auto y desee mantenerlo siempre limpio y vistoso, asegurando calidad de servicio y tranquilidad.',
        'Calidad': 'CALIDAD',
        'CalidadDesc': 'Profesionales capacitados, productos de primera calidad y respuesta inmediata.',
        'Comodidad': 'COMODIDAD',
        'ComodidadDesc': 'Sin moverte de donde estés y con solo un click, llegamos.',
        'MARCA':'MARCA',
        'MODELO':'MODELO',
        'SEGMENTO': 'SEGMENTO',
        'Crear Nuevo': 'Crear Nuevo',
        'NuestrosServicios': 'Nuestros Servicios',
        'Contacto': 'Contacto',
        'BuscarLavado': 'Buscar Lavado',
        'Autos': 'Autos',
        'Precios': 'Precios',
        'Marcas': 'Marcas',
        'Servicios': 'Servicios',
        'Reportes': 'Reportes',
        'LavadoExterior': 'Lavado Exterior',
        'LavadoInterior': 'Lavado Interior',
        'CeraLiquida': 'Cera Líquida',
        'CeraPasta': 'Cera en Pasta',
        'AspiradoInterior': 'Aspirado Interior',
        'LimpiezaPlasticos': 'Limpieza de Plásticos',
        'TituloServicios': '¡No más tiempos de espera antes y durante el lavado de tu auto! Ofrecemos tres servicios que se acomodan a tus necesidades, solicitá el tuyo!',
        'Basico': 'Básico',
        'Estandar': 'Estandar',
        'Contactanos': 'Contactanos',
        'TextContacto': 'Envianos tu consulta al siguiente mail y te responderemos a la brevedad.',
        'IniciarSesion': ' Iniciar Sesión',
        'Registrar': ' Registrarse',
        'Contraseña': 'Contraseña',
        'ConfirmarContraseña': 'Confirmar Contraseña',
        'MostrarContrasena': 'Mostrar Contraseña',
        'Recordarme': 'Recordarme',
        'Olvide': 'Olvide Mi Contraseña',
        'DatosPersonales': 'Datos Personales',
        'PoseeLavado': 'Usted ya posee un lavado en proceso, no puede contratar otro hasta que este no finalice!',
        'MisLavados': 'Mis Lavados',
        'CualEsTuAuto': '¿Cuál es tu auto?',
        'Elegi': 'Elegí marca y modelo del vehiculo a lavar',
        'Segmento': 'Segmento',
        'QueTipo': '¿Qué tipo de lavado querés?',
        'Elegi2': 'Elegí el servicio ideal para tu vehículo',
        'SolicitarLavado': ' Solicitar Lavado',
        'SeleccioneServicio': 'Seleccione Servicio',
        'ElegiMarca': 'Seleccione Marca',
        'ElegiModelo': 'Seleccione Modelo',
        'DetallePago': 'Detalle de Pago',
        'Nombre': 'Nombre',
        'Apellido': 'Apellido',
        'N': 'Número de Tarjeta',
        'Vencimiento': 'Vencimiento',
        'Pagar': 'Pagar',
        'Procesando': 'Procesando Pago',
        'CreadaOK': 'Solicitud de lavado creada correctamente!',
        'Redirigiendo': 'Redirigiendo...',
        'TuLavado': 'Tu Lavado',
        'Estado': 'Estado',
        'Servicio': 'Servicio',
        'Auto':'Auto',
        'Direccion': 'Dirección',
        'CancelarLavado': 'Cancelar Lavado',
        'BuscandoLavador': 'Buscando Lavador...',
        'Lavador': 'Lavador',
        'Llegada': 'Hora de Llegada',
        'LavadorNoLLego': 'El lavador nunca llegó',
        'Llego': 'Llegó el lavador',
        'ClienteNoRespondio': 'El cliente no respondió',
        'Finalizar': 'Finalizar lavado',
        'LavadorEnCamino': 'El lavador está en camino!',
        'Cancelando': 'Indique por qué va a cancelar el lavado:',
        'Comentario': 'Comentario',
        'LavadorLlego': 'Tu lavador ha llegado!',
        'EnProceso': 'Lavado en proceso...',
        'Califica': 'Califica el lavado',
        'Calificacion': 'Calificación:',
        'Fecha': 'Fecha',
        'Detalle': 'Detalle',
        'DetalleLavado': 'Detalle del Lavado',
        'Precio': 'Percio',
        'CambiarContraseña': 'Cambiar Contraseña',
        'ServiciosQueRealizo': 'Servicios que realizo',
        'Cliente': 'Cliente',
        'Realizo': 'Realizo',
        'NoRealizo': 'No realizo',
        'Modificar': 'Modificar',
        'Aceptar': 'Aceptar',
        'BuscarLavados': 'Buscar Lavados',
        'IngresaUbicacion': 'Ingresa tu ubicación',
        'Distancia': 'Distancia',
        'RealizarLavado': 'Realizar Lavado',
        'LavadoAsignado': 'Se ha asignado correctamente el lavado',
        'TenesAsignado': 'Tenés un lavado asignado!',
        'Llegue': 'Llegué al domicilio',
        'HasLlegado': 'Has Llegado!',
        'NoRespondio':'El cliente no respondió'
    });

    $translateProvider.translations('en', {
        'TITLE': 'WE WASH YOUR CAR WHEREVER YOU ARE',
        'SOLICITAR LAVADO': 'REQUEST A WASH',
        'MI CUENTA': 'My Account',
        'Secundario': 'Do not move from your home, we arrive and wash your car.',
        'Solicita tu lavado': 'Request your wash!',
        '¿Quiénes Somos?': 'About us',
        'Mision': 'We offer the ease of hiring a car wash service to any Argentine resident who is a car lover and wants to keep it always clean and colorful, ensuring quality of service and peace of mind.',
        'Calidad': 'QUALITY',
        'CalidadDesc': 'Trained professionals, first quality products and immediate response.',
        'Comodidad': 'COMFORT',
        'ComodidadDesc': 'Without moving from where you are and with just one click, we arrive.',
        'MARCA': 'BRAND',
        'MODELO': 'MODEL',
        'SEGMENTO': 'SEGMENT',
        'Crear Nuevo': 'Create new',
        'NuestrosServicios': 'Our Services',
        'Contacto': 'Contact',
        'BuscarLavado': 'Search Wash',
        'Autos': 'Cars',
        'Precios': 'Prices',
        'Marcas': 'Brands',
        'Servicios': 'Servies',
        'Reportes': 'Reports',
        'LavadoExterior': 'Outside Washing',
        'LavadoInterior': 'Interior Washing',
        'CeraLiquida': 'Liquid Wax',
        'CeraPasta': 'Wax in Paste',
        'AspiradoInterior': 'Interior Sucked',
        'LimpiezaPlasticos': 'Plastic Cleaning',
        'TituloServicios': 'No more waiting times before and during the washing of your car! We offer three services that suit your needs, request yours!',
        'Basico': 'Basic',
        'Estandar': 'Standar',
        'Contactanos': 'Contact Us',
        'TextContacto': 'Send us your doubts to the following email and we will respond as soon as possible.',
        'IniciarSesion': ' Log In',
        'Registrar': ' Register',
        'Contraseña': 'Password',
        'ConfirmarContraseña': 'Confirm Password',
        'MostrarContrasena': 'Show Password',
        'Recordarme': 'Remember Me',
        'Olvide': 'Forgot My Password',
        'SinDatos': 'Attention!Enter your personal information before hiring a wash!',
        'DatosPersonales': 'Personal Information',
        'PoseeLavado': 'You already have a wash in progress, you can not hire another until it is finished!',
        'MisLavados': 'My Washes',
        'CualEsTuAuto': 'Wich is your car?',
        'Elegi': 'Chose brand and model',
        'Segmento': 'Segment',
        'QueTipo': 'Wich type of wash do you want?',
        'Elegi2': 'Choose the ideal service for your car',
        'SolicitarLavado': ' Get Wash',
        'SeleccioneServicio': 'Choose service',
        'ElegiMarca': 'Choose Brand',
        'ElegiModelo': 'Choose Model',
        'Nombre': 'Name',
        'Apellido': 'Surname',
        'N': 'Card Number',
        'Vencimiento': 'Expiration',
        'Pagar': 'Pay',
        'DetallePago': 'Payment Details',
        'Procesando': 'Procesing Payment',    
        'CreadaOK': 'Wash application created correctly!',
        'Redirigiendo': 'Redirecting...',
        'TuLavado': 'Your Wash',
        'Estado': 'State',
        'Servicio': 'Service',
        'Auto': 'Car',
        'Direccion': 'Address',
        'CancelarLavado': 'Cancel Wash',
        'BuscandoLavador': 'Looking For Washer...',
        'Lavador': 'Washer',
        'Llegada': 'Arrival',
        'LavadorNoLLego': 'Washer never arrived',
        'Llego': 'Washer arrived',
        'ClienteNoRespondio': 'Client never answered',
        'Finalizar': 'Finish wash',
        'LavadorEnCamino': 'Washer is on way!',
        'Cancelando': 'Tell us why are you canceling the wash:',
        'Comentario': 'Coment:',
        'LavadorLlego': 'Your washer has arrived!',
        'EnProceso': 'Wash in process',
        'Califica': 'Rate the wash',
        'Calificacion': 'Rate:',
        'Fecha': 'Date',
        'Detalle': 'Detail',
        'DetalleLavado': 'Wash Detail',
        'Precio': 'Price',
        'CambiarContraseña': 'Change Password',
        'ServiciosQueRealizo': 'Services that I do',
        'Cliente': 'Client',
        'Realizo': 'I do',
        'NoRealizo': 'Don´t do',
        'Modificar': 'Modify',
        'Aceptar': 'Accept',
        'BuscarLavados': 'Search washes',
        'IngresaUbicacion': 'Select your address',
        'Distancia': 'Distance',
        'RealizarLavado': 'Wash Car',
        'LavadoAsignado': 'Wash asigned correctly',
        'TenesAsignado': 'You have a wash asigned!',
        'Llegue': 'I arrived',
        'HasLlegado': 'You have arrived!',
        'NoRespondio': 'Client didn´t answer'
       
    });

    $translateProvider.preferredLanguage('es');


}]);

app.controller("generalController", ["$scope", "$translate", function ($scope, $translate) {
    $scope.changeLanguage = function (lang) {
        $translate.use(lang);
    };
}]);
