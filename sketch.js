var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2,80,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2,200,10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,10,{restitution:0, isStatic:true});
	World.add(world,packageBody);
	

	//Create a Ground
	ground = new Ground(width/2,height,850,20);
	ground1 = new Ground(width/2+65,height-70,30,70);
	ground2 = new Ground(width/2-65,height-70,30,70);
	ground3 = new Ground(width/2,height-25,160,30);
	ground4 = new Ground(width/2,height-30,160,30);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  keyPressed();
  
  fill("brown");
  ground.display();
  fill("red");
  ground1.display();
  ground2.display();
  ground3.display();

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false);
  }
}



