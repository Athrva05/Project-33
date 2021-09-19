var bg;
var snow;
var boy;

function preload(){
bg=loadAnimation("snow1.jpg","snow1.jpg","snow1.jpg","snow2.jpg","snow2.jpg",
                          "snow2.jpg","snow3.jpg","snow3.jpg","snow3.jpg");
boy=loadImage("Boy Image.jpg")
}

function setup() {
  createCanvas(800,400);
 
  var snow = new Snow(200,200,10,10)
  snow.addImage(this.snow)

  boy=createSprite(200,200,20,20);
  boy.addImage("boy");
  
}

function draw() {
  background(bg);  

  if(keyDown(UP_ARROW)){
   boy.y=boy.y-10
  }

  if(keyDown(DOWN_ARROW)){
    boy.y=boy.y+10
  }

  if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+10
  }
  
  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-10
  }

drawSprites();
}