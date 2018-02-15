//usually, you'll be using a promise rather than creating one. Let's actually use a library that does this. This is something you'll actually
//do a lot in the real world

//use npm to install "axios"

var axios = require('axios');

//axios has a method called "get" that is a promise object. The first argument passed into get is a url. We'll be playing with the free pokemon api. 
//I've written the code below, but I want you guys to modify it to console log the name of the pokemon. Be sure to account for errors! 

axios.get('https://pokeapi.co/api/v2/pokemon/365/').then((pokemon)=>{
    console.log(pokemon.data.name);
})
