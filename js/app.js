const MIN = 1;
const MAX = 6;

// fonction qui génére un nombre entre 1 et 6
const generate_number = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min) + min);
};

// fonction qui affiche le dé sur la page prenant en paramètre la valeur du dé
const display_dice = (result, player) => {
    // création de la div et ajout de la class dice à celle-ci
    const divDice = document.createElement("div");
    divDice.classList.add("dice");
    // ajout de la div créée dans la div player
    if(player === "player"){
        document.querySelector("#player").appendChild(divDice);
    } else if (player === "dealer") {
        document.querySelector("#dealer").appendChild(divDice);
    }
    
    // modification du background position pour correspondre à la valeur du dé
    divDice.style.backgroundPositionX = `-${(result - 1) * 100}px`;
};

// fonction qui génèrent les lancers de dés prenant en paramètre 
// le nombre de dés à lancer
const throw_dice = (number_of_dices = 1, player) => {
    if (number_of_dices !== NaN){
        for (let i = 0; i < number_of_dices; i++) {
            display_dice(generate_number(MAX, MIN), player);
        }
    } else {
        alert("Veuillez entrer un nombre entier.");
    }
};

const start_game = (opponent = false) => {
    const number_of_dices = parseInt(prompt("Combien de dés voulez vous lancer ?"));
    throw_dice(number_of_dices, "player");
    if (opponent) {
        const divOpponent = document.createElement("div");
        divOpponent.setAttribute("id", "dealer");
        divOpponent.classList.add("board");
        document.querySelector("#app").appendChild(divOpponent);
        throw_dice(number_of_dices, "dealer");
    }
}

if(confirm("Voulez vous jouer contre le dealer ?")){
    start_game(true);
} else {
    start_game();
}
