class BountyHunter{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(displayWidth/4,100,60,60,options);
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 60, 60);
    }    
}