import "./Login.css";
import { avatars } from "../../data/avatars";
import { initContent } from "../../main";
import { changeColor } from "../../utils/changeColor";
const template = () => `
<section class="login">
  <div class= "inputlogin">
    <h1>Pokemon Game-Hub</h1>
    <div class="chooseAvatar" id="chooseAvatar">
      <button id="prev"><img src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675533027/Pokemons%20icons/arrow_back_chevron_direction_left_navigation_right_icon_123223_yll6zu.png" alt="previous icon"/></button>
      <div class="avatarContainer">
        <img id="playerAvatar" class=" playerAvatar" src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675531801/Pokemons%20icons/pikachu_icon-icons.com_67535_lwkrat.png" alt="avatar icon"/>
      </div>
      <button id="next"><img src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675533027/Pokemons%20icons/arrows_chevron_direction_left_move_next_right_icon_123222_kogexs.png" alt="next icon"</button>
      
    </div>

    <button id="randomAvatar" class="randomAvatar"><img src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675534264/Pokemons%20icons/play_dice_gambling_game_luck_icon_225835_mnlerb.png" alt="random dice icon"/></button>

    <input type="text" id="loginInput" placeholder=" Introduce your name" />
    <button class="enter" id="enter">Enter Hub</button>
</div>


</section>
`;

const chooseNextAvatar = (avatars) => {
  const avatarIcon = document.querySelector("#playerAvatar");
  const actualAvatarIndex = avatars.indexOf(avatarIcon.src);
  avatarIcon.src = "";
  avatarIcon.src = avatars[actualAvatarIndex + 1];
};

const choosePreviousAvatar = (avatars) => {
  const avatarIcon = document.querySelector("#playerAvatar");
  const actualAvatarIndex = avatars.indexOf(avatarIcon.src);
  avatarIcon.src = "";
  avatarIcon.src = avatars[actualAvatarIndex - 1];
};

const randomAvatar = (avatars) => {
  const avatarIcon = document.querySelector("#playerAvatar");
  const randomPosition = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  avatarIcon.src = "";
  avatarIcon.src = avatars[randomPosition(0, 17)];
};

const checkListeners = (avatars) => {
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const avatarIcon = document.querySelector("#playerAvatar");
  const actualAvatarIndex = avatars.indexOf(avatarIcon.src);
  actualAvatarIndex === 0
    ? (prevBtn.disabled = true)
    : (prevBtn.disabled = false);
  actualAvatarIndex === avatars.length - 1
    ? (nextBtn.disabled = true)
    : (nextBtn.disabled = false);
};

export const addListeners = () => {
  const myInput = document.querySelector("#loginInput");
  const avatarIcon = document.querySelector("#playerAvatar");
  document.querySelector("#enter").addEventListener("click", (event) => {
    if (myInput.value != "") {
      localStorage.setItem("user", myInput.value); 
      localStorage.setItem("icon", avatarIcon.src);
    }
   
    initContent();
    const profileBack = document.querySelector("#profileBack");
    profileBack.style.backgroundColor = changeColor();
  });
  document.querySelector("#randomAvatar").addEventListener("click", () => {
    randomAvatar(avatars);
    checkListeners(avatars);
  });
  document.querySelector("#prev").addEventListener("click", () => {
    choosePreviousAvatar(avatars);
    checkListeners(avatars);
  });
  document.querySelector("#next").addEventListener("click", () => {
    chooseNextAvatar(avatars);
    checkListeners(avatars);
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};
