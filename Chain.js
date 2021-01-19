class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bird.body,
            bodyB: log6.body,
            length:10,
            stiffness:0.04
         }
         this.chain=Constraint.create(options);
         World.add(world,this.chain);
    }
    display(){
    
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;

        strokeWeight(4);
    
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}