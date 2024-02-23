/*
Rock Paper Scissors project pseudocode:

GET initial random computerChoice (ROCK, PAPER, or SCISSORS)
INPUT receive playerChoice and convert playerChoice to lowercase string
COMPARE playerChoice to computerChoice, decide which wins or if tie (ROCK beats SCISSORS, SCISSORS beats PAPER, PAPER beats ROCK)
WHILE rounds played is less than 5, repeat round function
END when round 5 is finishes, best 3 out of 5 wins.

*/
console.log("Begin");
const possibleChoice = ["rock", "paper", "scissors"];
let playerChoice;
let computerSelection;
let winCounter = 0;
let loseCounter = 0;
let roundsPlayed = 0;


function getComputerChoice(){
    computerSelection = possibleChoice[(Math.floor(Math.random() * possibleChoice.length))];
    
    return computerSelection;
}
function getPlayerChoice(){
    playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    
    switch (playerChoice){
        case 'rock':
            return playerChoice;
            
        case 'paper':
            return playerChoice;
            
        case 'scissors':
            return playerChoice;
            
        default: alert('Not an option'), getPlayerChoice();
    }
}

function playRound(){
    
    getComputerChoice();
    
    getPlayerChoice();
    
    if (playerChoice === 'rock' && computerSelection === 'paper'){
        console.log('You lost this round!');
        roundsPlayed++;
        loseCounter++;
        return(winCounter, roundsPlayed, loseCounter), console.log('You\'re choice:',playerChoice,'|','Computer\'s choice:',computerSelection);

    } else if (playerChoice === 'paper' && computerSelection === 'scissors'){
        console.log('You lost this round!');
        roundsPlayed++;
        loseCounter++;
        return(winCounter, roundsPlayed, loseCounter), console.log('You\'re choice:',playerChoice,'|','Computer\'s choice:',computerSelection);

    } else if (playerChoice === 'scissors' && computerSelection === 'rock'){
        console.log('You lost this round!');
        roundsPlayed++;
        loseCounter++;
        return(winCounter, roundsPlayed, loseCounter), console.log('You\'re choice:',playerChoice,'|','Computer\'s choice:',computerSelection);

    } else if (playerChoice === 'rock' && computerSelection === 'scissors'){
        console.log('You win this round!');
        winCounter++;
        roundsPlayed++;
        
        return(winCounter, roundsPlayed, loseCounter), console.log('You\'re choice:',playerChoice,'|','Computer\'s choice:',computerSelection);
        
    } else if (playerChoice === 'scissors' && computerSelection === 'paper'){
        console.log('You win this round!');
        winCounter++;
        roundsPlayed++;
        
        return(winCounter, roundsPlayed, loseCounter), console.log('You\'re choice:',playerChoice,'|','Computer\'s choice:',computerSelection);

    } else if (playerChoice === 'paper' && computerSelection === 'rock'){
        console.log('You win this round!');
        winCounter++;
        roundsPlayed++;
        
        return(winCounter, roundsPlayed, loseCounter), console.log('You\'re choice:',playerChoice,'|','Computer\'s choice:',computerSelection);

    } else if (playerChoice ===  computerSelection){
        console.log('Tie!');
        roundsPlayed++;
        
        return(winCounter, roundsPlayed, loseCounter), console.log('You\'re choice:',playerChoice,'|','Computer\'s choice:',computerSelection);}
    }

function playGame(){

    while (roundsPlayed < 5){
        playRound();
        console.log('Wins:',winCounter,'Losses:',loseCounter,'Rounds Played:',roundsPlayed);
    }
    if (winCounter >= 3){
        alert('You Win!');}
        else if (winCounter < 3 && winCounter !== loseCounter){
            alert('You Lose!')
        } else if(winCounter === loseCounter){
            alert('It\'s a Tie!')
        }
}

playGame();