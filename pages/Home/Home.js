import "./Home.css";
import { printTemplate as PokeapiTemplate } from "../Pokeapi/Pokeapi";
import { initContent } from "../../main";
import { printTemplate as PPoTTemplate } from "../PPoT/PPoT";
import { changeColor } from "../../utils/changeColor";


const username = localStorage.getItem("user");
const avatar = localStorage.getItem("icon");
const template = () => `
<section class= "colortheme">
    <button class="coloricon" id= "coloricon"> Color theme</button>
</section>
<section class="home">
    <figure class="profileBack" id="profileBack"></figure>
    <figure class="homeUserAvatarFrame"><img class="homeUserAvatar" src=${avatar} alt="user avatar"/></figure>
    <h1>Hello, trainer ${username}</h1>
    <div class="cardEdge"></div>
    <div class="games">
    <button class="pokeapiBtn" id="pokeapi"><p class="gameName">Pokédex</p></button>
    <button class="memoryGameBtn"><p class="gameName">Memory Game</p></button>
    <button class="quizBtn"><p class="gameName">Quiz</p></button>
    <button class="PPoTBtn" id="ppot"><p class="gameName">PPoT</p></button>
    </div>
    <button class="logout" id="logout"><img src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675539928/Pokemons%20icons/logout_exit_icon_176185_y75enu.png" alt= "logout icon"/>Log out</button>
</section>
`;


const allGameNames = document.querySelectorAll(".gameName");
for (const name of allGameNames) {
  name.classList.add("slide-in-top");
}

const enterGame = (route) => {
  switch (route) {
    case undefined:
      template();
      break;
    case "Pokeapi":
      PokeapiTemplate();
      break;
    case "PPoT":
      PPoTTemplate();
      break;
  }
};

const addListeners = () => {
  document.querySelector("#logout").addEventListener("click", () => {
    localStorage.clear();

    initContent("Login");
  });

  document
    .querySelector("#pokeapi")
    .addEventListener("click", () => enterGame("Pokeapi"));

  document
    .querySelector("#ppot")
    .addEventListener("click", () => enterGame("PPoT"));

  document.querySelector("#coloricon").addEventListener("click", () => {
    const profileBack = document.querySelector("#profileBack");
    profileBack.style.backgroundColor = changeColor();
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};

enterGame();
