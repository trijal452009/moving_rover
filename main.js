canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

mars_images =["nasa_image1.jpg","nasa_image2.jpg", "nasa_image3.jpg", "nasa_image4.jpg", "nasa_image5.jpg"];
random_number = Math.floor(Math.random()*5);


rover_width= 100;
rover_height=90;
rover_x=10;
rover_y=10;




background_image=mars_images[random_number];
var rover_image="rover.png";

function add(){
background_imgTag= new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src= background_image;

 rover_imgTag= new Image();
 rover_imgTag.onload=uploadRover;
 rover_imgTag.src=rover_image;



}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width,canvas.height);

}



function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x, rover_y, rover_width,rover_height);
    
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
var keypressed= e.keyCode;
console.log(keypressed);
if( keypressed=="38"){
    Up();
    console.log("up");
}
if( keypressed=="40"){
    Down();
    console.log("down");
}
if( keypressed=="37"){
    Left();
    console.log("left");
}
if( keypressed=="39"){
    Right();
    console.log("right");
}

}

function Up(){

if(rover_y>= 0){
rover_y = rover_y-10;
console.log("when up arrow is pressed, x ="+  rover_x +"y = "+ rover_y);
uploadBackground();
uploadRover();
}
}
function Down(){

    if(rover_y<= 500){
    rover_y = rover_y+10;
    console.log("when Down arrow is pressed, x ="+  rover_x +"y = "+ rover_y);
    uploadBackground();
    uploadRover();
    }
}


function Left(){

    if(rover_x>= 0){
    rover_x = rover_x-10;
    console.log("when Left arrow is pressed, x ="+  rover_x +"y = "+ rover_y);
    uploadBackground();
    uploadRover();
    }
}


function Right(){

    if(rover_x<= 700){
    rover_x = rover_x+10;
    console.log("when Right arrow is pressed, x ="+  rover_x +"y = "+ rover_y);
    uploadBackground();
    uploadRover();
    }
}



