// first step

// second step
const MIN = 1;
const MAX = 6;

const generate_number = (max, min = 0) => {
    return Math.round(Math.random() * (max - min) + min);
};

const display_dice = (result) => {
    const dice_div = document.createElement("div");
    dice_div.classList.add("dice");
    document.querySelector("#player").appendChild(dice_div);
    dice_div.style.backgroundPositionX = `-${(result - 1) * 100}px`;
};

const throw_dice = (number_of_dices = 1) => {
    if (number_of_dices !== NaN){
        for (let i = 0; i < number_of_dices; i++) {
            display_dice(generate_number(MAX, MIN));
        }
    } else {
        alert("Veuillez entrer un nombre entier.");
    }
};

throw_dice(prompt("Combien de dés voulez vous lancer ?"));
