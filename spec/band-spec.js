import { Band } from './../js/band.js';
var bandito = new Band("Bandito");

describe('Band', function () {
  it('should have a name', function () {
    expect(bandito.name).toEqual("Bandito");
  });

  it('characters to equal empty array', function() {
    expect(bandito.characters).toEqual([]);
  });

  it('should add a character to a band', function() {
    bandito.addCharacters('Lilly');
    expect(bandito.characters).toEqual(['Lilly']);
  });

  it('should return a number when band rolls', function() {
    expect(bandito.roll()).toEqual(jasmine.any(Number));
  });

  it('should alert and set fans to zero when a 1 is rolled', function() {
    bandito.level = 1;
    bandito.roll();
    expect(bandito.fans).toEqual(0);
  });
  // it('adds characters to band', function() {
  //   click.button('#add-button')
  // });
  //above will go in band-interface-spec file
  });








// var Player = require('./../js/pigdice.js').pigdiceModule;
//
// describe('Player', function () {
//   it('should return a name entered by user', function() {
//     var playa = new Player("Javi")
//     expect(playa.name).toEqual("Javi");
//   });
//   it('should return a number when user rolls', function() {
//     var playa = new Player("AAron")
//     expect(playa.roll()).toEqual(jasmine.any(Number));
//   });
// });
//
//
// exports.bandModule = Band;
