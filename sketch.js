
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1, line2, line3, line1Sprite, line2Sprite, line3Sprite;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	line1Sprite = createSprite(330, 623, 10, 75);
	line1Sprite.shapeColor = color("red");
	line1 = Bodies.rectangle(330, 623, 10, 75, {isStatic:true} );
	World.add(world, line1);

	line2Sprite=createSprite(width/2,665, 150, 10 );
	line2Sprite.shapeColor=color("red")
	line2 = Bodies.rectangle(width/2,665, 200, 15 , {isStatic:true} );
	World.add(world, line2);
	
	line3Sprite = createSprite(470, 623, 10, 75);
	line3Sprite.shapeColor = color("red");
	line3 = Bodies.rectangle(470, 623, 10, 75, {isStatic:true} );
	World.add(world, line3);

	paper = new Paper (100, 650, 30);
	ground = new Ground (400, 675, 900, 10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  paper.display();
  ground.display();

}

function keyPressed () 
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y: -20})
	}
}