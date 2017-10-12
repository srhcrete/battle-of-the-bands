import { Band } from './../js/band.js';
// var Band = require('./../js/band.js').bandModule;
// exports.bandModule = BandMod;

var newBand = new Band(" ");

$(document).ready(function() {
  $("#band-form").submit(function(event) {
    event.preventDefault();
    var bandName = $("#band-name").val();
    newBand.name = bandName;
    console.log(bandName);
    console.log(newBand);
    $('#band-list').text(newBand.name);
    $("#band-list").append("<li>" + newBand.name + "</.li>");
  });
});

