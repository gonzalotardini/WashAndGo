angular.module('app').controller("ClienteController", ["$scope", "$sce", "$http", "$window", "ngDialog", "$filter", "ClienteService", "SolicitarLavadoService", "$location", function ($scope, $sce, $http, $window, ngDialog, $filter, ClienteService, SolicitarLavadoService,$location) {

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
                        $scope.Fecha = $scope.Cliente.FechaNacimiento.slice(0, 10),                    
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
                //$location.path('/a');
                $scope.DatosGuardadosOK = true;
                $scope.MostrarDatosPersonales = false;
            },
            function (error) {


            });

    }

   
    function ObtenerLavadoAbierto() {

        ClienteService.ObtenerLavadoAbierto().then(
            function (response) {
               $scope.Lavado = response.data;

                if ($scope.Lavado != "null") {
                    $scope.LavadoAbierto = true;
                }
                else {
                    $scope.LavadoAbierto = false;
                }
            },
            function (error) {

                var elerror = error;
            });
    }



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
}]) 