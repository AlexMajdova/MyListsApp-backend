class Item {
    constructor(id, name, rating, difficulty, type, favorite = false, note = '', time) {
      this.id = id;
      this.name = name;
      this.rating = rating;
      this.difficulty = difficulty;
      this.type = type; // 'Recipe' or 'Movie'
      this.favorite = favorite;
      this.note = note;
      this.time = time; // Time in hours
    }
  }
  
  module.exports = Item;
  