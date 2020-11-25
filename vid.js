const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world,box,ground;

function setup(){
    var cnvs = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var options ={
        restitution:0.5
    }
    box = Bodies.rectangle(200,50,50,50,options);
    World.add(world, box);
    ground = Bodies.rectangle(57,340,1200,10,{isStatic:true});
    World.add(world,ground)
    Engine.run(engine);

}
function draw(){
    background(0);
    Engine.update(engine);
    push()
    translate(box.position.x,box.position.y);
    rectMode(CENTER);
    rotate(box.angle)
    rect(0,0,50,50);
    pop()
    push()
    translate(ground.position.x,ground.position.y);
    fill("red")
    rectMode(CENTER)
    rect(0,0,1200,10);
    pop()
}
function keyPressed(){
    if(keyCode == 65){
        Matter.Body.applyForce(box,box.position,{x:0.05,y:0.1});
    }
}