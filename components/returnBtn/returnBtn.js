import "./returnBtn.css";
import { initContent } from "../../main";
export const returnBtn = () => `
<button class="return" id="returnHome">⬅ Return</button>
`;

export const addListener = () => {
  document
    .querySelector("#returnHome")
    .addEventListener("click", () => initContent("Home"));
};
