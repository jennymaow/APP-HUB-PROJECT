import "./PPoT.css";
import { returnBtn } from "../../components/returnBtn/returnBtn";
import { addListener as returnHomeBtn } from "../../components/returnBtn/returnBtn";
import { winner as gameWinner } from "../../utils/winnerPPoT";
const options = ["piedra", "papel", "tijera"];
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
        <h2>Player 1</h2>
        <h3>${player1}</h3>
        <div class="btnPPoT">
            <button id="piedra" class="optionPPoT">Piedra</button>
            <button id="papel" class="optionPPoT">Papel</button>
            <button id="tijera" class="optionPPoT">Tijera</button>
        </div>
        <figure id="player1Choice"></figure>
    </div>
    <div class="player2" id="player2">
        <h2>Player 2</h2>
        <h3>Pikachu</h3>
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
