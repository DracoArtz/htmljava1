class GameObject
{
    constructor()
    {
     this.x=100;
     this.y=100;
     this.w=100;
     this.h=100;
     this.vx=0;
     this.vy=0;
     this.color = `hotpink`  
    }

    renderRect()
    {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }

    move()
    {
        this.x = this.x + this.vx
        this.y = this.y + this.vy
    }
}