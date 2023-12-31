//pokemon models
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    name: String,
    type: String,
    image: String
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
