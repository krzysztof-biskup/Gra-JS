'use strict';

var params = {
  gameNumber: 0,
  moveNumber: 0,
  compWin: 0,
  userWin: 0,
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
}

var buttons = document.querySelectorAll('.player-move');

document.getElementById("newGameButton").addEventListener('click', games);
var roundNumber = document.getElementById('roundNumber');
var compWin_field = document.getElementById('compWin_field');
var userWin_field = document.getElementById('userWin_field');

function games(){
  reset();
  params.gameNumber = window.prompt('Liczba wygranych rund które kończą gre?');
  roundNumber.innerHTML = params.gameNumber;
};

var computerPick = function randomNumber(min, max){
  min = Math.ceil(1);
  max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


var comPickNames = function(comPick){ //funkcja przypisywania nazwy wybranej pozycji przez komputer
  if (comPick == 1) {
    var name = 'Rock';
    return name;
  } 
  else if (comPick == 2) {
    var name = 'Paper';
    return name;
  }
  else {
    var name = 'Scissors';
    return name;
  }
};


var game = function(comPick, userPick, userPickName, comPickName) {
  if (comPick == 1 && (userPick == 1 || userPick == 3)) {   
    output.innerHTML = 'YOU LOOSE: you played ' + userPickName + ',' + ' computer played ' + comPickName + '<br><br>';//comp win
    params.compWin++;
   
    compWin_field.innerHTML = 'Comp win: ' + params.compWin;
    userWin_field.innerHTML = 'User win: ' + params.userWin;

  } 
  else if (comPick == 2 && (userPick == 1 || userPick == 2)) {
    output.innerHTML = 'YOU LOOSE: you played ' + userPickName + ',' + ' computer played ' + comPickName + '<br><br>';//comp win
    params.compWin++;
    
    compWin_field.innerHTML = 'Comp win: ' + params.compWin;
    userWin_field.innerHTML = 'User win: ' + params.userWin;
    
  }
  else if (comPick == 3 && (userPick == 2 || userPick == 3)) {    
    output.innerHTML = 'YOU LOOSE: you played ' + userPickName + ',' + ' computer played ' + comPickName + '<br><br>';//comp win
    params.compWin++;
    
    compWin_field.innerHTML = 'Comp win: ' + params.compWin;
    userWin_field.innerHTML = 'User win: ' + params.userWin;
    
  }
  else {
    output.innerHTML = 'You WON: you played ' + userPickName + ',' + ' computer played ' + comPickName + '<br><br>';//you won
    params.userWin++;
    
    compWin_field.innerHTML = 'Comp win: ' + params.compWin;
    userWin_field.innerHTML = 'User win: ' + params.userWin;
  } 
};

playerMove_rock.addEventListener('click', function(){
  var rock = 1;
  var pickRock = 'Rock';
  
  var comPick = computerPick();
  var comPickName = comPickNames(comPick); //przypisywanie nazwy wybranej pozycji przez komputer
  params.moveNumber++;
  
  game(comPick, rock, pickRock, comPickName, params);
  buttonDisable(params.gameNumber == params.moveNumber);
  
});

playerMove_paper.addEventListener('click', function(){
  var paper = 2;
  var pickPaper = 'Paper';
  params.moveNumber++;
  
  var comPick = computerPick();
  var comPickName = comPickNames(comPick); //przypisywanie nazwy wybranej pozycji przez komputer
  
  game(comPick, paper, pickPaper, comPickName);
  buttonDisable(params.gameNumber == params.moveNumber);
  
});

playerMove_scissors.addEventListener('click', function(){
  var scissors = 3;
  var pickScissors = 'Scissors';
  params.moveNumber++;
  
  var comPick = computerPick();
  var comPickName = comPickNames(comPick); //przypisywanie nazwy wybranej pozycji przez komputer
  
  game(comPick, scissors, pickScissors, comPickName);
  buttonDisable(params.gameNumber == params.moveNumber);

  
});
 
var buttonDisable = function(toogle) {
  document.getElementById("playerMove_scissors").disabled = toogle;
  document.getElementById("playerMove_paper").disabled = toogle;
  document.getElementById("playerMove_rock").disabled = toogle;
  
}; 
  
var reset = function() {
  buttonDisable(false);
  params.moveNumber = 0;
  params.gameNumber = 0;
  
  params.compWin = 0;
  params.userWin = 0;
  
  compWin_field.innerHTML = params.compWin;
  userWin_field.innerHTML = params.userWin;
};
 

var showModal = function(){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.add('show');
  
  document.getElementById('modal-one').classList.add('show');
};

var hideModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
  
  var modalsHide = document.querySelectorAll('.modal');
  
  for (var p = 0; p < modalsHide.length; p++) {
    modalsHide[p].classList.remove('show');
  }
};

var closeButtons = document.querySelectorAll('.modal .close');

for(var i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener('click', hideModal);
}

// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 

document.querySelector('#modal-overlay').addEventListener('click', hideModal);
