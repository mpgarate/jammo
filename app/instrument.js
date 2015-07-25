var Instrument = (function() {
  'use strict';

  var Instrument = function () {};

  var instrument_names = ["kick", "snare", "hihat"];
  var instruments = {};

  for (var i = 0; i < instrument_names.length; i++) {
    var name = instrument_names[i];
    instruments[name] = new Audio("audio/" + name + ".wav");
    console.log(instruments);
  }

  Instrument.playByName = function(name) {
    console.log(name);
    console.log(instruments);
    instruments[name].play();
  }

  return Instrument;
}());