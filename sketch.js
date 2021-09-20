var canvas, backgroundImage , allPlayers;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var car1,car2,car3,car4
var cars=[]

function preload()
{
  car1Img=loadImage("images/car1.png")
  car2Img=loadImage("images/car2.png")
  car3Img=loadImage("images/car3.png")
  car4Img=loadImage("images/car4.png")

  trackImg=loadImage("images/track.jpg")
  groundImg=loadImage("images/ground.png")

}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(displayHeight)
}


function draw(){

  

  if(playerCount === 4){

game.update(1);

  }

if (gameState === 1){

  game.play();

}

if (gameState === 2){
  game.end();
}

}
