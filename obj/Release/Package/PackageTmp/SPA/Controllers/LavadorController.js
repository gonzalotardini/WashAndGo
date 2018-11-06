angular.module('app').controller("LavadorController", ["$scope", "$sce", "$http", "$window", "$filter", "LavadorService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, LavadorService, SolicitarLavadoService, $location) {

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
    $scope.CancelarLavadoAsignado_ = false;
    $scope.items = ["--", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.calificacion = $scope.items[0];
    $scope.FinalizadoCliente = false;
    $scope.calificando = false;
    $scope.ClienteNoRespondio_ = false;
    $scope.ListaLavados = [];
    $scope.VerListaLavados = false;
    $scope.CargandoDetalle = false;

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


    $scope.CancelarLavadoAsignado = function (idlavado, comentario) {

        if ($scope.comentf.$valid == false) {
            var hola = "";
        }
        else {
            SolicitarLavadoService.CancelarLavadoAsignadoLavador(idlavado, comentario).then(
                function (d) {
                    //$scope.Servicios = d.data;
                    GetLavadoAbierto();

                },
                function (error) {


                });
        }

       

    };


    function GetLavadoAbierto() {
        $scope.cargandoMapa = true;
        $scope.LavadoAsignado = false;
        LavadorService.GetLavadoAbierto().then(           
            function (d) {
                $scope.Lavado = d.data;
                if ($scope.Lavado !== "null") {
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
                        case "FINALIZADO CLIENTE":

                            $scope.LavadoAsignado = false;
                            $scope.LavadorEnDomicilio = false;
                            $scope.FinalizadoCliente = true;

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

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    };

    $scope.sort('Fecha');

    $scope.ObtenerLavados = function () {

        $scope.CargandoLavados = true;
        SolicitarLavadoService.ObtenerLavadosLavador().then(
            function (d) {
                //$scope.Servicios = d.data;
                $scope.CargandoLavados = false;
                $scope.ListaLavados = d.data;
            },
            function (error) {


            });
    };


    $scope.ClienteNoRespondio = function (idlavado, comentario) {
        $scope.ClienteNoRespondio_ = true;

        SolicitarLavadoService.ClienteNoRespondio(idlavado, comentario).then(
            function (d) {
                //$scope.Servicios = d.data;
                $scope.ClienteNoRespondio_ = false;
                GetLavadoAbierto();

            },
            function (error) {


            });

    };


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


    $scope.GetDetalleLavado = function (idlavado) {
        $scope.CargandoDetalle = true;

        LavadorService.GetDetalleLavado(idlavado).then(
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
        for (var i = 0; i < $scope.ServiciosRealizo.length; i++) {
            if ($scope.ServiciosRealizo[i].IdServicio == service) {
                $scope.ServiciosNoRealizo.push($scope.ServiciosRealizo[i]);
                $scope.ServiciosRealizo.splice(i, 1);
                GuardarServicios($scope.ServiciosRealizo);
                
                var hola = "hola";
            }
        }
    };


    $scope.FinalizarLavadoAccion = function (calificacion, comentario, lavadoid) {

        if (calificacion == "--") {
            $scope.ErrorCalificacion = true;
        }
        else {
            $scope.ErrorCalificacion = false;
            SolicitarLavadoService.FinalizarLavadoLavador(calificacion, comentario, lavadoid).then(
                function (d) {
                    //$scope.Servicios = d.data;
                    GetLavadoAbierto();

                },
                function (error) {


                });
        }
    };


    $scope.AddService = function (service) {
        for (var i = 0; i < $scope.ServiciosNoRealizo.length; i++) {
            if ($scope.ServiciosNoRealizo[i].IdServicio == service) {
                $scope.ServiciosRealizo.push($scope.ServiciosNoRealizo[i]);
                $scope.ServiciosNoRealizo.splice(i, 1);
                GuardarServicios($scope.ServiciosRealizo);

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