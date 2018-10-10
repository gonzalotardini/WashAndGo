angular.module('app').controller("SolicitarLavadoController", ["$scope", "$sce", "$http", "$window", "ngDialog", "$filter", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, ngDialog,$filter, SolicitarLavadoService, $location) {


    //Array de MARCAS
    $scope.Marcas = [];
    //Array de servicios
    $scope.Servicios = [];
    //Servicio seleccionado
    $scope.Servicio = '';
    //Marca seleccionada
    $scope.Marca = '';
    //Modelo del modelo seleccionado
    $scope.Modelo = '';
    //Lista de modelos
    $scope.Modelos = [];
    //Segemnto del modelo seleccionado
    $scope.Segmento = '';
    //Direccion mostrada arriba de mapa
    $scope.Direccion = "";
    //Variable q muestra u oculta cargando de modeos
    $scope.cargandoModelos = false;
    //Variable q muestro u oculta cargando mapa
    $scope.cargandoMapa = true;
    //
    var contador = 0;
    //Total
    $scope.Total = '';
    //muestra cartel de error si la direccion no es valida
    $scope.ErrorDireccion = false;
    // variable para ocultar o mostrar el formulario dependiendo si esta o no validado el cliente
    $scope.BuscandoCliente = true;

    $scope.ClienteSinDatos =false;

    $scope.Pago = false;

    $scope.ReadOnly = true;

    $scope.EditAuto = false;

    $scope.ProcesandoPago = false;


    //$scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=Argentina");


    //==============Ejecuto funcion para obtener geolaclizaion=========0
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);
    //if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);
    //if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);

    VerificarCliente();
   


   


    $scope.EditarAuto = function () {

        $scope.Marca = '';
        $scope.Modelo = '';
        $scope.Segmento.Descripcion='';
        $scope.EditAuto = true;
        ObtenerMarcas();

    };

    function VerificarCliente() {

        //$scope.cargandoModelos = true;
        SolicitarLavadoService.VerificarCliente().then(
            function (d) {
                var estado = d.data;

                if (estado == "False") {
                    $scope.BuscandoCliente = false;
                    $scope.ClienteSinDatos = true;

                    //$location.path('/cliente');
                }
                else {
                    $scope.BuscandoCliente = false;
                }


            },
            function (error) {


            });

    }


    $scope.ObtenerDatos = function () {
        //$scope.cargandoCliente = true;
        SolicitarLavadoService.ObtenerDatos().then(
            function (d) {
                $scope.Cliente = d.data;
                var fecha = new Date();

                if ($scope.Cliente.Completo === 'True') {
                    //$scope.Nombre = $scope.Cliente.Nombre,
                    //    $scope.Apellido = $scope.Cliente.Apellido,
                    //    $scope.DNI = $scope.Cliente.DNI,
                    //    $scope.Email = $scope.Cliente.Email,
                    //    $scope.Fecha = $scope.Cliente.FechaNacimiento.slice(0, 10),
                    $scope.MarcaDescripcion = $scope.Cliente.Marcas.Descripcion,
                    $scope.ModeloDescripcion = $scope.Cliente.Modelos.Descripcion;                    
                    $scope.Marca = $scope.Cliente.Marcas.IdMarca;
                    $scope.Modelo = $scope.Cliente.Modelos.IdModelo;
                    //$scope.MarcaSeleccionada = $scope.Cliente.Marca
                 
                    $scope.ObtenerSegmento($scope.Cliente.Modelos.IdSegmento);

                    $scope.cargandoCliente = false;
                    
                }
                else {
                    $scope.ReadOnly = false;
                    $scope.cargandoCliente = false;
                    $scope.EditAuto = true;
                }

            },
            function (error) {

                var elerror = error;
            });
    };

    $scope.ObtenerDatos();

    $scope.ObtenerModelos = function (Marca) {

        if (Marca != null) {
            $scope.cargandoModelos = true;
            SolicitarLavadoService.ObtenerModelos(Marca).then(
                function (d) {
                    $scope.Modelos = d.data;
                    $scope.cargandoModelos = false;
                },
                function (error) {


                });
        }
    }


    $scope.ObtenerSegmento = function (Modelo) {

        if (Modelo !== null) {
            SolicitarLavadoService.ObtenerSegmento(Modelo).then(
                function (d) {
                    $scope.Segmento = d.data;
                    $scope.botonTotal();
                },
                function (error) {

                });

        }
    }

    $scope.CalcularTotal = function (Modelo) {

        if (Modelo !== null) {
            SolicitarLavadoService.ObtenerSegmento(Modelo).then(
                function (d) {
                    $scope.Segmento = d.data;
                },
                function (error) {

                });

        }
    }



    $scope.botonTotal = function () {

        var idSegmento = $scope.Segmento.IdSegmento;
        var idServicio = $scope.Servicio;

        return ObtenerTotal(idSegmento, idServicio);

    }


    $scope.limpiarSegmentoMarca = function () {

        $scope.Segmento = '';
        $scope.Total = '';

    }

    function ObtenerTotal(idSegmento, idServicio) {

        if (idSegmento != null && idServicio != null && idServicio != "") {
            SolicitarLavadoService.ObtenerTotal(idSegmento, idServicio).then(
                function (d) {
                    $scope.Total = d.data;
                },
                function (error) {

                });

        }
    }


    $scope.ObtenerServicios = function () {

        SolicitarLavadoService.ObtenerServicios().then(
            function (d) {
                $scope.Servicios = d.data;
            },
            function (error) {


            });

    };


    $scope.ObtenerServicios();



    $scope.ActualizarUbicacion = function (Direccion) {

        if (Direccion === "") {

            $scope.cargandoMapa = true;
        }
        else {

            $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=" + Direccion);
            var h = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + Direccion + '&key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY';
    
            $http.get(h).
                then(function (response) {
               var json = response.data;
                if ((json.results.length) == 0) {
                    $scope.ErrorDireccion = true;
                    $scope.cargandoMapa = true;
                }
                else {

                    var address = json.results[0].formatted_address;
                    var n = address.search("Argentina");
                    var length = json.results[0].address_components.length

                    if (n < 0 || length <= 5) {
                        $scope.ErrorDireccion = true;
                        $scope.cargandoMapa = true;
                    }
                    else {

                        $scope.Direccion = json.results[0].formatted_address;
                        $scope.ErrorDireccion = false;
                        $scope.cargandoMapa = false;
                    }
                                                         

                }
                return $http;
            });




        }


    };

 

    $scope.CrearSolicitud = function (Marca, Modelo, Servicio) {

        var seg = $scope.Segmento.IdSegmento;
        var dir = $scope.Direccion;
        var total = $scope.Total;

        SolicitarLavadoService.CrearSolicitud(Marca, Modelo, Servicio, seg, dir, total).then(
            function (d) {
                //$scope.Servicios = d.data;
                $scope.Pago = true;
                //$scope.abrirDialogSolicitado();
                //$location.path('/a');
            },
            function (error) {


            });

    };







    function ObtenerMarcas() {

        SolicitarLavadoService.SolicitarLavado().then(
            function (response) {                
                $scope.Marcas = response.data;
            },
            function (error) {

                var elerror = error;
            });
    }


    //=======Obtengo geolocalizacion======
    function onPositionUpdate(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var json='';
        var h = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY';
        $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + lat + "," + lng + "&key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q");


        //while (json === '') {
            $http.get(h)
                .then(function (response) {
                    json = response.data.results[0].formatted_address;
                    $scope.Direccion = response.data.results[0].formatted_address;
                });
      
        $scope.cargandoMapa = false;
    }

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

    //$scope.abrirDialogSolicitado = function () {
    //    ngDialog.open({
    //        template: 'SPA/Views/Modal/lavado.html',
    //        className: 'ngdialog-theme-default',
    //        scope: $scope,

    //    });
    //}; 

    //url por defecto para q me cargo algo en el mapa
    //$scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=Argentina");



}]); 