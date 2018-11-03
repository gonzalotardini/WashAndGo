﻿angular.module('app').controller("LavadorController", ["$scope", "$sce", "$http", "$window", "$filter", "LavadorService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, LavadorService, SolicitarLavadoService, $location) {

    $scope.ReadOnly = false;
    $scope.lavador = {};
    $scope.cargandoLavador = false;
    $scope.ServiciosRealizo = [];
    $scope.ServiciosNoRealizo = [];
    $scope.MostrarServiciosRealizo = false;
    $scope.CargandoServicios = false;
    $scope.CargandoServicios2 = false;
    $scope.LavadoAbierto = false;
    $scope.Lavado = {};
    $scope.urlCliente = '';
    $scope.LavadoAsignado = false;
    $scope.cargandoMapa = false;
    $scope.LavadorEnDomicilio = false;
    var i = 0;

    VerifyAuth();
    GetLavadoAbierto();

    setInterval(function () {
        if ($scope.calificando == false) {
            GetLavadoAbierto();
        }

        if (i == 5) {
            $route.reload();
        }
        else {
            i = i + 1;
        }


    }, 30000);

    function GetLavadoAbierto() {
        $scope.cargandoMapa = true;
        $scope.LavadoAsignado = false;
        LavadorService.GetLavadoAbierto().then(           
            function (d) {
                $scope.Lavado = d.data;
                if ($scope.Lavado !== null) {
                    $scope.cargandoMapa =true;                    
                    $scope.LavadoAbierto = true;

                    switch ($scope.Lavado.Estado) {

                        case "ASIGNADO":
                            $scope.urlCliente = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=" + $scope.Lavado.Direccion);
                            $scope.LavadoAsignado = true;
                            break;
                        case "EN PROCESO":
                            
                            $scope.LavadoAsignado = false;
                            $scope.LavadorEnDomicilio = true;
                            break;

                        default:
                    }

                    $scope.cargandoMapa = false;
                }
                else {
                    $scope.LavadoAbierto = false;
                    $scope.cargandoMapa = false;
                }

            },
            function (error) {
                //$scope.CargandoServicios = false;
                //var elerror = error;
            });
    }

    function VerifyAuth() {        
        LavadorService.VerifyAuth().then(
            function (d) {
                if (d.data=="403") {
                    window.location.href = '/Account/LogIn';
                }
            },
            function (error) {
                
            });
    }

    $scope.LLegue = function (idlavado) {       
        LavadorService.LLegue(idlavado).then(
            function (d) {
               
                GetLavadoAbierto();
            },
            function (error) {

                var elerror = error;
            });
    };


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



    $scope.urlCliente = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=Argentina");
}]);