angular.module('app').controller("ReportesController", ["$scope", "$sce", "$http", "$window", "$filter", "ReportesService", "$location", "$timeout", function ($scope, $sce, $http, $window, $filter, ReportesService, $location, $timeout) {

    $scope.MostrarReporteLavadores = false;



    $scope.ReporteLavadores = function () {     


        window.location.href = '/Reportes/ReporteLavadores/';

        //ReportesService.ReporteLavadores().then(
        //    function (d) {
                
        //    },
        //    function (error) {
                

        //    });
    }
}]); 