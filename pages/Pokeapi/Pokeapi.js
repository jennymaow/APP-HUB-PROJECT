import "./Pokeapi.css";
import { initContent } from "../../main";

const template = () => `
<section class="pokeapi">
    <button class="return" id="returnHome">⬅ Return</button>
    <h1>PokeAPI</h1>
    <div class="searchPokemon">
    <input type="text" id="searchedPokemon" placeholder="Search"/>
    <button class="searchBtn" id="searchBtn">Search</button>
    </div>
    <div id="container"></div>
</section>
`;

let pokemonsList = [];
let allPokemons = [];

const getPokemons = async () => {
  for (let i = 1; i < 151; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await res.json();
    pokemonsList.push(json);
  }

  mapPokemons(pokemonsList);
};

const mapPokemons = (pokemons) => {
  allPokemons = pokemons.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    id: pokemon.id,
  }));

  printPokemon(allPokemons);
};

const printPokemon = (pokemons) => {
  const container = document.querySelector("#container");
  container.innerHTML="";
  for (const pokemon of pokemons) {
    const figure = document.createElement("figure");
    figure.innerHTML =`
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
        <p>#${pokemon.id}</p>
        `;
    container.appendChild(figure);
  }
};

const filterPokemons = (pokemons) => {
  const myInput = document.querySelector("#searchedPokemon");
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(myInput.value.toLowerCase())
  );

  printPokemon(filteredPokemons);
};


const addListeners = () => {
  document
    .querySelector("#returnHome")
    .addEventListener("click", () => initContent("Home"));
  document
    .querySelector("#searchBtn")
    .addEventListener("click", () => filterPokemons(allPokemons));
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
  getPokemons();
};
