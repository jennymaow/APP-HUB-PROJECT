import "./PPoT.css";
import { returnBtn } from "../../components/returnBtn/returnBtn";
import { addListener as returnHomeBtn } from "../../components/returnBtn/returnBtn";
import { winner as gameWinner } from "../../utils/winnerPPoT";
import { asignGIF } from "../../utils/asignBattleGIF";
const options = ["wartortle", "blastoise", "squirtle"];
let player2Choice = "";
const template = () => `
<section class="PPoT" id="PPoT">
<div class="insWindow" id="insWindow">
  <div class="insModal" id="insModal">
    <h5 id="ins" class="ins">Pokemon mini battle</h5>
    <h6>Choose a Pokemon and play against Pikachu</h6>
    <div class="insImage">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif" alt="squirtle GIF"/>
        <img class="biggerThan" src="https://static.thenounproject.com/png/801787-200.png" alt="bigger than icon"/>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif" alt="blastoise avatar"/>
          <img class="biggerThan" src="https://static.thenounproject.com/png/801787-200.png" alt="bigger than icon"/>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif" alt="wartortle avatar"/>
          <img class="biggerThan"  src="https://static.thenounproject.com/png/801787-200.png" alt="bigger than icon"/>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif" alt="squirtle GIF"/>
           
    </div>
    <button class="closeInsModal" id="closeInsModal">Close</button>
  </div>
</div>    
${returnBtn()}
<button class="gameInfo" id="gameInfo"><img src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/772e07f0ccf593c.png" alt="info icon"/></button>
<h1>Pokemon mini battle</h1>

<div class="gamePPoT">
    <div class="player1" id="player1">
        <div class="player1Info">
          <img src=${localStorage.getItem("icon")} alt="avatar player 1"/>
          <div class="P1">
          <h2>PLAYER 1</h2>
          <h3>${localStorage.getItem("user")}</h3>
          </div>
        </div>
        <div class="gameP1">
        <div class="btnPPoT">
            <button id="wartortle" class="optionPPoT"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif" alt="animated wartortle"/></button>
            <button id="blastoise" class="optionPPoT"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif" alt="animated blastoise"/></button>
            <button id="squirtle" class="optionPPoT"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif" alt="animated squirtle"/></button>
        </div>
        <figure id="player1Choice" class="player1Choice"><img id="player1ChoiceGIF"/></figure>
        </div>
    </div>
    <div class="player2" id="player2">
        <div class="player2Info">
          
          <div class="P2">
            <h2>PLAYER 2</h2>
            <h3>Pikachu</h3>
          </div>
          <img src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675531801/Pokemons%20icons/pikachu_icon-icons.com_67535_lwkrat.png" alt="pikachu avatar"/>
        </div>
        <div class="gameP2">
        <figure id="player2Choice" class="player2Choice"><img id="player2ChoiceGIF"/></figure>
        <div class="btnPlayer2">
        <button id="wartortle" ><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif" alt="animated wartortle"/></button>
        <button id="blastoise"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif" alt="animated blastoise"/></button>
        <button id="squirtle"><img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif" alt="animated squirtle"/></button>
    </div>
        
        </div>
    </div>
</div>
<p id="winnerPhrase" class="winnerPhrase"></p>
</section>
`;

const printPlayer1Choice = (choice) => {
  const player1ChoiceGIF = document.querySelector("#player1ChoiceGIF");
  asignGIF(choice,player1ChoiceGIF);
};

const randomPlayer2Choice = (optionList) => {
  const randomPosition = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  player2Choice = optionList[randomPosition(0, optionList.length - 1)];
  const player2ChoiceGIF = document.querySelector("#player2ChoiceGIF");
  asignGIF(player2Choice,player2ChoiceGIF);
};

const addListeners = () => {
  returnHomeBtn();
  const insWindow = document.querySelector("#insWindow");
  document.querySelector("#closeInsModal").addEventListener("click", ()=>{
    insWindow.style.display ="none";
  })
 document.querySelector("#gameInfo").addEventListener("click", ()=>{
  insWindow.style.display ="flex";
 });

  const optionBtns = document.querySelectorAll(".optionPPoT");
  for (const btn of optionBtns) {
    btn.addEventListener("click", (ev) => {
      const player2ChoiceGIF = document.querySelector("#player2ChoiceGIF");
      player2ChoiceGIF.src="";
      randomPlayer2Choice(options);
      printPlayer1Choice(btn.id);
      const PPoT = document.querySelector("#PPoT");
      const winnerPhrase = document.querySelector("#winnerPhrase");
      gameWinner(btn.id, player2Choice, localStorage.getItem("user"));
      PPoT.appendChild(winnerPhrase);
    });
  }
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
