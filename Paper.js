class Paper
{
    constructor (x,y,r)
    {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, r/2, options);
        World.add(world, this.body);

    }

    display()
    {
        var paper1 = this.body.position;

        push();
        translate(paper1.x, paper1.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop();
    }



}