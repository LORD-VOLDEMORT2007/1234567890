class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  
 async start(){
    if(gameState === 0){
        
      player = new Player();
      var playerCountRef= await database.ref('playerCount').once("value")
      if(playerCountRef.exists ()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }

    car1=createSprite(100,200)
      car1.addImage(car1Img)
    car2=createSprite(300,200)
    car2.addImage(car2Img)
    car3=createSprite(500,200)
    car3.addImage(car3Img)
    car4=createSprite(700,200)
    car4.addImage(car4Img)

    cars = [car1 , car2 , car3, car4]
    
  }

  play(){
    form.hideForm();
    //text ("GAME STARTED" , width/2 , height/2);
    Player.getPlayerInfo();
    player.getFinishedPlayers();
    
    if(allPlayers !== undefined){
      background (groundImg)
      image (trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var y 
        var x = 0 
        var index = 0
        
      for(var plr in allPlayers){
       index=index+1
        x=x+200;
        y= displayHeight-allPlayers[plr].distance
        cars[index-1].x=x;
        cars[index-1].y=y;

        if(index===player.index){
          //cars[index-1].shapeColor="red"
          fill ("red");
          ellipse(x,y,60,60);
          camera.position.x = displayWidth/2
          camera.position.y = cars[index-1].y
        }

        /*if(plr === "player" + player.index){

          fill ("red")
        }
        else{
          fill("black")
        }
        text(allPlayers[plr].name + " : " + allPlayers[plr].distance , 120 , y)
        y += 20*/

        
        

      }
    }



    
    if(keyIsDown(UP_ARROW) && player.index !== null ){

      player.distance += 50
      player.update();

    }
    if (player.distance>3000){
      gameState = 2
      player.rank += 1
      Player.updateFinishedPlayers(player.rank)
      textSize (30)
      text ("RANK: "+ player.rank , 200 , -2500)
      console.log(cars[0].y)
    }
    console.log(player.distance)
    drawSprites()
  }

  end(){
    console.log("game ended " + "playerrank: " + player.rank)
  }

}
