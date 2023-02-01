import "./Header.css";

const template = () => `
    <section class= "colortheme">
    <button class="coloricon" id= "coloricon"></button>
    <h4>Color theme</h4>
    </section>
    `;

const changeThemeColor = () => {
  document.querySelector("#coloricon").addEventListener("click", () => {
    const randomNumber = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    let R = randomNumber(0, 255);
    let G = randomNumber(0, 255);
    let B = randomNumber(0, 255);
    const color = `rgb(${R},${G},${B})`;
    document.body.style.backgroundColor = color;
  });
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  changeThemeColor();
};
