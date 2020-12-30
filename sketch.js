const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1=new Bob(460,400,70);
  bob2=new Bob(530,400,70);
  bob3=new Bob(600,400,70);
  bob4=new Bob(670,400,70);
  bob5=new Bob(740,400,70);
  roof1=new Roof(600,100,400,20);
  
  
 
  rope1=new rope(bob1.body,roof1.body,-80, 0)

	rope2=new rope(bob2.body,roof1.body,-40, 0)
	rope3=new rope(bob3.body,roof1.body,0, 0)
	rope4=new rope(bob4.body,roof1.body,40, 0)
	rope5=new rope(bob5.body,roof1.body,80, 0)
  

  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
 //keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-500,y:-425});
  }
}