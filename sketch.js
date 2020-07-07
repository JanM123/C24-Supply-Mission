var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, side1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new Dustbin(400, 650, 200, 20);
	World.add(world, side1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  side1.display();
  drawSprites();
 
}



