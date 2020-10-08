class Rope{
    constructor(bodyA, pointB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        pointB = pointB;
        var options = {
            bodyA: bodyA,
            //bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY},
            stiffness: 0.4,
            length: 20
            
        }
     this.pointB = pointB;
     this.rope = Constraint.create(options);
     World.add(world, this.rope);
    }
    display(){
        push();
        strokeWeight(2);
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
 
 }