angular.module('app').controller("LavadorController", ["$scope", "$sce", "$http", "$window", "$filter", "LavadorService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, LavadorService, SolicitarLavadoService, $location) {

    $scope.ReadOnly = false;
    $scope.lavador = {};
    $scope.cargandoLavador = false;
    $scope.ServiciosRealizo = [];
    $scope.ServiciosNoRealizo = [];
    $scope.MostrarServiciosRealizo = false;


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

    $scope.RemoveService = function (service) {
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] === 5) {
                arr.splice(i, 1);
            }
        }
    };

    $scope.GetServiciosRealizo = function () {

        LavadorService.GetServiciosRealizo().then(
            function (d) {               
                $scope.ServiciosRealizo = d.data;
            },
            function (error) {

                var elerror = error;
            });
    };

    $scope.GetServiciosNoRealizo = function () {

        LavadorService.GetServiciosNoRealizo().then(
            function (d) {
                $scope.ServiciosNoRealizo = d.data;
            },
            function (error) {

                var elerror = error;
            });
    };




}]);