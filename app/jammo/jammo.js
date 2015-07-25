'use strict';

angular.module('myApp.jammo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/jammo', {
    templateUrl: 'jammo/jammo.html',
    controller: 'JammoCtrl'
  });
}])

.controller('JammoCtrl', ['$scope', function($scope) {

  var beat1 = {
    selected : false
  };
  var beat2 = {
    selected : false
  };
  var beat3 = {
    selected : false
  };
  var beat4 = {
    selected : false
  };

  $scope.beats= [beat1, beat2, beat3, beat4];

}]);
