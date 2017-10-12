import { Band } from './../js/band.js';
// var Band = require('./../js/band.js').bandModule;
// exports.bandModule = BandMod;

var bandArr = [];

$(document).ready(function() {
  $("#band-form").submit(function(event) {
    event.preventDefault();
    console.log(bandArr);
    var bandName = $("#band-name").val();
    var newBand = new Band(bandName);
    bandArr.push(newBand);
    console.log(bandArr);
    console.log(bandName);
    console.log(newBand);
    $("#band-list").append("<li>" + "<a href='band.html'>" + newBand.name + "</a>" + "</.li>");
  });
});
