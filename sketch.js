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
var obstacle13;
var obstacle14;
var obstacle15;
var obstacle16;
var obstacle17;
var obstacle18;
var obstacle19;
var obstacle19;
var obstacle20;
var obstacle21;
var obstacle22;
var obstacle23;
var obstacle24;
var obstacle25;

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

	createObstacles(obstacle1, 600);
	createObstacles(obstacle2, 625);
	createObstacles(obstacle3, 650);
	createObstacles(obstacle4, 675);
	createObstacles(obstacle5, 700);
	createObstacles(obstacle6, 725);
	createObstacles(obstacle7, 750);
	createObstacles(obstacle8, 775);
	createObstacles(obstacle9, 800);
	createObstacles(obstacle10, 825);
	createObstacles(obstacle11, 850);
	createObstacles(obstacle12, 875);
	createObstacles(obstacle13, 900);
	createObstacles(obstacle14, 925);
	createObstacles(obstacle15, 950);
	createObstacles(obstacle16, 975);
	createObstacles(obstacle17, 1000);
	createObstacles(obstacle18, 1025);
	createObstacles(obstacle19, 1050);
	createObstacles(obstacle20, 1075);
	createObstacles(obstacle21, 1100);
	createObstacles(obstacle22, 1125);
	createObstacles(obstacle23, 1150);
	createObstacles(obstacle24, 1175);
	createObstacles(obstacle25, 1200);

	drawSprites();

}

function createObstacles(obstacleNum, frames){

	if(frameCount%frames===0){
		var options={
			frictionAir:0,
			frictionStatic:0
		}
		obstacleNum = Bodies.rectangle(displayWidth, random(0,displayHeight), 100, 10, options);
		Body.setVelocity(obstacleNum, {x:-6, y:0});
		World.add(world, obstacleNum);
	}
	if(obstacleNum){
		rect(obstacleNum.position.x, obstacleNum.position.y, 100, 10);
	}

}

