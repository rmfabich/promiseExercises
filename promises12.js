var axios = require('axios');
var pokemonName;

axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((response)=>{
  pokemonName = response.data.name;
});

console.log(`the pokemon is ${pokemonName}`);

//modify the code above to get the console log to log the name and not undefined
