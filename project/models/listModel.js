class List {
    constructor(id, name, note = '') {
      this.id = id;
      this.name = name;
      this.note = note;
      this.items = []; // Store item IDs associated with this list
    }
  }
  
  module.exports = List;
  