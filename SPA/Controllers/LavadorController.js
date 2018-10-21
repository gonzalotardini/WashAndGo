angular.module('app').controller("LavadorController", ["$scope", "$sce", "$http", "$window", "$filter", "LavadorService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, ClienteService, SolicitarLavadoService, $location) {


    $scope.lavador = { Nombre: "", Apellido: "", DNI: "", Email:"" };

    $scope.ObtenerDatos = function () {
        $scope.cargandoLavador = true;
        ClienteService.ObtenerDatos().then(
            function (d) {
                $scope.Cliente = d.data;
                var fecha = new Date();

                if ($scope.Cliente.Completo === 'True') {
                    $scope.Nombre = $scope.Cliente.Nombre,
                        $scope.Apellido = $scope.Cliente.Apellido,
                        $scope.DNI = $scope.Cliente.DNI,
                        $scope.Email = $scope.Cliente.Email,
                        $scope.Fecha = $filter('date')($scope.Cliente.FechaNacimiento.slice(0, 10), "dd/MM/yyyy"),
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
            ClienteService.GuardarDatos(lavador).then(
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

    }


}]);