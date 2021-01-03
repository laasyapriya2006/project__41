class Umbrella{
    constructor(x,y)
    {
        var options = {
            isStatic: true
        };
        this.body = Bodies.circle(x,y,8,options);
        this.x = x;
        this.y = y;
        this.image = loadImage("umbrella.jpg");
        this.scale = 0.75;
        World.add(world,this.body);
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}
