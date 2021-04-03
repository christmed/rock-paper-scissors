function computerPlay() {
    let options = ["rock", "paper", "scissors"]
    let option = options[Math.floor(Math.random() * options.length)];
    return capitalize(option);
}

function playerPlay() {
    let validOption = false;
    let option;
    while (validOption !== true) {
        option = prompt("Choose your play: ");
        if (option.toLowerCase() !== "rock" && option.toLowerCase() !== "paper" && option.toLowerCase() !== "scissors") {
            alert("Choose a valid option! (rock, paper, scissors)");
        } else {
            validOption = true;
        }
    }
    return capitalize(option);
}

function capitalize(str) {
    let firstLetter = str.substr(0,1);
    return firstLetter.toUpperCase() + str.substr(1);
}

let x = playerPlay()
let y = computerPlay()