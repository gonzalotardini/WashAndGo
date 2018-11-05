angular.module("app").factory("ReportesService", function ($http, $q) {

    var service = {};


    //service.VerifyAuth = function () {
    //    var promise = $http({
    //        method: 'get',
    //        url: '/SolicitarLavado/VerifyAuthLavador'

    //    });

    //    return $q.when(promise);

    //};

    //service.DatosCompletos = function () {
    //    var promise = $http({
    //        method: 'get',
    //        url: '/SolicitarLavado/DatosCompletosLavador'

    //    });

    //    return $q.when(promise);

    //};

    //service.BuscarLavado = function (Direccion) {
    //    var promise = $http({
    //        method: 'get',
    //        url: '/SolicitarLavado/BuscarLavados',
    //        params: {
    //            Direccion: Direccion
    //        }

    //    });

    //    return $q.when(promise);

    //};

    //service.GetDetalleLavado = function (idlavado) {
    //    var promise = $http({
    //        method: 'get',
    //        url: '/SolicitarLavado/GetLavadoDetalle',
    //        params: {
    //            idlavado: idlavado
    //        }

    //    });

    //    return $q.when(promise);

    //};


    service.ReporteLavadores = function () {
        var promise = $http({
            method: 'get',
            url: '/Reportes/ReporteLavadores'
        });

        return $q.when(promise);

    };

    return service;
})




