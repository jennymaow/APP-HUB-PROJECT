export const winner = (choice1, choice2, player1) => {
  const winnerPhrase = document.querySelector("#winnerPhrase");
  console.log(choice1, choice2);
  if (choice1 === "wartortle" && choice2 === "blastoise") {
    winnerPhrase.textContent = "Pikachu WIN";
  } else if (choice1 === "blastoise" && choice2 === "squirtle") {
    winnerPhrase.textContent = "Pikachu WIN";
  } else if (choice1 === "squirtle" && choice2 === "wartortle") {
    winnerPhrase.textContent = "Pikachu WIN";
  } else if (choice2 === "wartortle" && choice1 === "blastoise") {
    winnerPhrase.textContent = `${player1} WIN`;
  } else if (choice2 === "blastoise" && choice1 === "squirtle") {
    winnerPhrase.textContent = `${player1} WIN`;
  } else if (choice2 === "squirtle" && choice1 === "wartortle") {
    winnerPhrase.textContent = `${player1} WIN`;
  } else {
    winnerPhrase.textContent = "¡Empate!";
  }
};
