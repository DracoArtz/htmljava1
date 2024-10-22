var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var fps = 1000/60
var timer = setInterval(game, fps);

var x = 50;
var y = canvas.height/2;
var w = 100;
var h = 100;

var moveAmountY = 10
var moveAmountX = 10

function game(){
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //update canvas
    x+=moveAmountX;
    y+=moveAmountY;
    //draw game objects
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2*Math.PI, true);
    ctx.closePath();
    ctx.fill();
    //ctx.fillRect(x, y, w, h);

        //stay within canvas boundary
    if(x > canvas.width - 50){

        moveAmountX *= -1;
    }

    if(x < 50)
    moveAmountX *= -1;

    if(y < 50){
        moveAmountY *= -1;
    }    

    if(y> canvas.height - 50){
        moveAmountY *= -1;
    }
}

