var NoteQueue = (function() {
  'use strict';

  var NoteQueue = function () {
    this.currentPosition = 0;
    this.notes = [];
  };

  var SCORE_LENGTH = 8;

  NoteQueue.prototype.playNext = function() {
    for (var i = 0; i < this.score.instruments.length; i++) {
      var instrumentName = this.score.instruments[i].name;
      var noteIsActive = this.score.instruments[i].notes[this.currentPosition];

      if (true === noteIsActive) {
        Instrument.playByName(instrumentName);
      }
    }

    this.currentPosition++;

    if (SCORE_LENGTH === this.currentPosition) {
      this.currentPosition = 0;
    }
  }

  NoteQueue.prototype.setScore = function(score) {
    this.score = score;
  }

  return NoteQueue;
}());