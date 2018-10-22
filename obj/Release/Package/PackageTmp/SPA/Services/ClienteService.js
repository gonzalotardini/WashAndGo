angular.module("app").factory("ClienteService", function ($http, $q) {

    var service = {};

    service.VerificarCliente = function () {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/VerificarCliente'

        });

        return $q.when(promise);

    };   


    service.ObtenerLavadoAbierto = function () {
        var promise = $http({
            method: 'get',
            url: '/Cliente/ObtenerLavadoAbierto'

        });

        return $q.when(promise);

    };   


    service.ObtenerMarcas = function () {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/ObtenerMarcas'

        });

        return $q.when(promise);

    };


    service.ObtenerModelos = function (Marca) {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/obtenerModelos',
            params: {
                Marca: Marca
            }
        });

        return $q.when(promise);

    };

    service.GuardarDatos = function (Nombre, Apellido, DNI, Email, Marca,Modelo) {
        var promise = $http({
            method: 'post',
            url: '/Cliente/GuardarDatos',
            params: {
                Nombre: Nombre,
                Apellido: Apellido,
                DNI: DNI,
                Email: Email,               
                Marca: Marca,
                Modelo:Modelo
            }
        });

        return $q.when(promise);

    };


    service.ObtenerDatos = function () {
        var promise = $http({
            method: 'get',
            url: '/Cliente/ObtenerDatos'

        });

        return $q.when(promise);

    };


    return service;
})




