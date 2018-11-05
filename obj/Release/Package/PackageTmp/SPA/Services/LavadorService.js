angular.module("app").factory("LavadorService", function ($http, $q) {

    var service = {};

   
    service.GetLavadoAbierto = function () {
        var promise = $http({
            method: 'get',
            url: '/Lavador/GetLavadoAbierto'

        });

        return $q.when(promise);

    };



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

    service.LLegue = function (idlavado) {
        var promise = $http({
            method: 'post',
            url: '/SolicitarLavado/LLegoLavador',
            data: {
                idlavado: idlavado
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
