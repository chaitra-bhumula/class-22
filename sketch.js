var fixedRect, movingRect, gameObject1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite (400,200,50,80);
  gameObject1.shapeColor = "pink";

}

function draw() {
  //console.log(movingRect.x-gameObject1.x);
  console.log(gameObject1.x-movingRect.x)
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  
  drawSprites();
  if (isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "pink";

  }
}


function isTouching(a,b){
  //movingRect = a, gameObject1 = b
  //b.width/2 = 50/2 = 25
  //a.width/2 = 80/2 = 40
  //b.width/2 + a.width/2 = 25+40 = 65
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
  && a.y - b.y < b.height/2 + a.height/2
  && b.y - a.y < b.height/2 + a.height/2){
    return true;
}

else {
  return false;
}

}