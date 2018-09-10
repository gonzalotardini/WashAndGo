angular.module("app").factory("SolicitarLavadoService", function ($http, $q) {

    var service = {};

    service.SolicitarLavado = function () {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/obtenerMarcas'
        });

        return $q.when(promise);

    };

    service.ObtenerServicios = function () {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/obtenerServicios'
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

    service.ObtenerSegmento = function (Modelo) {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/obtenerSegmento',
            params: {
                Modelo: Modelo
            }
        });

        return $q.when(promise);

    };


    service.ObtenerTotal = function (idSegmento, idServicio) {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/obtenerTotal',
            params: {
                idSegmento: idSegmento,
                idServicio: idServicio
            }
        });

        return $q.when(promise);

    };

    service.CrearSolicitud = function (idSegmento, idServicio) {
        var promise = $http({
            method: 'post',
            url: '/SolicitarLavado/obtenerTotal',
            params: {
                idSegmento: idSegmento,
                idServicio: idServicio
            }
        });

        return $q.when(promise);

    };



    return service;
})




