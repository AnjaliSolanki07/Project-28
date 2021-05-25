
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject,groundObject	
var world;

function setup() {
	createCanvas(1600, 900);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(450,200,70,20);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	Launcher = new Launcher(paperObject.body,{x:400, y:200});

	//Create a Ground
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  

}
function draw() {
    rectMode(CENTER);
    background(230);
 
    paperObject.display();
    groundObject.display();
    dustbinObj.display();
	Launcher.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
  	}
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX, y:mouseY});
 }

function mouseReleased(){
    Launcher.fly();
}







