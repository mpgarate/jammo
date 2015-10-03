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

