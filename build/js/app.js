(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Band = exports.Band = function () {
  function Band(name) {
    _classCallCheck(this, Band);

    this.name = name;
    this.score = 0;
    this.victory = false;
    this.fans = 1;
    this.level = 4;
    this.characters = [];
  }

  _createClass(Band, [{
    key: "addCharacters",
    value: function addCharacters(character) {
      this.characters.push(character);
    }
  }, {
    key: "roll",
    value: function roll() {
      var dice = Math.floor(Math.random() * (this.level - 1)) + 1;
      if (dice === 1) {
        alert("You got caught lip-synching worse than Milli Vanilli, you loose all your fans!");
        this.fans = 0;
        return 0;
      } else {
        this.fans += dice;
        return dice;
      }
    }
  }, {
    key: "groupie",
    value: function groupie() {
      if (this.fans % 10 == 0) {
        this.characters.push("groupie");
      }
      // else {
      //   break;
      // }
    }
  }]);

  return Band;
}();

// exports.bandModule = BandMod;

},{}],2:[function(require,module,exports){
"use strict";

var _band = require("./../js/band.js");

// var Band = require('./../js/band.js').bandModule;
// exports.bandModule = BandMod;


$(document).ready(function () {
  $("#band-form").submit(function (event) {
    event.preventDefault();
    var newBand = new _band.Band(" ");
    var bandName = $("#band-name").val();
    newBand.name = bandName;
    console.log(bandName);
    console.log(newBand);
    $("#band-list").append("<li>" + newBand.name + "</.li>");
  });
});

},{"./../js/band.js":1}]},{},[2]);
