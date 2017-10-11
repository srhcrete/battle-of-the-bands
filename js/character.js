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
