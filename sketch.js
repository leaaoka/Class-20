/*var fRect, mRect


function setup() {

  createCanvas(1200,800);
  fRect = createSprite(400, 100, 50, 80);
  fRect.shapeColor = "green"
  fRect.velocityY = 3;
  mRect = createSprite(400, 800, 80, 30);
  mRect.shapeColor = "green";
  mRect.velocityY = 3;

}

function draw() {
  background("black");  

 // mRect.x = World.mouseX;
  //mRect.y = World.mouseY;

  if(mRect.x - fRect.x < fRect.width/2 + mRect.width/2 &&
    fRect.x - mRect.x < fRect.width/2 + mRect.width/2 && 
    mRect.y - fRect.y < fRect.height/2 + mRect.height/2 &&
    fRect.y - mRect.y < fRect.height/2 + mRect.height/2 )

    {
      mRect.velocityY = mRect.velocityY *(-1);
      fRect.velocityY = fRect.velocityY *(-1);
   // fRect.shapeColor = "blue"
    //mRect.shapeColor = "blue"
  }

  else{
    mRect.shapeColor = "green";
    fRect.shapeColor = "green"

  }
 // console.log(fRect.x - mRect.x)


  drawSprites();
}*/


var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}