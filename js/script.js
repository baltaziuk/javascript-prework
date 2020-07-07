{ function playGame() {
    clearMessages()
   // playerInput=();
    const getMoveName = function (argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        }
        else if(argMoveId == 2){
            return 'papier';
        }
        else if(argMoveId == 3){
            return 'nożyce';
        }
    
    printMessage('NIe znam ruchu o ID ' + argMoveId + '.');
    return 'nieznany ruch';
    }
    
    const displayResult = function (argComputerMove,argPlayerMove){
        console.log('moves:', argComputerMove , argPlayerMove);
            
        if(argPlayerMove == 'nieznany ruch'){
            return 'BRAK';
        }
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            return 'Ty wygrywasz!';
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            return 'Ty wygrywasz!';
        }
        else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            return 'Ty wygrywasz!';
        }
        else if (argPlayerMove == argComputerMove){
            return 'remis';
        }
        else return 'Komputer wygrywa';
    }
    
    
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    ComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + ComputerMove);
    
    
    console.log('Gracz wpisał: ' + playerInput);
    
    PlayerMove = getMoveName(playerInput);
    
    
    printMessage('Twój ruch to: ' + PlayerMove);
    
    printMessage ('Wynik pojedynku: ' + displayResult (ComputerMove,PlayerMove));
    

}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(playerInput=1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(playerInput=2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(playerInput=3);
  });

}
