class Ground {

constructor() {

var options = {isStatic: true}

this.ground = Bodies.rectangle(650,550,2500,30,options)
World.add(world, this.ground)
    
}

display() {

noStroke();
fill("Green");
rectMode(CENTER);
rect(this.ground.position.x,this.ground.position.y,2000,20);

}










}