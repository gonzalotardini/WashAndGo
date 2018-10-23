﻿angular.module('app').controller("ClienteController", ["$scope", "$sce", "$http", "$window", "$filter", "ClienteService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, ClienteService, SolicitarLavadoService, $location) {

    $scope.MostrarDatosPersonales = false;
    $scope.Marcas = [];
    $scope.MarcaSeleccionada = '';
    $scope.MarcaDescripcion = '';
    $scope.Modelos = [];
    $scope.Modelo = '';
    $scope.ModeloDescripcion = '';
    $scope.Nombre = '';
    $scope.Apellido = '';
    $scope.DNI = '';
    $scope.Email = '';
    $scope.Fecha = '';
    $scope.Cliente = [];
    $scope.MarcaObtenida = '';
    $scope.ReadOnly = true;
    $scope.DatosGuardadosOK = false;
    $scope.cargandoCliente = false;
    $scope.Lavado = '';
    $scope.LavadoAbierto = false;
    $scope.VerListaLavados = false;
    $scope.ListaLavados = [];
    $scope.CargandoLavados = false;
    $scope.submit = false;
    $scope.Modelo2 = '';
    $scope.LavadoSolicitado = false;
    $scope.LavadoAsignado = false;
 

    ObtenerLavadoAbierto();
    

    setInterval(function () {
        ObtenerLavadoAbierto();
    }, 30000)


    $scope.ObtenerMarcas = function () {

        ClienteService.ObtenerMarcas().then(
            function (d) {
                $scope.Marcas = d.data;
            },
            function (error) {

                var elerror = error;
            });
    };

    $scope.ObtenerDatos = function () {
        $scope.cargandoCliente = true;
        ClienteService.ObtenerDatos().then(
            function (d) {
                $scope.Cliente = d.data;
                var fecha = new Date();
                
                if ($scope.Cliente.Completo === 'True') {
                    $scope.Nombre = $scope.Cliente.Nombre,
                        $scope.Apellido = $scope.Cliente.Apellido,
                        $scope.DNI = $scope.Cliente.DNI,
                        $scope.Email = $scope.Cliente.Email,
                        //$scope.Fecha = $filter('date')($scope.Cliente.FechaNacimiento.slice(0, 10), "dd/MM/yyyy"),                    
                        $scope.MarcaDescripcion = $scope.Cliente.Marcas.Descripcion,
                        $scope.ModeloDescripcion = $scope.Cliente.Modelos.Descripcion
                    //$scope.MarcaSeleccionada = $scope.Cliente.Marca
                    $scope.cargandoCliente = false;
                    var element = angular.element('#my_modal_popup');
                    element.modal('show');
                }
                else {
                    $scope.ReadOnly = false;
                    $scope.cargandoCliente = false;
                    $scope.Email = $scope.Cliente.Email;
                }

            },
            function (error) {

                var elerror = error;
            });
    };


    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };

    $scope.sort('Fecha');


    $scope.ObtenerModelos = function (MarcaSeleccionada) {

        if (MarcaSeleccionada != null) {
            $scope.cargandoModelos = true;
            ClienteService.ObtenerModelos(MarcaSeleccionada).then(
                function (d) {
                    $scope.Modelos = d.data;
                    //$scope.cargandoModelos = false;
                },
                function (error) {


                });
        }
    }

    $scope.GuardarDatos = function (Nombre, Apellido, DNI, Email, MarcaSeleccionada, Modelo) {

        if ($scope.cliente.$valid==false) {
            var hola = 'a';
        }
        else {
            ClienteService.GuardarDatos(Nombre, Apellido, DNI, Email, MarcaSeleccionada, Modelo).then(
                function (d) {
                    //$scope.Servicios = d.data;
                    //$location.path('/a');
                    $scope.DatosGuardadosOK = true;
                    $scope.MostrarDatosPersonales = false;
                },
                function (error) {


                });
        }

       

    }

   
    function ObtenerLavadoAbierto() {

        ClienteService.ObtenerLavadoAbierto().then(
            function (response) {
               $scope.Lavado = response.data;

                if ($scope.Lavado != "null") {
                    $scope.LavadoAbierto = true;


                    switch ($scope.Lavado.Estado) {
                        case "SOLICITADO":
                            $scope.LavadoAsignado =false;
                            $scope.LavadoSolicitado = true;
                            break;

                        case "ASIGNADO":
                            $scope.LavadoSolicitado = false;
                           $scope.LavadoAsignado = true;
                           
                            //var origen = $scope.Lavado.DireccionLavador;
                            //var destino = $scope.Lavado.Direccion;
                            //CalcularHoraLLegada(origen,destino); 
                            break;

                        default:
                    }
                       
                                                                                                          }
                else {
                    $scope.LavadoAbierto = false;
                }
            },
            function (error) {

                var elerror = error;
            });
    }

    //function CalcularHoraLLegada (origen, destino) {

    //    ClienteService.CalcularHoraLLegada(origen,destino).then(
    //        function (d) {
    //            var json = d.data;
    //            $scope.HoraLLegada = d.data;
    //        },
    //        function (error) {


    //        });


    //}


    $scope.CancelarLavado = function (lavadoid) {



        SolicitarLavadoService.CancelarLavado(lavadoid).then(
            function (d) {
                //$scope.Servicios = d.data;
                ObtenerLavadoAbierto();
                //$scope.abrirDialogSolicitado();
                //$location.path('/a');
            },
            function (error) {


            });

    };


    $scope.ObtenerLavados = function () {

        $scope.CargandoLavados = true;
        SolicitarLavadoService.ObtenerLavados().then(
            function (d) {              
                //$scope.Servicios = d.data;
                $scope.CargandoLavados = false;
                $scope.ListaLavados = d.data;                
            },
            function (error) {


            });

    };

    $scope.GetDetalleLavado = function (idlavado) {
        $scope.CargandoDetalle = true;

       ClienteService.GetDetalleLavado(idlavado).then(
            function (d) {
                $scope.LavadoV = d.data;
                $scope.urlCliente = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=" + $scope.LavadoV.Direccion);
                $scope.urlCliente = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=" + $scope.LavadoV.Direccion);
                $scope.CargandoDetalle = false;
                //$scope.cargandoModelos = false;
            },
            function (error) {
                $scope.CargandoDetalle = false;

            });
    }

    $scope.urlCliente = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=Argentina");
}]) 