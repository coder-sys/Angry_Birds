const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world,box,ground;

function setup(){
    var cnvs = createCanvas(1200,400);
    engine = Engine.create()
    world = engine.world;
    box = Bodies.rectangle(300,300,20,20);
    World.add(world, box)
    Engine.run(engine)
}
function draw(){
    background(0);
    Engine.update(engine)
    rect(box.position.x,box.position.y,20,20)
    Matter.Body.setStatic(box,false)
}