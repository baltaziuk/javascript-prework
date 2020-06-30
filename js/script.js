function getMoveName(argMoveId){
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

function displayResult(argComputerMove,argPlayerMove){
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


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
    computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/


printMessage('Mój ruch to: ' + ComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
if(playerInput =='2'){
  playerMove = 'papier';
}
if(playerInput =='3'){
    playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + PlayerMove);

printMessage ('Wynik pojedynku: ' + displayResult (ComputerMove,PlayerMove));

/*
if(playerMove == 'nieznany ruch'){
    printMessage('wybierz poprawnie !');
}
else if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}
else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}
else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}
else if (playerMove == computerMove){
    printMessage('remis');
}
else printMessage('Komputer wygrywa');

*/