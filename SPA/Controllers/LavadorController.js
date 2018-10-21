﻿angular.module('app').controller("LavadorController", ["$scope", "$sce", "$http", "$window", "$filter", "LavadorService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, LavadorService, SolicitarLavadoService, $location) {

    $scope.ReadOnly = false;
    $scope.lavador = {};
    $scope.cargandoLavador = false;

    $scope.ObtenerDatos = function () {
        $scope.cargandolavador = true;
        LavadorService.ObtenerDatos().then(
            function (d) {
                var lavador = d.data;
                var fecha = new Date();

                if (lavador.Completo == 'True') {
                    $scope.ReadOnly = true;
                    $scope.cargandolavador = false;     
                    $scope.lavador.Nombre = lavador.Nombre,
                    $scope.lavador.Apellido = lavador.Apellido,
                    $scope.lavador.DNI = lavador.DNI,
                    $scope.lavador.Email = lavador.Email,                       
                    //$scope.MarcaSeleccionada = $scope.Cliente.Marca
                    $scope.cargandolavador = false;                   
                }
                else {
                    $scope.ReadOnly = false;
                    $scope.cargandolavador = false;
                    $scope.lavador.Email = lavador.Email;
                }

            },
            function (error) {

                var elerror = error;
            });
    };

    $scope.GuardarDatos = function (lavador) {

        //if ($scope.cliente.$valid == false) {
        //    var hola = 'a';
        //}
        //else {
        var hola="";
       
        LavadorService.GuardarDatos(lavador).then(
            function (d) {
                //$scope.Servicios = d.data;
                //$location.path('/a');
                $scope.DatosGuardadosOK = true;
                $scope.MostrarDatosPersonales = false;
            },
            function (error) {


                //    });
                //}

                var hola = 'a';

            })

    }
}]);