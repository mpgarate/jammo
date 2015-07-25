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

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

var timer = new Worker('workers/timer.js');

var noteQueue = new NoteQueue();

var sample_score = {
  "instruments": [
    {
      "name": "kick",
      "notes": [
        true, false, true, false, true, false, true, false
      ]
    },
    {
      "name": "snare",
      "notes": [
        true, false, true, false, true, false, true, false
      ]
    },
    {
      "name": "hihat",
      "notes": [
        true, false, true, false, true, false, true, false
      ]
    }
  ]
}

noteQueue.setScore(sample_score);

timer.onmessage = function(e) {
  console.log('Worker said: ', e.data);
  noteQueue.playNext();
};


