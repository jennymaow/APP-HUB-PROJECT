import "./Home.css";
import { printTemplate as PokeapiTemplate } from "../Pokeapi/Pokeapi";
import { initContent } from "../../main";
const username = localStorage.getItem("user");
const template = () => `
<section class="home">
    
    <h1>Hello ${username}</h1>
    <div class="games">
    <button class="pokeapiBtn" id="pokeapi">Pokeapi</button>
    <button class="memoryGameBtn">Memory Game</button>
    <button class="quizBtn">Quiz</button>
    <button class="tresEnRayaBtn">3 en raya</button>
    </div>
    <button class="logout" id="logout">Logout</button>
</section>
`;

const enterGame = (route) =>{
    switch(route){
        case undefined:
            template();
        break;
        case "Pokeapi":
            PokeapiTemplate();
        break;
    }
}

const addListeners = () =>{
document.querySelector("#logout").addEventListener("click",()=>{
    localStorage.clear();

    initContent("Login");
});

document.querySelector("#pokeapi").addEventListener("click",()=>enterGame("Pokeapi"));
}



export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
   /*  document.querySelector(".colortheme").innerHTML += `
  <button class="logout">Logout</button>
  `; */
};

enterGame();