import "./Login.css";
import { printTemplate as HomeTemplate } from "../Home/Home";
const template = () => `
<section class="login">
<div class= "inputlogin">
    <h1>Jenny's Game-Hub</h1>
    <h2>Introduce tu nombre</h2>
    <input type="text" id="loginInput" />
    <button class="enter" id="enter">Enter</button>
</div>


</section>
`;

export const addListeners = () =>{
    const myInput = document.querySelector("#loginInput");
    document.querySelector("#enter").addEventListener("click", (event)=>{
        localStorage.setItem("user",myInput.value);
        HomeTemplate();
    })
}

export const printTemplate = () => {
    document.querySelector("#app").innerHTML= template();
    addListeners();
}