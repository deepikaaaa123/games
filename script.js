let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("user-score");
const comScorePara = document.querySelector("com-score");

const genComChoice = () => {
    const options = ["rock","paper","sessiors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
};

const drawGame = () => {
   // console.log("game was draw.");
    msg.innerText = "Game was Draq play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinnner = (userWin, userChoice, comChoice) => {
     if(userWin){
        userScore++;
       // console.log("you win!");
       //userScorePara.innerText = userScore;
       msg.innerText = "you win!";
       msg.style.backgroundColor = "green";

     } else{
        comScore++;
        //comScorePara.innerText = comScore;
        //console.log("you lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
     }
};


const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const comChoice = genComChoice();
    console.log("com choice = ",comChoice);
    if(userChoice === comChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = comChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        } else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinnner(userWin, userChoice, comChoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choices was clicked",userChoice);
        playGame(userChoice);
    });
});