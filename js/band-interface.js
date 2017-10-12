import { Band, Character } from './../js/band.js';
var bandArr = [];

$(document).ready(function() {
  $("#band-form").submit(function(event) {
    event.preventDefault();
    console.log(bandArr);
    var bandName= $("#band-name").val();
    var newBand = new Band(bandName);
    bandArr.push(newBand);
    newBand.id = bandArr.length;
    console.log(newBand.id)
    console.log(bandArr);
    console.log(bandName);
    console.log(newBand);
    $("#band-list").append("<li>" + "<a href=''>" + newBand.name + "</a>" + "</li>");
    console.log("#band");
  });

  $("#band-list li").click(function(event) {
    $("#character-form").hide()
  });

  $("#character-form").submit(function(event) {
    event.preventDefault();
    var characterName = $("#characterName").val();
    var gender = $("#gender").val();
    var instrument = $("#instrument").val();
    var type = $("#type").val()
    var newCharacter = new Character(characterName, gender, instrument, type);
    console.log(characterName);
    console.log(newCharacter);
    $("#character-list").append("<li>" + "<a href=''>" + newCharacter.name + "</a>" + "</li>");

  });
});
