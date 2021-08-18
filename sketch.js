
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
		isStatic: false,
        restitution: 0.3,
		friction: 0,
		density: 1.2
	}

    ball = Bodies.circle(400,350,20,ball_options)
	World.add(world,ball)

	ground1 =new ground(500,900,1000,20)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground1.display()
  
  drawSprites();
 
}



