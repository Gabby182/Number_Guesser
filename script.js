let currentRoundNumber = 1;
let humanScore = 0;
let computerScore = 0;

// Write your code below:
const generateTarget = () =>{

    const integerNumber = Math.floor(Math.random()*10);

    return integerNumber
};

const compareGuesses = (currentHumanGuess, computerGuess, target) => {

    let gap1 = Math.abs(target-currentHumanGuess);
    let gap2 = Math.abs(computerGuess-target);

    if(gap1<=gap2 || target===currentHumanGuess){
        return true;
    }else{
        return false;
    }
};

const updateScore = (winner) => {
        
    if(winner == 'human'){
        humanScore = humanScore +1;
    }else{ 
        computerScore = computerScore +1;
    }
};

const advanceRound = () => {

    currentRoundNumber = currentRoundNumber + 1;
}

