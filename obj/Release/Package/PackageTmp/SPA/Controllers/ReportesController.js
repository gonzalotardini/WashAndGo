angular.module('app').controller("ReportesController", ["$scope", "$sce", "$http", "$window", "$filter", "ReportesService", "$location", "$timeout", function ($scope, $sce, $http, $window, $filter, ReportesService, $location, $timeout) {

    $scope.MostrarReporteLavadores = false;
    $scope.Desde = '';
    $scope.Hasta = '';
    $scope.Error = false;




    $scope.ReporteLavadores = function () {

        if ($scope.Desde > $scope.Hasta || $scope.Desde== "" || $scope.Desde == undefined || $scope.Hasta=="" || $scope.Hasta==undefined ) {
            $scope.Error = true;
        } else { 
            $scope.Error = false;
        $scope.Desde = $scope.Desde.toLocaleDateString('en-GB');
        $scope.Hasta = $scope.Hasta.toLocaleDateString('en-GB');

        window.location.href = '/Reportes/ReporteLavadores?Desde=' + $scope.Desde + '&Hasta=' + $scope.Hasta;

        $scope.Desde = '';
        $scope.Hasta = '';
    }
    }

}]); 