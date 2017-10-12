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
    this.id = 0;
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = exports.Character = function () {
  function Character(name, gender, instrument, type) {
    _classCallCheck(this, Character);

    this.name = name;
    this.gender = gender;
    this.instrument = instrument;
    this.type = type;
    this.inventory = [];
  }

  _createClass(Character, [{
    key: "addInventory",
    value: function addInventory(item) {
      this.inventory.push(item);
    }
  }, {
    key: "upgradeType",
    value: function upgradeType(newType) {
      this.type = newType;
    }
  }]);

  return Character;
}();

},{}],3:[function(require,module,exports){
"use strict";

var _band = require("./../js/band.js");

var _character = require("./../js/character.js");

// var Band = require('./../js/band.js').bandModule;
// exports.bandModule = BandMod;

var bandArr = [];

$(document).ready(function () {
  $("#band-form").submit(function (event) {
    event.preventDefault();
    console.log(bandArr);
    var bandName = $("#band-name").val();
    var newBand = new _band.Band(bandName);
    bandArr.push(newBand);
    newBand.id = bandArr.length;
    console.log(newBand.id);
    console.log(bandArr);
    console.log(bandName);
    console.log(newBand);
    $("#band-list").append("<li>" + "<a href='band.html'>" + newBand.name + "</a>" + "</li>");
    $("#band").append("<h3>" + newBand.name + "</h3>");
  });
});

// var Band = require('./../js/band.js').bandModule;
// exports.bandModule = BandMod;


$(document).ready(function () {
  $("#character-form").submit(function (event) {
    event.preventDefault();
    var characterName = $("#characterName").val();
    var gender = $("#gender").val();
    var instrument = $("#instrument").val();
    var type = $("#type").val();
    var newCharacter = new _character.Character(characterName, gender, instrument, type);
    // newCharacter.name = characterName;
    console.log(characterName);
    console.log(newCharacter);
    $("#character-list").append("<li>" + "<a href='character.html'>" + newCharacter.name + "</a>" + "</li>");

    //   <div class="sidebar">
    //   <h2>About Me: Click on the image<a href="author.html"> <img src="img/author.jpg" alt="author" class="img-responsive"> </a>to learn about the author</h2>
    // </div>
  });
});

},{"./../js/band.js":1,"./../js/character.js":2}]},{},[3]);
