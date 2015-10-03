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

  $scope.beats = [beat1, beat2, beat3, beat4];

  $scope.updateScore = function() {

    var boolean_beats = $scope.beats.map(function(beat) {
      return beat.selected;
    });

    playScore(boolean_beats);
  }
}]);

function playScore(beats) {

  console.log(beats);

  var score = {
    "instruments": [
    {
      "name": "kick",
      "notes": beats
    },
    {
      "name": "snare",
      "notes": [
        false, false, false, false
        ]
    },
    {
      "name": "hihat",
      "notes": [
        false, false, false, false
        ]
    }
    ]
  }

  noteQueue.setScore(score);

  timer.onmessage = function(e) {
    noteQueue.playNext();
  };
}
