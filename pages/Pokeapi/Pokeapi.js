import "./Pokeapi.css";
import { printTypeIcon } from "../../utils/printTypeIcon";
import { template as typeBtnTemplate } from "../../utils/typeBtns";
import { returnBtn } from "../../components/returnBtn/returnBtn";
import { addListener as returnHomeBtn } from "../../components/returnBtn/returnBtn";
import { addColorClass } from "../../utils/addColorClass";
const template = () => `
<section class="pokeapi">
    ${returnBtn()}
    <h1>${localStorage.getItem("user")}'s Pokedex</h1>
    ${typeBtnTemplate()}
    <div class="searchPokemon">
    <input type="text" id="searchedPokemon" placeholder="  Search Pokemon"/>
    <button class="searchBtn" id="searchBtn"><img src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675552618/Pokemons%20icons/brows_browsing_find_search_seo_web_zoom_icon_123196_whqsod.png" alt="search icon"/></button>
    </div>
    <span class="loader"></span>
    <div id="container" class="container"></div>
</section>
`;

let pokemonsList = [];
let allPokemons = [];

const getPokemons = async () => {
  pokemonsList = [];
  for (let i = 1; i < 151; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await res.json();
    pokemonsList.push(json);
  }

  mapPokemons(pokemonsList);
  document.querySelector(".loader").style.display="none";
};

const mapPokemons = (pokemons) => {
  allPokemons = [];
  allPokemons = pokemons.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.home.front_default,
    id: pokemon.id,
    types: pokemon.types,
    height: pokemon.height,
    weight: pokemon.weight,
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
        <div class="pokemonCardEdge"></div>
        <img src=${pokemon.image} alt=${pokemon.name} class="pokemonImage" />
        <h2>${pokemon.name} #${pokemon.id}</h2>
        <div class="pokemonDescription">
        <p class="height"> <span>Height</span> ${pokemon.height / 10}m</p>
        <p class="weight"><span> Weight</span> ${pokemon.weight / 10}kg</p>
        </div>
        `;
    const iconsDiv = document.createElement("div");
    iconsDiv.classList.add(".typeIcons");

    addColorClass(figure, pokemon.types[0].type.name);

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

const typeColor = (pokemons) => {
  for (const pokemon of pokemons) {
    const pokemonBack = document.querySelector("#pokemonBack");
    console.log(pokemon.types[0].type.name);
    pokemonBack.classList.add(`"${pokemon.types[0].type.name}"`);
  }
};

typeColor(allPokemons);

const filterPokemons = (pokemons) => {
  const myInput = document.querySelector("#searchedPokemon");
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(myInput.value.toLowerCase())
  );
  printPokemon(filteredPokemons);
};

const filterTypePokemon = (pokemons, pokemonType) => {
  const filteredTypePokemons = pokemons.filter(
    (pokemon) => pokemon.types[0].type.name === pokemonType
  );

  if (filteredTypePokemons.length > 0) {
    printPokemon(filteredTypePokemons);
  } else {
    const noPokemon = document.createElement("h3");
    const container = document.querySelector("#container");
    container.innerHTML = "";
    noPokemon.textContent = "No results";
    container.appendChild(noPokemon);
  }
};

const addListeners = () => {
  document
    .querySelector("#searchBtn")
    .addEventListener("click", () => filterPokemons(allPokemons));
  document
    .querySelector("#all")
    .addEventListener("click", () => printPokemon(allPokemons));
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
