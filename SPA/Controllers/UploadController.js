angular.module('app').controller('UploadController',
      ['$scope','FileUploader', function($scope, FileUploader) {
       $scope.uploader = new FileUploader({
                           url: 'server_url_here'
                   //you can add other configuration here like xsrf headers  
          });
      }]);