angular.module('app').controller("ReportesController", ["$scope", "$sce", "$http", "$window", "$filter", "BuscarLavadoService", "$location", "$timeout", function ($scope, $sce, $http, $window, $filter, BuscarLavadoService, $location, $timeout) {

    $scope.ReporteLavadores = function () {      

        ReportesService.ReporteLavadores(idlavado).then(
            function (d) {
                
            },
            function (error) {
                

            });
    }
}]); 