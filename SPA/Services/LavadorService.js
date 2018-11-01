angular.module("app").factory("LavadorService", function ($http, $q) {

    var service = {};

    //service.VerificarCliente = function () {
    //    var promise = $http({
    //        method: 'get',
    //        url: '/SolicitarLavado/VerificarCliente'

    //    });

    //    return $q.when(promise);

    //};


    //service.ObtenerLavadoAbierto = function () {
    //    var promise = $http({
    //        method: 'get',
    //        url: '/Cliente/ObtenerLavadoAbierto'

    //    });

    //    return $q.when(promise);

    //};


    //service.ObtenerMarcas = function () {
    //    var promise = $http({
    //        method: 'get',
    //        url: '/SolicitarLavado/ObtenerMarcas'

    //    });

    //    return $q.when(promise);

    //};


    //service.ObtenerModelos = function (Marca) {
    //    var promise = $http({
    //        method: 'get',
    //        url: '/SolicitarLavado/obtenerModelos',
    //        params: {
    //            Marca: Marca
    //        }
    //    });

    //    return $q.when(promise);

    //};

    service.GuardarDatos = function (lavador) {
        var promise = $http({
            method: 'post',
            url: '/Lavador/GuardarDatos',
            data: {
                lavador:lavador
            }
        });

        return $q.when(promise);

    };

    service.GuardarServicios = function (servicios) {
        var promise = $http({
            method: 'post',
            url: '/Lavador/GuardarServicios',
            data: {
                servicios: servicios
            }
        });

        return $q.when(promise);

    };


    service.ObtenerDatos = function () {
        var promise = $http({
            method: 'get',
            url: '/Lavador/ObtenerDatos'

        });

        return $q.when(promise);

    };

    service.VerifyAuth = function () {
        var promise = $http({
            method: 'get',
            url: '/Lavador/VerifyAuth'

        });

        return $q.when(promise);
    }

    service.GetServiciosRealizo = function () {
        var promise = $http({
            method: 'get',
            url: '/Lavador/GetServiciosRealizo'
        });
        return $q.when(promise);
    };

    service.GetServiciosNoRealizo = function () {
        var promise = $http({
            method: 'get',
            url: '/Lavador/GetServiciosNoRealizo'
        });
        return $q.when(promise);
    };

    return service;
})
