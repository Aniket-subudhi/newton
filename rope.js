


class Rope {
    constructor(bodyA,bodyB){
var options = {
bodyA:bodyA,
bodyB:bodyB,
length:4,
stiffness : 0.07


}
//console.log(Constrained)
this.rope=Constraint.create(options)
World.add(world,this.rope)

 

    }
display(){
var point_a  = this.rope.bodyA.position
var point_b = this.rope.bodyB.position
line(point_a.x,point_a.y,point_b.x,point_b.y)
 
}




}