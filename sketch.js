const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var GravityThief;

var bountyHunter;
var BountyHunterX;

var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var obstacle7;
var obstacle8;
var obstacle9;
var obstacle10;
var obstacle11;
var obstacle12;

function preload(){

}

function setup() {

	createCanvas(displayWidth, displayHeight-147);

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

	spawnObstacles();

	drawSprites();

}

function spawnObstacles() {
	if(frameCount%600===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle1 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle1, {x:-6, y:0});
		World.add(world, obstacle1);
	}
	if(obstacle1){
		rect(obstacle1.position.x, obstacle1.position.y, 100, 10);
	}

	if(frameCount%650===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle2 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle2, {x:-6, y:0});
		World.add(world, obstacle2);
	}
	if(obstacle2){
		rect(obstacle2.position.x, obstacle2.position.y, 100, 10);
	}

	if(frameCount%700===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle3 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle3, {x:-6, y:0});
		World.add(world, obstacle3);
	}
	if(obstacle3){
		rect(obstacle3.position.x, obstacle3.position.y, 100, 10);
	}

	if(frameCount%750===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle4 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle4, {x:-6, y:0});
		World.add(world, obstacle4);
	}
	if(obstacle4){
		rect(obstacle4.position.x, obstacle4.position.y, 100, 10);
	}
	
	if(frameCount%800===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle5 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle5, {x:-6, y:0});
		World.add(world, obstacle5);
	}
	if(obstacle5){
		rect(obstacle5.position.x, obstacle5.position.y, 100, 10);
	}

	if(frameCount%850===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle6 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle6, {x:-6, y:0});
		World.add(world, obstacle6);
	}
	if(obstacle6){
		rect(obstacle6.position.x, obstacle6.position.y, 100, 10);
	}

	if(frameCount%900===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle7 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle7, {x:-6, y:0});
		World.add(world, obstacle7);
	}
	if(obstacle7){
		rect(obstacle7.position.x, obstacle7.position.y, 100, 10);
	}

	if(frameCount%950===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle8 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle8, {x:-6, y:0});
		World.add(world, obstacle8);
	}
	if(obstacle8){
		rect(obstacle8.position.x, obstacle8.position.y, 100, 10);
	}

	if(frameCount%1000===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle9 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle9, {x:-6, y:0});
		World.add(world, obstacle9);
	}
	if(obstacle9){
		rect(obstacle9.position.x, obstacle9.position.y, 100, 10);
	}

	if(frameCount%1050===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle10 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle10, {x:-6, y:0});
		World.add(world, obstacle10);
	}
	if(obstacle10){
		rect(obstacle10.position.x, obstacle10.position.y, 100, 10);
	}

	if(frameCount%1100===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle11 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle11, {x:-6, y:0});
		World.add(world, obstacle11);
	}
	if(obstacle11){
		rect(obstacle11.position.x, obstacle11.position.y, 100, 10);
	}

	if(frameCount%1150===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacle12 = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacle12, {x:-6, y:0});
		World.add(world, obstacle12);
	}
	if(obstacle12){
		rect(obstacle12.position.x, obstacle12.position.y, 100, 10);
	}
}

