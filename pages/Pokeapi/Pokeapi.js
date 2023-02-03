import "./Pokeapi.css";
import { printTypeIcon } from "../../utils/printTypeIcon";
import { template as typeBtnTemplate } from "../../utils/typeBtns";
import { returnBtn } from "../../components/returnBtn/returnBtn";
import { addListener as returnHomeBtn } from "../../components/returnBtn/returnBtn";

const template = () => `
<section class="pokeapi">
    ${returnBtn()}
    <h1>PokeAPI</h1>
    ${typeBtnTemplate()}
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
    types: pokemon.types,
  }));

  printPokemon(allPokemons);
};

const printPokemon = (pokemons) => {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  for (const pokemon of pokemons) {
    const figure = document.createElement("figure");
    figure.classList.add("pokemoncard");
    figure.innerHTML = `
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
        <p>#${pokemon.id}</p>
        `;
    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add(".typeIcons");

    for (const type of pokemon.types) {
      const typeIcon = document.createElement("img");
      typeIcon.classList.add("icon");
      let pokemonType = type.type.name;
      printTypeIcon(typeIcon, pokemonType);
      iconsDiv.appendChild(typeIcon);
    }
    printTypeIcon(allPokemons);
    container.appendChild(figure);
    figure.appendChild(iconsDiv);
  }
};

const filterPokemons = (pokemons) => {
  const myInput = document.querySelector("#searchedPokemon");
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(myInput.value.toLowerCase())
  );
  printPokemon(filteredPokemons);
};

const filterTypePokemon = (pokemons, pokemonType) => {
  const filteredTypePokemons = pokemons.filter((pokemon) =>
    pokemon.types[0].type.name === pokemonType
  );
  
  printPokemon(filteredTypePokemons);
};

const addListeners = () => {
  document
    .querySelector("#searchBtn")
    .addEventListener("click", () => filterPokemons(allPokemons));
  const allBtns = document.querySelectorAll(".typeBtn");
  for (const btn of allBtns) {
    btn.addEventListener("click", (ev) => {
      filterTypePokemon(allPokemons, ev.target.id);
    });
  }
  returnHomeBtn();
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
  getPokemons();
};
