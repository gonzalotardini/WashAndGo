var app = angular.module("app", ['ngRoute', 'angularUtils.directives.dirPagination', 'pascalprecht.translate']);

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
        .when('/BuscarLavado',
            {
                templateUrl: 'SPA/Views/BuscarLavados.html',
                controller: 'BuscarLavadoController'
            })
        .otherwise({
            templateUrl: 'SPA/Views/Home.html',
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
        'ComodidadDesc':'Sin moverte de donde estés y con solo un click, llegamos.'
        
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
        'ComodidadDesc': 'Without moving from where you are and with just one click, we arrive.'
    });

    $translateProvider.preferredLanguage('en');


}]);

app.controller("generalController", ["$scope", "$translate", function ($scope, $translate) {
    $scope.changeLanguage = function (lang) {
        $translate.use(lang);
    };
}]);
