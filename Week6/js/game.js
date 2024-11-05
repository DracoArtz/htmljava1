/*-------------------------------------------
Game Setup
 1. canvas 
 2. context
 3. frame rate
 4. animation timer runs main function 60 frames per second
-------------------------------------------*/
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)

var gameScenes = ["start", "game", "gameOver"]
var currentScene = gameScenes[0];

var krabbyPatty = document.getElementById("KrabbyPatty");
/*------------Declare Variables Here--------*/

var player = new GameObject();
player.color = "blue";
player.w = 40;
player.h = 40;
player.friction = 0.9;
var playerSpeed = 5;
var score = 0;

//generate enemies
var enemies = [];
var numberOfEnemies = 20;

//create our collection of enemies
for(var i = 0; i<numberOfEnemies; i++){
    enemies[i] = new GameObject();
    enemies[i].color = "red";
    enemies[i].w = 20;
    enemies[i].h = 20;
    enemies[i].vy = 3;
    enemies[i].x = rand(0, c.width);
    enemies[i].y = rand(0, c.height);


}



/*--------------main()------------------------
This is the function that makes the game work
---------------------------------------------*/

function main()
{ 
       //erases the screen
    ctx.clearRect(0,0,c.width,c.height); 
    
    switch(currentScene){
        case "start":
        console.log(currentScene);    
        ctx.font = "40px arial";
    ctx.fillText(`click to start. over 100 to win`, 150, c.height/2);
    addEventListener(`click`, play);
         break;

        case "game":
            console.log(currentScene);    
            game();
            if(score > 100){
                win();
            }
         break;

        case "gameOver":
            console.log(currentScene);   
            ctx.font = "40px arial";
    ctx.fillText(`You Win!!`, c.width/2 - 100, c.height/2); 
         break;

        
    }

}

function play(){
    currentScene = gameScenes[1];
}

function win(){
        currentScene = gameScenes[2];
}

function game(){
    
    //Any changes to numbers
    if(a == true || left == true){
        player.vx = -playerSpeed;

    }
    if(d == true || right == true){
        player.vx = playerSpeed;

    }
    if(w == true || up == true){
        player.vy = -playerSpeed;

    }
    if(s == true || down == true){
        player.vy = playerSpeed;

    }
    player.vx *= player.friction;
    player.vy *= player.friction;

    //Any collision detection 

    //draw the pictures
    for(var i = 0; i < enemies.length; i++){
        enemies[i].move();
        //enemies[i].render();
        enemies[i].renderImage(krabbyPatty);
        //reset enemies off screen bottom
        if(enemies[i].y > c.height + enemies[i].h){
            enemies[i].y = rand(-c.height, 0);
            enemies[i].x = rand(0, c.width);
            if(enemies[i].vy == 3){
                if(score > 0){
            score --;
                }
            }

            //enemies[i].vy = -3;

        }
        //reset off screen top
        if(enemies[i].y < - enemies[i].h){
            enemies[i].y = rand(-c.height, 0);
            enemies[i].x = rand(0, c.width);
            if(enemies[i].vy == -3){
                score += 5;
                enemies[i].vy = 3;
            }
        }
       if(player.overlaps(enemies[i])){
        enemies[i].vy = -3;
       }
    }

    player.move();
    player.render();
    ctx.font = "40px arial";
    ctx.fillText(`score: ${score}`, 10, 50);
}
//random number generator
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}
//Converts degrees to radians
function radians(_deg)
{
    return _deg * Math.PI/180
}

//Converts radians to degrees
function degrees(_rad)
{
    return _rad * 180/Math.PI
}
/*-------Diagram--------

               /|        c = the hypoteneuse
            c / |        b = height
             /  | b      a = width
            /   |        T = arch tangent angle
           /T___|
             a

--------------------------

To get a and b (displacement) when you know two points
  
    a = destination.x - starting.x
    b = destination.y - starting.y

To get the total distance (hypotenuese) between two points
    c = Math.sqrt(_a*_a + _b*_b)

To get the arc tangent angle (labeled T in the diagram)
    radians = Math.atan2(b, a)

To find a and b if you know c and T
    a = Math.cos(T) * c
    b = Math.sin(T) * c

*/
