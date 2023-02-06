export const quizMasterLevel = (trainerLevel, trainerLevelImg, number) => {
  if (number === 0 || number===1) {
    trainerLevel.textContent = "Ups, you are Rookie Pokemon Trainer";
    trainerLevelImg.src =
      "https://media.tenor.com/IweVAptJIJUAAAAj/%D1%82%D0%B0%D0%BD%D1%86%D1%8B-%D0%B6%D1%8B%D1%80%D0%BD%D1%8B%D0%B9.gif";
  } else if (number===2 || number=== 3) {
    trainerLevel.textContent = "Keep learning, you are Normal Pokemon Trainer";
    trainerLevelImg.src =
      "https://media.tenor.com/fmoqlQaRj1YAAAAi/%E3%83%94%E3%82%AB%E3%83%81%E3%83%A5%E3%82%A6.gif";
  } else if (number===4 || number=== 5) {
    trainerLevel.textContent = "Wow, you are Ultra Pokemon Trainer";
    trainerLevelImg.src =
      "https://media.tenor.com/Jx41K1VQdJkAAAAi/pikachu-jump.gif";
  } else if (number === 6) {
    trainerLevel.textContent = "Congrats, you are Master Pokemon Trainer";
    trainerLevelImg.src =
      "https://media.tenor.com/io_EfPzthFsAAAAi/pikachu-pokemon.gif";
  }
};
