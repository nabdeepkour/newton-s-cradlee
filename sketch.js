
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
     roof =new Roof(150,100,100,30);
	 World.add(world,roof);

	 bobObject1 = new Bob(250,300);
     bobObject2 = new Bob(300,300);
	 bobObject3 = new Bob(350,300);
	 bobObject4 = new Bob(400,300); 
	 bobObject5 = new Bob(450,300);

      rope1 =new Rope(bobObject1.body,roof.body,-100,0);
	  World.add(world,rope1);

	  rope2 =new Rope(bobObject2.body,roof.body,-50,0);
	  World.add(world,rope1);

	  rope3 =new Rope(bobObject3.body,roof.body,0,0);
	  World.add(world,rope1);

	  rope4 =new Rope(bobObject4.body,roof.body,50,0);
	  World.add(world,rope1);

	  rope5 =new Rope(bobObject5.body,roof.body,100,0);
	  World.add(world,rope1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bobObject1.display();  
  bobObject2.display(); 
  bobObject3.display();
  bobObject4 .display();
  bobObject5 .display();

  rope1.display(); 
  rope2.display();  
  rope3 .display(); 
  rope4 .display(); 
  rope5 .display(); 
 
}
function keyPressed(){
if(keyCode === 32 ){
	Matter.Body.applyforce(bob.Object1.body,bobObject2.body.positions,{x:-730,y:0});
}
}


