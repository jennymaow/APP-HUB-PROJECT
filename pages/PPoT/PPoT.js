import "./PPoT.css";
import { returnBtn } from "../../components/returnBtn/returnBtn";
import { addListener as returnHomeBtn } from "../../components/returnBtn/returnBtn";
import { winner as gameWinner } from "../../utils/winnerPPoT";
const options = ["bulbasur", "charmander", "squirtle"];
let player1 = localStorage.getItem("user");
let player1Choice = "";
let player2Choice = "";
const template = () => `
<section class="PPoT" id="PPoT">
${returnBtn()}
<h1>Pokemon combat</h1>
<p id="winnerPhrase"></p>
<div class="gamePPoT">
    <div class="player1" id="player1">
        <div class="player1Info">
          <h2>Player 1</h2>
          <h3>${player1}</h3>
        </div>
        <div class="btnPPoT">
            <button id="wartortle" class="optionPPoT"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif" alt="animated bulbasur"/></button>
            <button id="blastoise" class="optionPPoT"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif" alt="animated charmander"/></button>
            <button id="squirtle" class="optionPPoT"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif" alt="animated squirtle"/></button>
        </div>
        <figure id="player1Choice"></figure>
    </div>
    <div class="player2" id="player2">
        <div class="player2Info">
          <h2>Player 2</h2>
          <h3>Pikachu</h3>
        </div>
        <div class="btnPlayer2">
        <button id="wartortle" ><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif" alt="animated bulbasur"/></button>
        <button id="blastoise"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif"/></button>
        <button id="squirtle"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif" alt="animated squirtle"/></button>
    </div>
        <figure id="player2Choice"></figure>
    </div>
</div>

</section>
`;

const printPlayer1Choice = (choice) => {
  const figure = document.querySelector("#player1Choice");
  player1Choice = choice;
  figure.textContent = player1Choice;
};

const randomPlayer2Choice = (optionList) => {
  const randomPosition = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const figure = document.querySelector("#player2Choice");
  player2Choice = optionList[randomPosition(0, optionList.length - 1)];
  figure.textContent = player2Choice;
};

const addListeners = () => {
  returnHomeBtn();

  const optionBtns = document.querySelectorAll(".optionPPoT");
  for (const btn of optionBtns) {
    btn.addEventListener("click", (ev) => {
      randomPlayer2Choice(options);
      printPlayer1Choice(ev.target.id);
      const PPoT = document.querySelector("#PPoT");
      const winnerPhrase = document.querySelector("#winnerPhrase");
      gameWinner(ev.target.id, player2Choice, player1);
      PPoT.appendChild(winnerPhrase);
    });
  }
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
