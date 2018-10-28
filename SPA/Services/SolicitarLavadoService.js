﻿angular.module("app").factory("SolicitarLavadoService", function ($http, $q) {

    var service = {};

    service.VerificarCliente = function () {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/VerificarCliente'

        });

        return $q.when(promise);

    };

    service.SolicitarLavado = function () {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/ObtenerMarcas'
            
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

    service.CrearSolicitud = function (Marca, Modelo, Servicio, seg, dir, total, NombreTarjeta, NumeroTarjeta, Mes, Año, CodTarjeta) {
        var promise = $http({
            method: 'post',
            url: '/SolicitarLavado/crearSolicitud',
            params: {
                Marca: Marca,
                Modelo: Modelo,
                Servicio:Servicio,
                seg: seg,
                dir: dir,
                total: total,
                NombreTarjeta: NombreTarjeta,
                NumeroTarjeta: NumeroTarjeta,
                Mes: Mes,
                Año: Año,
                CodTarjeta: CodTarjeta
            }
        });

        return $q.when(promise);

    };


    service.CancelarLavado = function (lavadoid) {
        var promise = $http({
            method: 'post',
            url: '/SolicitarLavado/CancelarLavado',
            params: {
                lavadoid:lavadoid
            }
        });

        return $q.when(promise);

    };
           

    service.FinalizarLavadoCliente = function (calificacion, comentario, lavadoid) {
        var promise = $http({
            method: 'post',
            url: '/SolicitarLavado/FinalizarLavadoCliente',
            params: {
                calificacion: calificacion,
                comentario:comentario,
                lavadoid: lavadoid
            }
        });

        return $q.when(promise);

    };

    service.LLegoLavador = function (idlavado) {
        var promise = $http({
            method: 'post',
            url: '/SolicitarLavado/LLegoLavador',
            params: {
                idlavado: idlavado
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

    service.ObtenerLavados = function () {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/ObtenerLavados'

        });

        return $q.when(promise);

    };

    service.VerificarLavadoAbiertoCliente = function () {
        var promise = $http({
            method: 'get',
            url: '/SolicitarLavado/VerificarLavadoAbiertoCliente'

        });

        return $q.when(promise);

    };


    return service;
})




