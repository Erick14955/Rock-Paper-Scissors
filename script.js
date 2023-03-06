function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

var computerSelection;

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return 0;
    }
    else{
        if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection =='rock')
         || (playerSelection == 'scissors' && computerSelection == 'paper')){
            return 1;
        }
        else{
            return 2;
        }
    }
}

function game(){
    var computerpuntuacion = 0;
    var playerpuntuacion = 0;
    for(var i = 0; i < 5; i++){
        console.log('Player: ' +playerpuntuacion + ', computer: ' + computerpuntuacion);
        computerSelection = getComputerChoice();
        var answer = window.prompt("Type an answer: rock, paper or scissors", "");
        answer = answer.toLowerCase();
        while(answer !== 'rock' && answer !== 'paper' && answer !== 'scissors'){
            var answer = window.prompt("You write a wrong word, Type an answer: rock, paper or scissors:", "");
            answer = answer.toLowerCase();
        }
        switch(playRound(answer, computerSelection)){
            case 0:
                console.log('It is a tie');
                break;
            case 1:
                console.log('You win! ' + answer + ' beats '+ computerSelection);
                playerpuntuacion++;
                break;
            case 2:
                console.log('You lose! ' + computerSelection + ' beats ' + answer);
                computerpuntuacion++;
                break;
        }
    }
    if(playerpuntuacion > computerpuntuacion){
        console.log('Player Win!');
        console.log('Player: ' +playerpuntuacion + ', computer: ' + computerpuntuacion);
    }
    else{
        console.log('Computer Win!');
        console.log('Player: ' +playerpuntuacion + ', computer: ' + computerpuntuacion);
    }
}

game();