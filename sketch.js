const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,myobject;

function setup() 
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var myobjectoptions= { 'restitution': 1.0 }
  myobject=Bodies.rectangle(200,100,50,50,myobjectoptions);
  World.add(world,myobject);

  var balloptions= { 'restitution': 1.0 }
  ball=Bodies.circle(300,300,20,balloptions);
  World.add(world,ball);
  
  var groundoptions= { isStatic:true }
  ground=Bodies.rectangle(200,390,200,20,groundoptions);
  World.add(world,ground);

  
}

function draw() 
{
  background("gold");  
  Engine.update(engine);
  rectMode(CENTER);
  
  //rect(200,200,50,50);
  rect(myobject.position.x,myobject.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10)
}