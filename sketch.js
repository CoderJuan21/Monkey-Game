// sorry the load animation was not working so i had to do an image

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;

var survivalScore = 0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  
}



function setup() {
  createCanvas(400,400);
  
  
  monkey = createSprite(50,200,20,20);
  monkey. addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  
  
  ground = createSprite(200,390,500,20);
  ground.x = ground.width/2;
 
  bananaGroup = createGroup();
   obstaclesGroup= createGroup();
  
  
}


function draw() {
background("red");
  
  fill("black");
 textSize(20);
   survivalScore= survivalScore + Math.round(frameCount/120);
  text("Survival Time:"+ survivalScore,100,50);
  
monkey.velocityY = monkey.velocityY+0.8;
  if(keyDown("space")&& monkey.y > 200) {
        monkey.velocityY = -10;
    }
  monkey.collide(ground);
  
  
  createFood();
  createObstacle();
  drawSprites();
}

function createFood(){
   if (frameCount % 60 === 0) {
     banana = createSprite(400,100,20,20);
     banana.addImage(bananaImage);
     banana.scale=0.1;
     banana.y =Math.round(random(100,300));
     banana.velocityX= -5;
     banana.liftime=80;
     bananaGroup.add(banana);
    }
  
}

function createObstacle(){
   if (frameCount % 100 === 0) {
      obstacle = createSprite(400,362,20,20);
     obstacle.addImage(obstaceImage);
     obstacle.scale = 0.1;
     obstacle.velocityX= -5;
     obstacle.liftime=80;
    }
   
}




