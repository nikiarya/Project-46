var gameState = 0; 
var playerCount = 0; 
var database; 

var form, player, game; 
var roleDecider; 

var allPlayers; 

function preload()
{

}

function setup() {
  createCanvas(800, 700);

  database = firebase.database(); 
  game = new Game(); 
  game.getState(); 
  game.start(); 
  

}


function draw() {   

  if(playerCount == 5) {
    game.updateState(1); 
  }

  if(gameState == 1) {
    clear(); 
    game.play(); 
  }

}



