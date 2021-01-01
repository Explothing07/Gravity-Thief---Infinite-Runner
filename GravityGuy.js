class GravityGuy{
    constructor(){
        var options={
            friction:0,
            frictionAir:0,
            frictionStatic:0
        }
        this.body = Bodies.rectangle(displayWidth/3,displayHeight/2,60,60,options);
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,60,60);
    }
    gravityChange(){
        if(keyWentDown(UP_ARROW)){
            Body.setVelocity(this.body, {x:0, y:-4});
            console.log("up");
        }
        if(keyWentDown(DOWN_ARROW)){
            Body.setVelocity(this.body, {x:0, y:4});
            console.log("down");
        }
    }
}