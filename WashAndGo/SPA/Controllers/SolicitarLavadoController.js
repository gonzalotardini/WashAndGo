angular.module('app').controller("SolicitarLavadoController", ["$scope", "$sce", "$http", "$window", "$filter", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, SolicitarLavadoService, $location) {


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



    ObtenerMarcas();


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

    }

    $scope.ObtenerServicios();



    $scope.ActualizarUbicacion = function (Direccion) {

        if (Direccion == "") {

            $scope.cargandoMapa = true;
        }
        else {

            $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=" + Direccion);
            var json;
            $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + Direccion + '&sensor=true').then(function (response) {
                json = response.data;

                

                if ((json.results.length) == 0) {
                    $scope.ErrorDireccion = true;
                    $scope.cargandoMapa = true;
                }
                else {

                    var address = json.results[0].formatted_address;
                    var n = address.search("Argentina");
                    var length = json.results[0].address_components.length

                    if (n < 0  || length <=5) {
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


    }

    $scope.CrearSolicitud = function (Marca,Modelo) {

        SolicitarLavadoService.ObtenerServicios().then(
            function (d) {
                $scope.Servicios = d.data;
            },
            function (error) {


            });

    }


    //==============Ejecuto funcion para obtener geolaclizaion=========0
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);

    function ObtenerMarcas() {

        SolicitarLavadoService.SolicitarLavado().then(
            function (d) {
                $scope.Marcas = d.data;
            },
            function (error) {


            });
    }


    //=======Obtengo geolocalizacion======
    function onPositionUpdate(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + lat + "," + lng + "&key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY");
        $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + lat + "," + lng + "&key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY");
        $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + lat + "," + lng + "&key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY");
        $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?q=" + lat + "," + lng + "&key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY");


        $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=true').then(function (response) {
            var json = response.data;
            $scope.Direccion = json.results[0].formatted_address;
            return $http;
        });

        if (contador == 2) {

            sleep(2000);
            $scope.cargandoMapa = false;
        }
        else {
            contador = contador + 1;

        }

    }

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }


    //url por defecto para q me cargo algo en el mapa
    $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=Argentina");



}]) 