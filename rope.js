class Rope{

constructor(body1,body2,offsetx,offsetY){
this.offsetX=offsetX
this.offsetY=offsetY
var options= {
  bodyA: body1,
  bodyB:body2,
  pointB:{x:this.offsetX,Y:this.offsetY}
}
//console.log(options);
this.rope =Constraint.creates(options)
World.add(world,this.rope);
}

display(){
var point1 =this.rope.bodyA.positions;
var point2 =this.rope.bodyB.positions;

strokeWeight(2);

var Anchor1X= point.x;
var Anchor1Y = point.y;

var Anchor2X = point2.x +this.offsetX;
var Anchor2Y = point2.y + this.offsetY;

line(Anchor1X, Anchor1Y ,Anchor2X, Anchor2Y);

















}





















}