var pokedexNumberToName = require('./pokedex-number-to-name');
var pokemonNameToNumber = require('./pokemon-name-to-number');

var baseUrl = 'http://www.pokestadium.com/sprites/xy/';
var extension = '.gif';
var workingUrl = '';

function getGifByPokedexNumber(pokedexNumber) {
  if (pokedexNumberToName.hasOwnProperty(pokedexNumber)) {
    var pokemonUrlName = pokedexNumberToName[pokedexNumber]
      .toString()
      .replace(/\./g,'')
      .replace(/'/g,'')
      .replace(/\s/g, "-");

    workingUrl = baseUrl + pokemonUrlName + extension;
    return baseUrl + pokemonUrlName + extension;
  } else {
    return workingUrl;
    // throw new Error('Invalid pokedex number ' +  pokedexNumber);
  }
}

function getGifByPokemonName(pokemonName) {
  var lowercasePokemonName = pokemonName.toLowerCase();
  var nidoran = 'nidoran';
  if (pokemonNameToNumber.hasOwnProperty(lowercasePokemonName)) {
    var pokemonUrlName = lowercasePokemonName
      .replace(/\./g,'')
      .replace(/'/g,'')
      .replace(/\s/g, "-");
    if (pokemonName == nidoran){
      var rand = Math.floor(Math.random() * 2) + 1;
      if (rand == 2){
        pokemonUrlName = 'nidoranf';
      }else{
        pokemonUrlName = 'nidoranm';
      }
    }
    workingUrl = baseUrl + pokemonUrlName + extension;
    return baseUrl + pokemonUrlName + extension;
  } else {
    return workingUrl;
    // throw new Error('Invalid pokemon name "' + pokemonName + '"');
  }
}

function pokemonGif(identifier) {
  if (typeof identifier === 'string') {
    return getGifByPokemonName(identifier);
  } else if (typeof identifier === 'number') {
    return getGifByPokedexNumber(identifier);
  } else {
    throw new TypeError('pokemonGif input must be type string or number');
  }
}

module.exports = pokemonGif;
