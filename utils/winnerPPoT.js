export const winner = (choice1,choice2,player1) => {
    const winnerPhrase = document.querySelector("#winnerPhrase");
    if(choice1 === "piedra" && choice2 === "papel"){
        console.log("Pikachu ha ganado");
        winnerPhrase.textContent="Pikachu ha ganado"
    } else if (choice1 === "papel" && choice2 === "tijera"){
        console.log("Pikachu ha ganado");
        winnerPhrase.textContent="Pikachu ha ganado"
    }else if(choice1 === "tijera" && choice2 === "piedra"){
        console.log("Pikachu ha ganado");
        winnerPhrase.textContent="Pikachu ha ganado"
    }else if(choice2 === "piedra" && choice1 === "papel"){
        console.log(`${player1} ha ganado`);
        winnerPhrase.textContent=`${player1} ha ganado`
    } else if (choice2 === "papel" && choice1 === "tijera"){
        console.log(`${player1} ha ganado`);
        winnerPhrase.textContent=`${player1} ha ganado`
    }else if(choice2 === "tijera" && choice1 === "piedra"){
        console.log(`${player1} ha ganado`);
        winnerPhrase.textContent=`${player1} ha ganado`
    }else{
        console.log ("¡Empate!");
        winnerPhrase.textContent="¡Empate!"
    }

   
}