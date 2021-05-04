var first;
var start, singlePlayer, multiPlayer;
var startImg, spImg,mpImg;
var player,playerImg;
var bg,bgImg;

function preload(){
  startImg=loadImage("start.jpg");
  spImg=loadImage("sp.jpg");
 // mpImg=loadImage("mp.png");
  playerImg=loadImage("Herobrine.png");
  bgImg=loadImage("bg.jpg");
}


function setup() {
  createCanvas(800,400);
  
  start=createSprite(400,200,20,20);
  start.addImage("start",startImg);
  start.scale=0.4;

  singlePlayer=createSprite(300,200,20,29);
  singlePlayer.addImage("sp",spImg);
  singlePlayer.scale=0.05;
  singlePlayer.visible=false;

  player=createSprite(100,300,20,20);
  player.visible=false;
  //multiPlayer=createSprite(600,200,20,29);
  //multiPlayer.addImage("mp",mpImg);
  //multiPlayer.visible=false;
}

function draw() {
  background(255,255,255); 
  
  if(mousePressedOver(start)){
    start.visible=false;
    singlePlayer.visible=true;
    //multiPlayer.visible=true;
 
  }

  if(mousePressedOver(singlePlayer)){
     singlePlayer.visible=false;

     bg=createSprite(400,0,800,height*5)
     bg.addImage("background",bgImg);
     

     player.visible=true;
     //player.addImage("player",playerImg);
     //player.scale=0.5;
     //player.x=mouseX;
     //player.y=mouseY;
 
     if(keyDown("UP_ARROW")){
       player.velocityY=-2;
     }

     if(keyDown("s")){
       player.y = player.y + 7;
     }
     
     if(keyDown("d")){
       player.x = player.x + 8;
     }

     if(keyDown("a")){
       player.x = player.x -9;
     }
     
     
    
     }
  drawSprites();
}