'use strict';

angular.module('myApp.jammo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jammo', {
    templateUrl: 'jammo/jammo.html',
    controller: 'JammoCtrl'
  });
}])

.controller('JammoCtrl', ['$scope', function($scope) {

  $scope.drum = "XXX";
  console.log($scope.drum);

}]);
