class Stone{
     
        constructor(x, y) {
          var options = {
              isStatic:false,
              restitution:0.3,
              friction:0.5,
              density:1.2,
          }
          this.body = Bodies.circle(x, y, 10, options);
          this.radius= 10;
        
          this.image = loadImage("sprites/stone.png");
          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          fill(255);
          imageMode(RADIUS);
          image(this.image, pos.x, pos.y, 30,30);
          
          
          
        }
      };