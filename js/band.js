export class Band {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.victory = false;
    this.fans = 1;
    this.level = 4;
    this.characters = [];
    this.id = 0;
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

  groupie() {
    if (this.fans % 100 == 0) {
      this.characters.push("groupie");
    }
  }
}

export class Character {
  constructor(name, gender, instrument, type) {
    this.name = name;
    this.gender = gender;
    this.instrument = instrument;
    this.type = type;
    this.inventory = [];

  }

  addInventory(item) {
    this.inventory.push(item);
  }

  upgradeType(newType) {
    this.type = newType;
  }
}
