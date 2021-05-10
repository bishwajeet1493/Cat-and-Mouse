var cat, catImg;
var mouse, mouseImg;
var garden, gardenImg;


function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000, 800);

    //create tom and jerry sprites here
    cat = createSprite(750, 400);
    cat.velocityY = 1;
    cat.addAnimation("cat", catImg1);
    mouse = createSprite(250, 400);
    mouse.velocityY = -1;
    mouse.addAnimation("mouse", mouseImg1);
    garden = createSprite(500, 400);
    garden.addImage(gardenImg);
}

function draw() {
    background("garden");
    //Write condition here to evalute if tom and jerry collide
        if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
          cat.velocityX = 0;
          cat.addAnimation("catRunning", catImg2)
          cat.changeAnimation("catRunning");
      }
      }


function keyPressed(){

  //For moving and changing animation write code here
    
  if(keyCode === LEFT_ARROW){
      mouse.addAnimetion("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

}
