let y = 625; // Y-positie van de robot
let jumping=false;
let img;
let myFont;


function preload(){

  background=loadImage('fotos/background.avif')

}
function setup() {
  createCanvas(windowWidth-20, windowHeight);
    background.resize(windowWidth,windowHeight);
  myFont=loadFont("Strato-linked.ttf")
  
}
function draw() {
  image(background,0,0);
  fill(100,255,255)
  textFont("Roboto")
  textSize(50);
  text("Make him angry",(windowWidth/2)-150,120);
  if((mouseIsPressed)&&(mouseY>windowHeight-160)&&(mouseY<windowHeight-140)){
    drawRobot(200,y);
    pijnindeballen();
  }

  else if (!jumping) {
    x=mouseX;
    push();
    drawRobot(x, y);
    fill(150);
    circle(x-14, y-193, 15);
    circle(x+14, y-193, 15);
    pop();
  } else {
    image(background,0,0);    
    fill(100,255,255)
    textFont("Roboto")
    textSize(50);
    text("Make him angry",(windowWidth/2)-150,120);
  }
}
function drawRobot(x, y) {
  x=mouseX;
  ellipse(x-80, y-120, 25, 30);
  ellipse(x+80, y-120, 25, 30);
  ellipse(x-68, y-120, 25, 40);
  ellipse(x+68, y-120, 25, 40);
  ellipse(x-60, y-120, 25, 50);
  ellipse(x+60, y-120, 25, 50);
  ellipse(x-52, y-120, 25, 50);
  ellipse(x+52, y-120, 25, 50);
  
  //linkerbeen
  ellipse(x-30, y+20, 45, 30);
  ellipse(x-30, y+10, 53, 20);
  ellipse(x-30, y, 53, 20);
  ellipse(x-30, y-10, 55, 20);
  ellipse(x-30, y-20, 60, 20);
  ellipse(x-30, y-30, 65, 20);
  ellipse(x-30, y-40, 70, 20);
  
  //rechterbeen
  ellipse(x+24, y+20, 45, 30);
  ellipse(x+24, y+10, 53, 20);
  ellipse(x+24, y, 53, 20);
  ellipse(x+24, y-10, 55, 20);
  ellipse(x+24, y-20, 60, 20);
  ellipse(x+25, y-30, 65, 20);
  ellipse(x+26, y-40, 70, 20);
 
  //lichaam 
  ellipse(x, y-60, 125, 60);
  ellipse(x, y-85, 130, 65);
  ellipse(x, y-110, 125, 60);
  ellipse(x, y-135, 100, 50);
  
  //hoofd
  circle(x, y-185, 75);
  push();
  fill(150);
  ellipse(x, y-170, 50, 10);
  pop();
}
function mousePressed(){
  if((mouseY>windowHeight-160)&&(mouseY<windowHeight-140)){
   pijnindeballen();
  }
  else{
    x=mouseX;
    y=625;
    jump();

  }
}
function pijnindeballen(){
  x=mouseX
  push();
  fill(170,30,35);
  circle(x,y-185,75);
  pop();
  push();
  fill(10);
  ellipse(x, y-170, 50, 3);
  ellipse(x-14,y-193,25,10);
  ellipse(x+14,y-193,25,10);
  pop();
}
function jump() {
  jumping=true;
  let jumpHeight = 300;
  let jumpTime = 60;
  let jumpSpeed = jumpHeight / jumpTime;
  let t = 0;
  let interval = setInterval(function() {
    let newY = y + (jumpHeight / 2) * cos((t / jumpTime) * TWO_PI) - jumpHeight / 2;
    drawRobot(x, newY);
    push();
    fill(150);
    x=mouseX;
    circle(x-14, newY-193, 15);
    circle(x+14, newY-193, 15);
    pop();
    t++;
    if (t > jumpTime) {
      clearInterval(interval);
      jumping=false
    }
  },5); 
}
