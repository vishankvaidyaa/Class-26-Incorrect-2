class Paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':0.5
      }
      
      World.add(world, this.body);
    }
     
   display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      circle(pos.x, pos.y, this.RADIUS );
    }
    }