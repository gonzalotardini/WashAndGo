angular.module('app').controller("LavadorController", ["$scope", "$sce", "$http", "$window", "$filter", "LavadorService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, $filter, LavadorService, SolicitarLavadoService, $location) {


    $scope.lavador = { IdLavador:"aaaaaa", Nombre: "", Apellido: "", DNI: "", Email:"", Completo:"False"};

    $scope.ObtenerDatos = function () {
        $scope.cargandoLavador = true;
        LavadorService.ObtenerDatos().then(
            function (d) {
                var lavador = d.data;
                var fecha = new Date();

                if (lavador.Completo === 'True') {
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
}]);