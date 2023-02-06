import "./returnBtn.css";
import { initContent } from "../../main";
import { changeColor } from "../../utils/changeColor";
export const returnBtn = () => `
<button class="return" id="returnHome"><img src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1675533027/Pokemons%20icons/arrow_back_chevron_direction_left_navigation_right_icon_123223_yll6zu.png" alt="return icon"/> Back</button>
`;

export const addListener = () => {
  document.querySelector("#returnHome").addEventListener("click", () => {
    initContent("Home");
    const profileBack = document.querySelector("#profileBack");
    profileBack.style.backgroundColor = changeColor();
    document.body.style.backgroundImage ="white";
  });
};
