import { Character } from './../js/character.js';
// var Band = require('./../js/band.js').bandModule;
// exports.bandModule = BandMod;


$(document).ready(function() {
  $("#character-form").submit(function(event) {
    event.preventDefault();
    var characterName = $("#characterName").val();
    var gender = $("#gender").val();
    var instrument = $("#instrument").val();
    var type = $("#type").val()
    var newCharacter = new Character(characterName, gender, instrument, type);
    // newCharacter.name = characterName;
    console.log(characterName);
    console.log(newCharacter);
    $("#character-list").append("<li>" + "<a href='character.html'>" + newCharacter.name + "</a>" + "</li>");

  //   <div class="sidebar">
  //   <h2>About Me: Click on the image<a href="author.html"> <img src="img/author.jpg" alt="author" class="img-responsive"> </a>to learn about the author</h2>
  // </div>
  });
});
