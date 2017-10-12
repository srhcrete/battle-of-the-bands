import { Character } from './../js/character.js';
var lilly = new Character("Lilly", "Female", "Guitar", "Lead Singer/Guitarist");

describe('Character', function () {
  it('should have a name', function () {
    expect(lilly.name).toEqual("Lilly");
  });
  
  it('characters to equal empty inventory', function() {
    expect(lilly.inventory).toEqual([]);
  });

  it('should add an item to the inventory', function() {
    lilly.addInventory('Pic of Destiny');
    expect(lilly.inventory).toEqual(['Pic of Destiny']);
  });

  it('should upgrade the character type', function() {
    lilly.upgradeType('Studio');
    expect(lilly.type).toEqual('Studio');
  });

  // it('should return a number when band rolls', function() {
  //   expect(bandito.roll()).toEqual(jasmine.any(Number));
  // });
  //
  // it('should alert and set fans to zero when a 1 is rolled', function() {
  //   bandito.level = 1;
  //   bandito.roll();
  //   expect(bandito.fans).toEqual(0);
  // });

});
