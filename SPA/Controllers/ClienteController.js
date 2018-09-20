angular.module('app').controller("ClienteController", ["$scope", "$sce", "$http", "$window", "$filter", "ClienteService", "$location", function ($scope, $sce, $http, $window, $filter, ClienteService, $location) {

    $scope.MostrarDatosPersonales = false;
    $scope.Marcas = [];
    $scope.MarcaSeleccionada = '';
    $scope.Modelos = [];
    $scope.Modelo = '';
    $scope.Nombre = '';
    $scope.Apellido = '';
    $scope.DNI = '';
    $scope.Email = '';
    $scope.Fecha = '';
    $scope.Cliente = [];
    $scope.MarcaObtenida = '';



    $scope.ObtenerMarcas = function () {

        ClienteService.ObtenerMarcas().then(
            function (d) {
                $scope.Marcas = d.data;
            },
            function (error) {

                var elerror = error;
            });
    }

    $scope.ObtenerDatos = function () {

        ClienteService.ObtenerDatos().then(
            function (d) {
                $scope.Cliente = d.data;
                $scope.Nombre = $scope.Cliente.Nombre;
                $scope.Apellido = $scope.Cliente.Apellido,
                    $scope.DNI = $scope.Cliente.DNI,
                    $scope.Email = $scope.Cliente.Email,
                    $scope.Fecha = $scope.Cliente.FechaNacimiento,
                    $scope.MarcaSeleccionada = $scope.Cliente.Marca
            },
            function (error) {

                var elerror = error;
            });
    }



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

    $scope.GuardarDatos = function (Nombre, Apellido, DNI, Email, Fecha, MarcaSeleccionada, Modelo) {

        ClienteService.GuardarDatos(Nombre, Apellido, DNI, Email, Fecha, MarcaSeleccionada, Modelo).then(
            function (d) {
                //$scope.Servicios = d.data;
                $location.path('/a');
            },
            function (error) {


            });

    }


}]) 