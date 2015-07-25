'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.jammo',
  'myApp.version'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/jammo'});
}]);


var timer = new Worker('workers/timer.js');

var noteQueue = new NoteQueue();

var sample_score = {
  "instruments": [
    {
      "name": "kick",
      "notes": [
        true, true, false, false, false, true, false, false
      ]
    },
    {
      "name": "snare",
      "notes": [
        false, false, true, false, false, false, true, false
      ]
    },
    {
      "name": "hihat",
      "notes": [
        false, true, false, true, false, true, false, true
      ]
    }
  ]
}

noteQueue.setScore(sample_score);

timer.onmessage = function(e) {
  console.log('Worker said: ', e.data);
  noteQueue.playNext();
};


