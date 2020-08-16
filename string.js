class string{
    constructor(bodyA,bodyB,offsetx,offsety){
        
        this.offsetx = offsetx;
        this.offsety = offsety;

        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetx,y:this.offsety},
            length:200,
            stiffness:0.04,

        }
         
        this.string = Matter.Constraint.create(options);
        World.add(world,this.string);
    }

    display(){
        var posA = this.string.bodyA.position;
        var posB = this.string.bodyB.position; 

        strokeWeight(2);

        line(posA.x,posA.y,posB.x+this.offsetx,posB.y+this.offsety);
    }
}