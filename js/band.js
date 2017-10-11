export class Band {
  constructor(name) {
    this.name = name;
    this.dice = 0;
    this.victory = false;
    this.fans = 0;
    this.level = 0;
    this.characters = [];
  }

  addCharacters(character) {
    this.characters.push(character);
  }
}

// Band.prototype.addCharacters = function(character){
//   this.character.push(character);
// };


exports.bandModule = Band;
