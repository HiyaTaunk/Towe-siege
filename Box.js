class Box {
    constructor (x,y,width,height) {
        var options = {
            restitution:0.4,
            friction:1,
            //isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.Visiblity =255;
        World.add(world, this.body);
    }

display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    if (this.body.speed<7) {
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height)
        pop ();
    } else {
        World.remove(world,this.body);
        push ();
            this.Visiblity = this.Visiblity-5;
            tint(255,this.Visiblity);
        pop();
        
    }

}
score(){
    if(this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
    }
}

}