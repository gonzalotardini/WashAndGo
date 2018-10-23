angular.module('app').controller("LavadorController", ["$scope", "$sce", "$http", "$window", "$filter", "LavadorService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, LavadorService, SolicitarLavadoService, $location) {

    $scope.ReadOnly = false;
    $scope.lavador = {};
    $scope.cargandoLavador = false;
    $scope.ServiciosRealizo = [];
    $scope.ServiciosNoRealizo = [];
    $scope.MostrarServiciosRealizo = false;
    $scope.CargandoServicios = false;
    $scope.CargandoServicios2 = false;


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
        for (var i = 0; i < $scope.ServiciosRealizo.Servicios.length; i++) {
            if ($scope.ServiciosRealizo.Servicios[i].IdServicio == service) {
                $scope.ServiciosNoRealizo.push($scope.ServiciosRealizo.Servicios[i]);
                $scope.ServiciosRealizo.Servicios.splice(i, 1);
                GuardarServicios($scope.ServiciosRealizo.Servicios);
                
                var hola = "hola";
            }
        }
    };


    $scope.AddService = function (service) {
        for (var i = 0; i < $scope.ServiciosNoRealizo.length; i++) {
            if ($scope.ServiciosNoRealizo[i].IdServicio == service) {
                $scope.ServiciosRealizo.Servicios.push($scope.ServiciosNoRealizo[i]);
                $scope.ServiciosNoRealizo.splice(i, 1);
                GuardarServicios($scope.ServiciosRealizo.Servicios);

                var hola = "hola";
            }
        }
    };



    $scope.GetServicios = function () {                 

      
        GetServiciosRealizo();
        GetServiciosNoRealizo();

        $scope.CargandoServicios = false;
    }

    
    function GetServiciosRealizo() {
        $scope.CargandoServicios = true;
        LavadorService.GetServiciosRealizo().then(
            function (d) {
                $scope.ServiciosRealizo = d.data;
                $scope.CargandoServicios = false;
            },
            function (error) {
                $scope.CargandoServicios = false;
                var elerror = error;
            });
    };

    function GetServiciosNoRealizo() {
        $scope.CargandoServicios2 = true;
        LavadorService.GetServiciosNoRealizo().then(
            function (d) {
                $scope.ServiciosNoRealizo = d.data;
                $scope.CargandoServicios2 = false;
            },
            function (error) {
                $scope.CargandoServicios = false;
                var elerror = error;
            });
    };
    

    function GuardarServicios(servicios) {
        LavadorService.GuardarServicios(servicios).then(
            function (d) {
                //$scope.Servicios = d.data;
                //$location.path('/a');
                //$scope.DatosGuardadosOK = true;
                //$scope.MostrarDatosPersonales = false;
            },
            function (error) {


                //    });
                //}

                var hola = 'a';

            })

    }




}]);