class Chain{
    constructor(b1,b2){
        this.a = b1;
        this.b = b2;
        var options ={
            bodyA:b1,
            bodyB:b2,
            stiffness:0.004,
            length:26,
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain)

        
        
    }
    display(){
        push();
        strokeWeight(4);
        stroke(255);
        line(this.a.position.x,this.a.position.y,this.b.position.x,this.b.position.y);
        pop();
        
    }
}