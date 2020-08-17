const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball, ground;

function preload() {
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(200, 375, 20);	
	ground = new Ground(800, 390, 1600, 20);
	dustbin1 = new Dustbin(1200, 330, 10, 100);
	dustbin2 = new Dustbin(1300, 380, 200, 10);
	dustbin3 = new Dustbin(1400, 330, 10, 100);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display(); 
  dustbin1.display(); 
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:90, y:-90});
	}
}

