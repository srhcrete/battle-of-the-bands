export class Band {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.victory = false;
    this.fans = 1;
    this.level = 4;
    this.characters = [];
  }

  addCharacters(character) {
    this.characters.push(character);
  }

  roll() {
    var dice = Math.floor(Math.random() * (this.level-1)) +1;
    if (dice === 1) {
      alert("You got caught lip-synching worse than Milli Vanilli, you loose all your fans!");
      this.fans = 0;
      return 0;
    } else {
      this.fans += dice;
      return dice;
    }
  }
}

// Band.prototype.addCharacters = function(character){
//   this.character.push(character);
// };
