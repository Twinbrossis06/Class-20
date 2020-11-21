var fixedRect, movingRect;
var box1,box2;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";
  movingRect=createSprite(200, 200, 80, 30);
  movingRect.shapeColor="red";

  box1=createSprite(200, 100, 50, 50);
  box1.shapeColor="purple";
  box1.velocityX=2;
  box2=createSprite(600, 100, 50, 50);
  box2.shapeColor="lime";
  box2.velocityX=-2
}

function draw() {
  background(0);  
movingRect.x=mouseX;
movingRect.y=mouseY;
console.log(fixedRect.height/2+movingRect.height/2);
console.log(movingRect.y-fixedRect.y);
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
}
else{
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
    box1.velocityX= box1.velocityX*(-1);
    box2.velocityX= box2.velocityX*(-1);
  }

 if (movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    box1.velocityY=box1.velocityY*(-1);
    box2.velocityY=(-1)* box2.velocityY;
  }
  drawSprites();
}