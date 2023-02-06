import "./Home.css";
import { printTemplate as PokeapiTemplate } from "../Pokeapi/Pokeapi";
import { initContent } from "../../main";
import { printTemplate as PPoTTemplate } from "../PPoT/PPoT";
import { changeColor } from "../../utils/changeColor";
import { printTemplate as QuizTemplate } from "../Quiz/Quiz";

const template = () => `
<section class= "colortheme">
    <button class="coloricon" id= "coloricon"> Color theme</button>
</section>
<section class="home">
    <figure class="profileBack" id="profileBack"></figure>
    <figure class="homeUserAvatarFrame"><img class="homeUserAvatar" src=${localStorage.getItem("icon")} alt="user avatar"/></figure>
    <h1>Hello, trainer ${localStorage.getItem("user")}</h1>
    <div class="cardEdge"></div>
    <div class="games">
    <button class="pokeapiBtn" id="pokeapi"><p class="gameName">Pokédex</p></button>
    <button class="quizBtn" id="quizBtn"><p class="gameName">Pokemon Quiz</p></button>
    <button class="PPoTBtn" id="ppot"><p class="gameName">PPoT</p></button>
    </div>
    <button class="logout" id="logout"><img src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675539928/Pokemons%20icons/logout_exit_icon_176185_y75enu.png" alt= "logout icon"/>Log out</button>
</section>
`;

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
    case "QuizGame":
      QuizTemplate();
      break;
  }
};

const addListeners = () => {
  document.querySelector("#logout").addEventListener("click", () => {
    localStorage.clear();
    initContent();
  });

  document.querySelector("#coloricon").addEventListener("click", () => {
    const profileBack = document.querySelector("#profileBack");
    profileBack.style.backgroundColor = changeColor();
  });

  document
    .querySelector("#pokeapi")
    .addEventListener("click", () => enterGame("Pokeapi"));

  document.querySelector("#ppot").addEventListener("click", () => {
    enterGame("PPoT");
    document.body.style.backgroundImage =
      "url('https://opengameart.org/sites/default/files/Preview_143.png')";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundSize ="140%"
  });

  document
    .querySelector("#quizBtn")
    .addEventListener("click", () => enterGame("QuizGame"));
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};

enterGame();
