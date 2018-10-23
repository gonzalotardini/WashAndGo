angular.module('app').controller("BuscarLavadoController", ["$scope", "$sce", "$http", "$window", "$filter", "BuscarLavadoService", "$location", "$timeout", function ($scope, $sce, $http, $window, $filter, BuscarLavadoService, $location, $timeout) {

    $scope.MostrarLavados = false;
    $scope.Lavado = {};
    $scope.CargandoLavados = false;
    $scope.AsignacionOk = false;
    $scope.AsignacionError = false;
    $scope.showModal = true;


    setInterval(function () {
        $scope.BuscarLavados(Direccion);
    }, 30000);
   
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onPositionUpdate);

    function onPositionUpdate(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        var json = '';
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

    $scope.ActualizarUbicacion = function (Direccion) {

        if (Direccion === "") {

            $scope.cargandoMapa = true;
            $scope.ErrorDireccion = true;
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
                        var length = json.results[0].address_components.length;

                        if (n < 0 || length < 5) {
                            $scope.ErrorDireccion = true;
                            $scope.cargandoMapa = true;
                        }
                        else {
                            $scope.CargandoLavados = true;
                            $scope.Direccion = json.results[0].formatted_address;
                            $scope.ErrorDireccion = false;
                            $scope.cargandoMapa = false;
                            $scope.MostrarLavados = true;

                            $scope.BuscarLavados($scope.Direccion);
                        }


                    }
                    return $http;
                });




        }


    };

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse;//if true ake it false and vice versa
    };

      
    $scope.GetDetalleLavado = function (idlavado) {

        BuscarLavadoService.GetDetalleLavado(idlavado).then(
            function (d) {
                $scope.Lavado = d.data;
                $scope.urlCliente = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=" + $scope.Lavado.Direccion);

                //$scope.cargandoModelos = false;
            },
            function (error) {


            });


    }


    $scope.BuscarLavados = function (Direccion) {       

        BuscarLavadoService.BuscarLavado(Direccion).then(
                function (d) {
                $scope.Lavados = d.data;
                $scope.sort("Distancia");
                $scope.sort("Distancia");
                $scope.CargandoLavados = false;
                
            },
            function (error) {

                $scope.Error = true;
                $scope.CargandoLavados = false;
       });      

    }


    $scope.AsignarLavado = function (idlavado, Direccion) {

        BuscarLavadoService.AsignarLavado(idlavado,Direccion).then(
            function (d) {
                $scope.Lavados = d.data;

                if ($scope.Lavados == "OK") {
                    $scope.AsignacionOk = true;
                    $timeout(function () { 
                        $('#myModal').modal('hide');
                        $window.location.href = '#!/lavador';
                        
                    }, 5000);
                }
                else {
                    $scope.AsignacionError = true;
                    BuscarLavados(Direccion);
                }
                

            },
            function (error) {
                
            });

    }

    $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=Argentina");
    $scope.urlCliente = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY&q=Argentina");

}]); 