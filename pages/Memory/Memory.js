import "./Memory.css";
import { returnBtn } from "../../components/returnBtn/returnBtn";
import { addListener as returnHomeBtn } from "../../components/returnBtn/returnBtn";

const template = () => `
<section class="MemoryGame" id="MemoryGame">
${returnBtn()}
<h1>Pokemon mini battle</h1>`;



const addListeners = () => {
    returnHomeBtn(); }

    export const printTemplate = () => {
        document.querySelector("#app").innerHTML = template();
        addListeners();
      };