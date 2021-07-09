class Slingshot{
    constructor(body1,point){
        var options ={
            bodyA:body1,
            pointB:point,
            length:10
        }

        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling);
    }

    fly(){
        (this.sling.bodyA)=null
}
    
    display(){
     
        if(this.sling.bodyA){
            var bodyA = this.sling.bodyA.position;
            var pointB = this.sling.pointB

        push()
        strokeWeight(4);
        stroke("violet")
        line(bodyA.x, bodyA.y,pointB.x,pointB.y);
        pop()
    }}

   
}