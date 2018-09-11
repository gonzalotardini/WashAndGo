var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/solicitarlavado',
        {
            templateUrl: 'SPA/Views/SolicitarLavado.html',
            controller: 'SolicitarLavadoController',
            data: { requireLogin: true}
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
        .otherwise({
            templateUrl: 'SPA/Views/Home.html',
            //////controller: 'LoginController'
        });


});
