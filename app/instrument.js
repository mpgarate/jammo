var Instrument = (function() {
  'use strict';

  var Instrument = function () {};

  var instrument_names = ["kick", "snare", "hihat"];
  var instrument_buffers = {};

  for (var i = 0; i < instrument_names.length; i++) {
    var name = instrument_names[i];
    loadAudioFile(name);
  }

  function loadAudioFile(name) {
    var url = "audio/" + name + ".wav";

    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer) {
        instrument_buffers[name] = buffer;
      });
    }
    request.send();
  }

  Instrument.playByName = function(name) {
    var buffer = instrument_buffers[name];

    if (typeof buffer === undefined) {
      return;
    }

    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start();
  }

  return Instrument;
}());