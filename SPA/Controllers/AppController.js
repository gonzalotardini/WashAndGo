var app = angular.module("app", ['ngRoute', 'angularUtils.directives.dirPagination']);

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
