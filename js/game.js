class Game {
    constructor(){
  
    }
getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function (data){
      gameState=data.val()
    })
}
update(state) {
    database.ref("/").update({
        gameState:state
    })
   
}
async start(){
    if (gameState===0){
      player= new Player()
      var playerCountRef=await database.ref('playerCount').once('value')
      if(playerCountRef.exists()){
      playerCount=playerCountRef.val()
      player.getCount()
      }
      form=new Form ()
      form.display()
      
    }
    car1=createSprite(100,200);
    car1.addImage('car1',car_1img)
    car2=createSprite(300,200);
    car2.addImage('car2',car_2img)
    car3=createSprite(500,200);
    car3.addImage('car3',car_3img)
    car4=createSprite(700,200);
    car4.addImage('car4',car_4img)
    cars=[car1,car2,car3,car4]
}

play(){
    form.hide()
    //textSize(30)
   // text('Game Start',120,100)
    Player.getPlayerInfo()
    if (allPlayers!==undefined){
        background("#C68767")
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        
       // index of the array
       var index=0;
       //var display_position=130;
       // x and y position of the cars
       var x =175;
       var y
       for(var plr in allPlayers){
           //add 1 to the index after every loop
           index=index+1
           //position of the cars are little away from each other in x direction
           x=x+200
           //use data from the data base to display the car in y direction
           y=displayHeight-allPlayers[plr].distance
           cars[index-1].x=x
           cars[index-1].y=y

           if(index===player.index){
               stroke(10)
               fill('red')
               ellipse(x,y,60,60)
               cars[index-1].shapeColor="red"
           camera.position.x=displayWidth/2
           camera.position.y=cars[index-1].y
            }
           
        
           
       //display_position=display_position+20;
       //textSize(15)
       //text(allPlayers[plr].name+':'+allPlayers[plr].distance,120,display_position)
    
        }
    }
    

if(keyIsDown(UP_ARROW)&& (player.index !==null)){
 player.distance=player.distance+50;
 player.update()
}
console.log('playerdistance'+player.distance)
if(player.distance>3860){
    gameState=2
}
drawSprites()
}
end(){
    console.log('game ended.')
}
}


