class Chain{
    constructor(bodyA,pointb){
        this.a = bodyA;
        this.b = pointb;
        var options ={
            bodyA:bodyA,
            pointB:pointb,
            stiffness:0.004,
            length:10,
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain)

        
        
    }
    fly(){
        this.chain.bodyA = null;
        
    }
    display(){
        push();
        strokeWeight(4);
        stroke(0);
        if(this.chain.bodyA){
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.b.x,this.b.y);
        }
        pop();
    }
    

}