'use strict';

var params = {
  roundsNumber: 1,
  moveNumber: 0,
  compWin: 0,
  userWin: 0,
  computerMoves: ['rock', 'paper', 'scissors'],
  progress: [],
  roundNumber: 1,
}

document.getElementById('newGameButton').addEventListener('click', games);
var roundNumber = document.getElementById('roundNumber');

function games() {
  reset();
  params.roundsNumber = window.prompt('Liczba wygranych rund które kończą gre?');
  roundNumber.innerHTML = params.roundsNumber;
};

var computerPick = function randomNumber(min, max) {
  min = Math.ceil(0);
  max = Math.floor(2);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var game = function (playerMove, computerMove) {
  if (playerMove == computerMove) {
    var output = 'Remis' + '<br><br>';
  } else if (playerMove == 'rock') {
    if (computerMove == 'paper') {
      var output = 'YOU LOOSE: you played ' + playerMove + ',' + ' computer played ' + computerMove + '<br><br>';
      params.compWin++;
    } else {
      var output = 'You WON: you played ' + playerMove + ',' + ' computer played ' + computerMove + '<br><br>';
      params.userWin++;
    }
  } else if (playerMove == 'paper') {
    if (computerMove == 'scissors') {
      var output = 'YOU LOOSE: you played ' + playerMove + ',' + ' computer played ' + computerMove + '<br><br>';
      params.compWin++;
    } else {
      var output = 'You WON: you played ' + playerMove + ',' + ' computer played ' + computerMove + '<br><br>';
      params.userWin++;
    }
  } else if (playerMove == 'scissors') {
    if (computerMove == 'rock') {
      var output = 'YOU LOOSE: you played ' + playerMove + ',' + ' computer played ' + computerMove + '<br><br>';
      params.compWin++;
    } else {
      var output = 'You WON: you played ' + playerMove + ',' + ' computer played ' + computerMove + '<br><br>';
      params.userWin++;
    }
  }
  showModal();
  params.progress.push({
    roundNumber: params.roundNumber++,
    roundResult: output, 
    computerMove: computerMove,
    playerMove: playerMove,
    userWin: params.userWin,
    compWin: params.compWin,
  })

  if (params.roundsNumber != params.moveNumber) {
    for (var i = 0; i < params.progress.length; i++) 
    {
      modalContent.innerHTML = 
        'Numer rundy ' + params.progress[i]['roundNumber'] + '<br><br>' + 
        'Ruch gracza: ' + params.progress[i]['playerMove'] + '<br><br>' + 
        'Ruch komputera: ' + params.progress[i]['computerMove'] + '<br><br>' +
        'Wynik rundy: ' + params.progress[i]['roundResult'] +
        'Wynik gry po tej rundzie: ' + 'User: ' + params.progress[i]['userWin'] + ' vs ' + 'Computer: ' + params.progress[i]['compWin'];   
    } 
  } else {
    var j = params.roundsNumber - 1;
    modalContent.innerHTML = 'Wynik gry: ' + 'User: ' + params.progress[j]['userWin'] + ' vs ' + 'Komputer: ' + params.progress[j]['compWin'] + '<br>';
      if (params.progress[j]['userWin'] < params.progress[j]['compWin']) {
        modalContent.innerHTML += 'Komputer wygrał'
    }  else {
      modalContent.innerHTML += 'User wygrał'
    }
  }
};

var buttons = document.getElementsByClassName('player-move');

for (var button of buttons) {
  button.addEventListener('click', function () {
    var playerMove = this.getAttribute('data-move');
    var index = computerPick();
    var computerMove = params.computerMoves[index]
    params.moveNumber++;
    game(playerMove, computerMove);
    buttonDisable(params.roundsNumber == params.moveNumber);

  });
};

var buttonDisable = function (toogle) {
  document.getElementById('playerMove_scissors').disabled = toogle;
  document.getElementById('playerMove_paper').disabled = toogle;
  document.getElementById('playerMove_rock').disabled = toogle;
};

var reset = function () {
  buttonDisable(false);
  params.moveNumber = 0;
  params.roundNumber = 1;

  params.compWin = 0;
  params.userWin = 0;

  
};


var showModal = function () {
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.add('show');
  document.getElementById('modal-one').classList.add('show');
};

var hideModal = function (event) {
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');

  var modalsHide = document.querySelectorAll('.modal');

  for (var p = 0; p < modalsHide.length; p++) {
    modalsHide[p].classList.remove('show');
  }
};

var closeButtons = document.querySelectorAll('.modal .close');

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', hideModal);
}

document.querySelector('#modal-overlay').addEventListener('click', hideModal);

var modalContent = document.querySelector('.content');




