var app = angular.module("app", ['ngRoute']);

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
        .otherwise({
            templateUrl: 'SPA/Views/Home.html',
            //////controller: 'LoginController'
        });


});
