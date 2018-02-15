//Chain a few promises together using axios and pokemon api to console log 
//"here's three pokemon from the api: {name1}, {name2}, {name3}
var axios = require('axios');


var name1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((pokemon)=>{
    return new Promise((resolve, reject)=>{
        resolve(pokemon.data.name);
    })
})
var name2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/').then((pokemon)=>{
    return new Promise((resolve ,reject)=>{
        resolve(pokemon.data.name);
    })    
})
var name3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/').then((pokemon)=>{
    return new Promise((resolve, reject)=>{
        resolve(pokemon.data.name); 
    })
})
var allPokemon = [name1, name2, name3];

Promise.all(allPokemon).then((values)=>{
    //console.log(`${values[0]}, ${values[1]}, ${values[2]}`); this way will print them on one line like a string.
    console.log(values[0]);
    console.log(values[1]);
    console.log(values[2]);
})
