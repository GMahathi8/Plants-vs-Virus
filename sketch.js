var tree,tank,waterdrop,virus1,fulltank,cherrytree;
var score;
var viruscount;
var gameState;
var displayCount = 1;
var backgroundIMG;
var emoji;
function preload() {

waterdrop  =  loadImage("Images/water.png");
tank  =  loadImage("Images/water-tank.png");
fulltank  =  loadImage("Images/water-tank (1).png");
virus1  =  loadImage("Images/virus.png");
tree =  loadImage("Images/tree.png");
cherrytree =  loadImage("Images/cherry-tree.png");
backgroundIMG = loadImage("Images/backgroundIMG4.jpg");
emoji = loadImage("Images/Emoji.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
 
BackgroundIMG = createSprite(displayWidth/2+240,displayHeight/2,displayWidth,displayHeight);
BackgroundIMG.addImage(backgroundIMG);
BackgroundIMG.scale = 2.3;

Tree = createSprite(1300,500,20,10);
Tree.addImage(tree);
Tree.scale = 0.6; 

Tank = createSprite(170,500,10,10);
Tank.addImage(tank);
Tank.scale = 0.43;

Fulltank = createSprite(150,500,20,10);
Fulltank.addImage(fulltank);
Fulltank.scale = 0.4;

Fulltank.visible = false;


Cherrytree = createSprite(1300,250,20,10);
Cherrytree.addImage(cherrytree);
Cherrytree.scale = 0.6;

Cherrytree.visible = false;

Emoji = createSprite(displayWidth/2,displayHeight/2+100);
Emoji.addImage(emoji);
Emoji.scale = 0.2;

Emoji.visible = false;

score = 0;
viruscount = 0;
gameState = "play";
waterDropGroup = new Group();
virusGroup = new Group();
}

function draw() {
  background("white");  
 for(var i=0;i<waterDropGroup.length;i++) {
   if(mousePressedOver(waterDropGroup.get(i))) {
    console.log(i);
waterDropGroup.get(i).destroy();
score++;

 }
}

 for(var i = 0;i<virusGroup.length;i++) {
  if(mousePressedOver(virusGroup.get(i))) {
virusGroup.get(i).destroy();
score = score - 10;
viruscount++;
}

}
  if(viruscount === 3) {
  fill("black");
  textStyle("bold");
  textSize(40);
  text("GAME OVER!!",displayWidth/2,displayHeight/2);
  gameState = "end";
  waterDropGroup.setVelocityYEach(0);
  virusGroup.setVelocityYEach(0);
}
  if(gameState === "play") {

  spawnVirus();
  spawnDrops();

}

  

if(keyDown("R") ) {

  gameState = "play";
Fulltank.visible =false;
Tank.visible = true;

Tree.visible = true;
Cherrytree.visible = false;
Emoji.visible = false;
score = 0;
}


// if(displayCount == 1) {
   fill("purple");
   textStyle("bold");
   textSize(40);
   text("score: "+score,70,100);
//   displayCount++;
// }else if (displayCount == 2) {

//   displayCount = 1;

// }
   
 


strokeWeight(5);
line(290,0,290,displayHeight);
  
  drawSprites();

textStyle("bold");  
fill("darkblue");
textSize(40);
text("Tap on waterDrop to fill the tank and save the tree!!",displayWidth/2-300,75);
  if(score === 5) {
  Fulltank.visible = true;
  Tank.visible = false;
  
  Tree.visible = false;
  Cherrytree.visible = true;
  
  fill("brown");
  textStyle("bold");
  textSize(20);
  text("Press R to restart the game",displayWidth/2,displayHeight/2);
  
  gameState = "end";
  
  Emoji.visible = true;
  
   }

}

function spawnDrops() {
  if(World.frameCount %30 === 0) {

    waterDrop =createSprite(200,100,20,20);
    waterDrop.addImage(waterdrop);
    waterDrop.scale = 0.12;
    waterDrop.velocityY = 5;  
    waterDrop.x = Math.round(random(300,displayWidth-15));
    waterDrop.lifetime = displayWidth/5;
  waterDropGroup.add(waterDrop);
  }

} 
function spawnVirus() {

  if(World.frameCount %30 === 0) {

    Virus = createSprite(300,100,20,10);
    Virus.addImage(virus1);
    Virus.scale = 0.1;
    Virus.velocityY = 7;
    Virus.x = Math.round(random(300,displayWidth-20));
    Virus.lifetime = displayWidth/7;
    virusGroup.add(Virus);
  }
}


