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
        'TextContacto':'Envianos tu consulta al siguiente mail y te responderemos a la brevedad.'


        
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
        'TextContacto': 'Send us your doubts to the following email and we will respond as soon as possible.'
    });

    $translateProvider.preferredLanguage('es');


}]);

app.controller("generalController", ["$scope", "$translate", function ($scope, $translate) {
    $scope.changeLanguage = function (lang) {
        $translate.use(lang);
    };
}]);
