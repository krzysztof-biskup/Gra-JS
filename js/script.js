'use strict';

var buttons = document.querySelectorAll('.player-move');
//console.log(buttons);

var argument = [];

for (var i = 0; i < buttons.length; i++ ) {  
  argument.push(buttons[i].getAttribute('data-move'));
}

console.log(argument);

document.getElementById("newGameButton").addEventListener('click', games);
var roundNumber = document.getElementById('roundNumber');
var compWin_field = document.getElementById('compWin_field');
var userWin_field = document.getElementById('userWin_field')

var gameNumber = 0;
var moveNumber = 0;

function games(){
  reset();
  gameNumber = window.prompt('Liczba wygranych rund które kończą gre?');
  roundNumber.innerHTML = gameNumber;
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

var compWin = 0;
var userWin = 0;

var game = function(comPick, userPick, userPickName, comPickName) {
  if (comPick == 1 && (userPick == 1 || userPick == 3)) {   
    output.innerHTML = 'YOU LOOSE: you played ' + userPickName + ',' + ' computer played ' + comPickName + '<br><br>';//comp win
    compWin++;
   
    compWin_field.innerHTML = compWin;
    userWin_field.innerHTML = userWin;
    
  } 
  else if (comPick == 2 && (userPick == 1 || userPick == 2)) {
    output.innerHTML = 'YOU LOOSE: you played ' + userPickName + ',' + ' computer played ' + comPickName + '<br><br>';//comp win
    compWin++;
    
    compWin_field.innerHTML = compWin;
    userWin_field.innerHTML = userWin;
    
  }
  else if (comPick == 3 && (userPick == 2 || userPick == 3)) {    
    output.innerHTML = 'YOU LOOSE: you played ' + userPickName + ',' + ' computer played ' + comPickName + '<br><br>';//comp win
    compWin++;
    
    compWin_field.innerHTML = compWin;
    userWin_field.innerHTML = userWin;
    
  }
  else {
    output.innerHTML = 'You WON: you played ' + userPickName + ',' + ' computer played ' + comPickName + '<br><br>';//you won
    userWin++;
    
    compWin_field.innerHTML = compWin;
    userWin_field.innerHTML = userWin;
  } 
};

playerMove_rock.addEventListener('click', function(){
  var rock = 1;
  var pickRock = 'Rock';
  
  var comPick = computerPick();
  var comPickName = comPickNames(comPick); //przypisywanie nazwy wybranej pozycji przez komputer
  moveNumber++;
  
  game(comPick, rock, pickRock, comPickName);
  
  buttonDisable(gameNumber == moveNumber);
 
});

playerMove_paper.addEventListener('click', function(){
  var paper = 2;
  var pickPaper = 'Paper';
  moveNumber++;
  
  var comPick = computerPick();
  var comPickName = comPickNames(comPick); //przypisywanie nazwy wybranej pozycji przez komputer
  
  game(comPick, paper, pickPaper, comPickName);
  buttonDisable(gameNumber == moveNumber);
  
});

playerMove_scissors.addEventListener('click', function(){
  var scissors = 3;
  var pickScissors = 'Scissors';
  moveNumber++;
  
  var comPick = computerPick();
  var comPickName = comPickNames(comPick); //przypisywanie nazwy wybranej pozycji przez komputer
  
  game(comPick, scissors, pickScissors, comPickName);
  buttonDisable(gameNumber == moveNumber);
  
});
 
var buttonDisable = function(toogle) {
  document.getElementById("playerMove_scissors").disabled = toogle;
  document.getElementById("playerMove_paper").disabled = toogle;
  document.getElementById("playerMove_rock").disabled = toogle;
  
}; 
  
var reset = function() {
  buttonDisable(false);
  moveNumber = 0;
  gameNumber = 0;
  
  compWin = 0;
  userWin = 0;
  
  compWin_field.innerHTML = compWin;
  userWin_field.innerHTML = userWin;
};

