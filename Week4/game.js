var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var timer = setInterval(main, 1000/60)

/*-----------------------------------------------------
This file demonstrates how using classes and objects 
can help you make your code shorter and more consistent
------------------------------------------------------*/

//Box made with basic variables
var x = c.width/2
var y = c.height/2 + 100
var h = 50
var w = 50
var color = `magenta`
var vx = 5
var vy = 5

//Second box made with basic variables
//Notice that the variable names can't be the same as the magenta box's
var x2 = c.width/2
var y2 = c.height/2 + 200
var h2 = 75
var w2 = 100
var color2 = `yellow`
var vx2 = -5
var vy2 = 5

//Box made as an instance of the GameObject childNodes
//Notice that the objects can have the same properties (variable names) 
var box0 = new GameObject();
box0.x = 100
box0.y = 100

var box1 = new GameObject();
box1.x = 100
box1.y = 300
box1.color = `orangered`

var larry = new GameObject();
larry.x = 300
larry.y = 100
larry.w = 300
larry.h = 300
larry.color = `cyan`


function main()
{
    ctx.clearRect(0,0,c.width,c.height)
 
	x += vx;
	x2 += vx2;
	
	if(x > c.width)
	{
		x = 0 - w
	}
	
	if(x2 <0 - w2)
	{
		x2 = c.width
	}
 
 //Draw a box with basic variables
	ctx.save()
		ctx.fillStyle = color;
		ctx.fillRect(x,y,w,h);
	ctx.restore()
	
 //Draw a second box with basic variables
	ctx.save()
		ctx.fillStyle = color2;
		ctx.fillRect(x2,y2,w2,h2);
	ctx.restore()
	
	
    box0.renderRect();
    box1.renderRect();
    larry.renderRect();
}




