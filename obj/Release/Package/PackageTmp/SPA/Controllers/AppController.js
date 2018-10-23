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
        'MI CUENTA': 'Mi Cuenta'
    });

    $translateProvider.translations('en', {
        'TITLE': 'WE WASH YOUR CAR WHEREVER YOU ARE',
        'SOLICITAR LAVADO': 'REQUEST A WASH',
        'MI CUENTA': 'My Account'
    });

    $translateProvider.preferredLanguage('en');


}]);

app.controller("generalController", ["$scope", "$translate", function ($scope, $translate) {
    $scope.changeLanguage = function (lang) {
        $translate.use(lang);
    };
}]);
