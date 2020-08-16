
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var ground;
var roof1;
var string1,string2,string3,string4,string5;

var x = -10;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new bob(350,350,"blue");
	bob2 = new bob(410,350,"green");
	bob3 = new bob(470,350,"yellow");
	bob4 = new bob(530,350,"orange");
	bob5 = new bob(590,350,"red");

	roof1 = new roof(width/2,100,width/2,40);

	string1 = new string(bob1.body,roof1.body,-120,0);
	string2 = new string(bob2.body,roof1.body,-60,0);
	string3 = new string(bob3.body,roof1.body,0,0);
	string4 = new string(bob4.body,roof1.body,60,0);
	string5 = new string(bob5.body,roof1.body,120,0);

	//ground = new Ground(width/2,600,width,40);

	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  roof1.display();
  //ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  console.log(bob1.body.position.x);

  

	

	
  
	// keyPressed();


  drawSprites();
 
}

function keyPressed(){
	//if(bob1.body.position.x>=350){

	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});


	}

	//else{
		//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0,y:0});
	// }
	
}





