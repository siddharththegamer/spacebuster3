var bk,bkImg;
var ship,shipImg;
var danger,dangerImg,dangerGroup;
var danger2,danger2Img;
var score = 0;
var blast,blastImg;
var getReady,getReadyImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;







function preload(){
bk = loadImage("space/space.jpg");
shipImg = loadImage("battleship2.png");
dangerImg = loadImage("alienballs.png");
danger2Img = loadImage("enemy2.png");
blastImg = loadImage("explosion.png");
getReadyImg = loadImage("getready.png");
}



function setup(){
createCanvas(1536,753);

ship = createSprite(750,400);
ship.addImage("ship",shipImg);
ship.scale = 0.7;
ship.visible = false;

getReady = createSprite(750,400);
getReady.addImage("getReady",getReadyImg);
getReady.scale = 2;
getReady.visible = true;

score = 0;
score.visible = false;

blast = createSprite(750,400);
  blast.addImage(blastImg);
  blast.scale = 2;
  blast.visible = false;

  dangerGroup = new Group();
}






function draw(){
background(bk);
if (gameState===PLAY){

  var select_danger = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_danger == 1) {
      danger();
    
    }
  }  

  textSize(30);
  fill("orange");
  text("**your mission is completed while returning you were attacked by aliens ** ",22 ,50,);
  text("**you do not have any weapons you just have to escape from there and save your self ALL THE BEST  **",22,80);
  text("**press space to play*",22,110);
  text("# Score #: "+ score, 90,700);
  
  edges= createEdgeSprites();
  ship.collide(edges);

  
  
  if(keyDown("LEFT_ARROW")){
    
    ship.x = ship.x-11;
  }
  
  if(keyDown("RIGHT_ARROW")){
    ship.x = ship.x+11;
  }
  
  if(keyDown("UP_ARROW")){
    ship.y = ship.y-11;
  
  }
  
  if(keyDown("DOWN_ARROW")){
    ship.y = ship.y+11;
  }
  
  if(keyDown("space")){
    ship.visible = true;
    getReady.visible = false;
    
  
    score.visible = true;
  }
  

  score = score + Math.round(getFrameRate()/60);

  if(dangerGroup.isTouching(ship)){
    gameState = END;
}
  
}
else if (gameState === END) {

  blast.visible = true;

  ship.velocity = 0;
  dangerGroup.setVelocityXEach(0);
  dangerGroup.visible = false;
  dangerGroup.setLifetimeEach(-1);
  }


  

  
  
  
  

  

  

  













  
  
  
  


 

drawSprites();

}

function danger() {
  var danger = createSprite(Math.round(random(100, 2000)),0, 20, 20);
  danger.addImage(dangerImg);
  danger.velocityY = 20;
  
  danger.lifetime = 150;
  danger.scale = 0.3;
  dangerGroup.add(danger);
  dangerGroup.visible = true;


  
}



