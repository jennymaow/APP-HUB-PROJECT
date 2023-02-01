import "./Pokeapi.css";
import axios from "axios";

const template = () => `
<section class="pokeapi">
    <h1>Pokeapi</h1>
    <div id="container"></div>
</section>
`;

const getPokemons = () => {
  const pokemonsList = [];
  for (let i = 1; i < 151; i++) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => pokemonsList.push(res.data))
    
  }
  /* for (let i=0; i<pokemonsList.length;i++){
    //printPokemon(pokemonsList[i]);
    console.log (pokemonsList[i]);
  } */
  
};

const printPokemon = (pokemons) => {
  for (const pokemon of pokemons) {
    document.querySelector("#container").innerHTML += `
        <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
        <h2>${pokemon.name}</h2>
        <p>${pokemon.id}</p>
        `;
  }
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getPokemons();
};
