class game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
   }

   update(state){
       database.ref('/').update({
           gameState : state
       });

    }

  async start(){
if(gameState === 0){
    player = new Player();
    var playerCountRef = await database.ref('playerCount').once(); 
    if(playerCountRef.exist()){
playerCount = playerCountRef.val();
player.getCount();
}
form = new Form();
form.display();
}

human1 = createSprite(100,200);
human2 = createSprite(300,200);
human3 = createSprite(500,200);
human4 = createSprite(700,200);
humans = [human1, human2, human3, human4];
  }

   play(){
       form.hide();
       Player.getPlayerInfo();

       if(allPlayers !== undefined){
          // var display_position = 130;

          //index of the array
          var index = 0;

          //x and y position of the humans
          var x = 0;
          var y;
       

           for(var plr in allPlayers){
           //add 1 to the index of every loop    
           index = index + 1

           x = x + 200;
           y = displayHeight = allPlayers[plr].distance;
           humans[index = 1].x = x;
           humans[index = 1].y = y;    

           if(index === player.index){
                humans[index - 1].shapeColor = red;
                camera.position.x = displayWidth/2;
                camera.position.y = humans[index - 1].y;
           }
        }
    }
         
        
           display_position += 20;
           textSize(15);
           text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position);
             
        }    
}
   
