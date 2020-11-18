class Log extends BaseClass {
    constructor(x, y,width,height, angle) {
      super(x,y,width,height);
      this.angle = angle
      Matter.Body.setAngle(this.body, this.angle);
      this.image = loadImage("sprites/wood2.png");
      super.display()
    }
    
     

    
  };
  