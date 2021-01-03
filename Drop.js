class Drop{
    constructor(x,y)
    {
        var options = {
            isStatic: false,
            friction: 0.1
        };

        this.body = Bodies.circle(x,y,2,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("aqua");
        ellipseMode(RADIUS);
        ellipse(0,0,2,2);
        pop();

    }

    update()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }

}