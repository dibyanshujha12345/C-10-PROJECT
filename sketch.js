//declaring variables
var shipImg1,ship,sea ;
function preload(){
  //setting animation
 shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImg=loadImage("sea.png");


}

function setup(){
  createCanvas(400,400);
//creating sea sprite
  sea=createSprite(0,0,300,400);
  sea.addImage(seaImg);
  sea.velocityX=-3;
//creating ship sprite
  ship=createSprite(150,190,40,10);
  ship.addAnimation("sailing",shipImg1);
  ship.scale=0.3;
  
  
}

function draw() {
background("blue");
//background will not disappear.
  if(sea.x<10){
    sea.x=sea.width/2;
  }

drawSprites(); 
}