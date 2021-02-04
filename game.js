class Game {
    constructor(){

    }
   getstate(){
       var reference = database.ref("gamestate");
       reference.on("value",function(data){
        gameState = data.val();   
       })
  
   }
   update(state){
        database.ref("/").update({
            gamestate : state,
        })
   }
   start(){
       if (gameState === 0 ){
           player = new Player ();
           player.getcount();
           form  = new Form();
           form.display();
       }
       car1 = createSprite(100,200);
       car2 = createSprite(300,200);
       car3 = createSprite(500,200);
       car4 = createSprite(700,200);
       car1.addImage(car1img);
       car2.addImage(car2img);
       car3.addImage(car3img);
       car4.addImage(car4img);
       cars = [car1,car2,car3,car4];
   }
   play(){
       form.hideAll();
       textSize(30);
       text("Game Start",120,100);
       Player.getplayerinfo();
       if(allplayers != undefined){
           background("brown");
           image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
           var pos = 130;
           var index = 0;
           var x = 175;
           var y = 0;
           for(var plr in allplayers){
               x = x+200;
               y = displayHeight - allplayers [plr].distance;
               cars[index].x = x;
               cars[index].y = y;
               if (plr === "player"+player.index ){
                   camera.position.x = displayWidth/2;
                   camera.position.y = cars[index].y;
                   cars[index].shapeColor = "red";
               }
              
               index++ ;
           // textSize(15);
          //  pos  += 20;
          //  text(allplayers[plr].name + " : " + allplayers[plr].distance,120,pos)
           }
       }
       if(keyDown(UP_ARROW) && player.index != null){
        player.distance += 50;
        player.update();
        //console.log(player.distance);

       }
       if (player.distance > 3550 ){
           gameState = 2;
       }
       drawSprites();
   }
   end (){
       console.log("gameEnded");
   }
}
