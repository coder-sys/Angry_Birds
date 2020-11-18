const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world,box,ground;
var box,ground;

function setup(){
    var s ={
        restitution:1.0,
        density:1.2
    }
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(1200,400);
    box = Bodies.rectangle(200,200,10,10,);
    ground = Bodies.rectangle(300,300,5000,5,{isStatic:true});
    World.add(world,ground)
    Engine.run(engine)
    World.add(world,box);
}



function draw(){
    background(0);
    Engine.update(engine);
    var angle = box.angle;
    push()
    translate(box.position.x,box.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red")
    rect(0,0,10,10);
    pop()
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,5000,10);
    rectMode(CENTER)
    rect(990,245,10,100)
    stroke("red")
    rectMode(CENTER);
    rect(900,245,10,100);
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(box,box.position,{x:0.09,y:0.05})
    }
}