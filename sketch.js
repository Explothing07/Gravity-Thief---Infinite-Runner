const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var GravityThief;
var bountyHunter;

var BountyHunterX;

function preload(){

}

function setup() {

	createCanvas(displayWidth-10, displayHeight-10);

	engine = Engine.create();
	engine.world.gravity.y = 0;
	world = engine.world;

	GravityThief = new GravityGuy();
	bountyHunter = new BountyHunter();
	
	BountyHunterX = displayWidth/5;

	Engine.run(engine);

}


function draw() {

	background(0);

	GravityThief.display();
	GravityThief.gravityChange();

	Body.setPosition(bountyHunter.body, {x:BountyHunterX, y:GravityThief.body.position.y});
	bountyHunter.display();

	drawSprites();

}


