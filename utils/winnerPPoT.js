export const winner = (choice1,choice2,player1) => {
    const winnerPhrase = document.querySelector("#winnerPhrase");
    if(choice1 === "bulbasur" && choice2 === "charmander"){
        console.log("Pikachu ha ganado");
        winnerPhrase.textContent="Pikachu ha ganado"
    } else if (choice1 === "charmander" && choice2 === "squirtle"){
        console.log("Pikachu ha ganado");
        winnerPhrase.textContent="Pikachu ha ganado"
    }else if(choice1 === "squirtle" && choice2 === "bulbasur"){
        console.log("Pikachu ha ganado");
        winnerPhrase.textContent="Pikachu ha ganado"
    }else if(choice2 === "bulbasur" && choice1 === "charmander"){
        console.log(`${player1} ha ganado`);
        winnerPhrase.textContent=`${player1} ha ganado`
    } else if (choice2 === "charmander" && choice1 === "squirtle"){
        console.log(`${player1} ha ganado`);
        winnerPhrase.textContent=`${player1} ha ganado`
    }else if(choice2 === "squirtle" && choice1 === "bulbasur"){
        console.log(`${player1} ha ganado`);
        winnerPhrase.textContent=`${player1} ha ganado`
    }else{
        console.log ("¡Empate!");
        winnerPhrase.textContent="¡Empate!"
    }

   
}