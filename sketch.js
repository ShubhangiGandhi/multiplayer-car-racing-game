 var game,playerCount,database;
 var gameState=0
 var form,player,game
 var distance=0;
 var allPlayers;
 var cars,car1,car2,car3,car4;
 var track,car_1img,car_12img,car_3img,car_4img,ground
 function preload(){
     track=loadImage("../images/track.jpg")
     car_1img=loadImage("../images/car1.png")
     car_2img=loadImage("../images/car2.png")
     car_3img=loadImage("../images/car3.png")
     car_4img=loadImage("../images/car4.png")
     ground=loadImage("../images/ground.png")
 }
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    game=new Game()
    game.getState()
    game.start() 
    
}

function draw(){
  if(playerCount===4){
      game.update(1)
  }
  if (gameState===1){
      clear()
      game.play()
  }
  if(gameState===2){
      game.end()
  }

}

