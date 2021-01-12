var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1=Bodies.rectangle(350,650,200,30,{isStatic:true})
	box2=Bodies.rectangle(250,560,50,200,{isStatic:true})
	box3=Bodies.rectangle(450,560,50,200,{isStatic:true})
	
     paper1=new Paper(100,100,50)
	
    
}


function draw() {
	background(0);
	fill("green")
	rect(box1.position.x,box1.position.y,200,30)
	rect(box2.position.x,box2.position.y,50,200)
	rect(box3.position.x,box3.position.y,50,200)
	drawSprites();

  
 Engine.update(engine) 
 paper1.display()
 box1.display()
 box2.display()
 box3.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	   
	 }
   }



