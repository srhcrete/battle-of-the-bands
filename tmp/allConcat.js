import { Band } from './../js/band.js';
// var Band = require('./../js/band.js').bandModule;
// exports.bandModule = BandMod;


$(document).ready(function() {
  $("#band-form").submit(function(event) {
    event.preventDefault();
    var newBand = new Band(" ");
    var bandName = $("#band-name").val();
    newBand.name = bandName;
    console.log(bandName);
    console.log(newBand);
    $("#band-list").append("<li>" + newBand.name + "</.li>");
  });
});

