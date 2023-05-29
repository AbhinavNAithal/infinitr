var ninja,road,blade,bomb,coin,katana;
var ninjaImg,roadImg,bladeImg,bombImg,coinImg,katanaImg;
var score=0;
var bladeG,bombG,katanaG,coinG;
var gameOver,gameOverImg;
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  bladeImg = loadImage("blade.png");
  bombImg = loadImage("bomb.png");
  roadImg = loadImage("Road.png");
  gameOverImg = loadImage("gameOver.png");
  katanaImg = loadImage("katana.png");
  ninjaImg = loadImage("ninja.png");
  coinImg = loadImage("coin.png");
}


function setup() {
  createCanvas(400,600);

  ninja = createSprite(50,580,20,20);
  ninja.addImage(ninjaImg);
  ninja.scale = 0.08;

  road = createSprite(200,200);
  road.addImage(roadImg);
  road.velocityY=4;

  gameOver = createSprite(200,200);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  
  bladeG =new Group();
  bombG =new Group();
  coinG =new Group();
  katanaG =new Group();

 }

function draw(){
  
   if(gameState == PLAY){
    background(0);
    ninja.x=World.mouseX;

    edges= createEdgeSprites();
    ninja.collide(edges);

    if(road.y > 400 ){
      road.y = height/2;
    }

    
  
    gameOver.visible = false;

    road.velocityY = -4-score/100;

    if(keyDown("space")&& ninja.y >= 140) {
      ninja.velocityY = -10;
    }

    if (coinG.isTouching(ninja)) {
      coinG.destroyEach();
      score=score+100
    }
    else if (bladeG.isTouching(ninja)) {
      gameState=END
      
    }else if(bombG.isTouching(ninja)) {
      gameState=END;
      
    }else{
      if(katanaG.isTouching(ninja)) {
        gameState=END;
      }

    createBlade();
    createBomb();
    createCoin();
    createKatana();

    drawSprites();
    
    textSize(20);
    fill(255);
    text("Score: "+ score, 10,30);

 }
}
}

function createBlade() {
  if (World.frameCount % 200 == 0) {
  var blade = createSprite(Math.round(random(50, 350),40, 10, 10));
  blade.addImage(bladeImg);
  blade.scale=0.12;
  blade.velocityY = 3;
  blade.lifetime = 150;
  bladeG.add(blade);
  }
}

function createBomb() {
  if (World.frameCount % 320 == 0) {
  var bomb = createSprite(Math.round(random(50, 350),40, 10, 10));
  bomb.addImage(bombImg);
  bomb.scale=0.4;
  bomb.velocityY = 3;
  bomb.lifetime = 150;
  bombG.add(bomb);
}
}

function createCoin() {
  if (World.frameCount % 410 == 0) {
  var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
  coin.addImage(coinImg);
  coin.scale=0.13;
  coin.velocityY = 3;
  coin.lifetime = 150;
  coinG.add(coin);
  }
}

function createKatana(){
  if (World.frameCount % 530 == 0) {
  var katana = createSprite(Math.round(random(50, 350),40, 10, 10));
  katana.addImage(katanaImg);
  katana.scale=0.4;
  katana.velocityY = 3;
  katana.lifetime = 150;
  katanaG.add(katana);
  }
}


