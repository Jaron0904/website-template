function checkCollision(robot, obstakel) {
  if (robot.y + robot.size > height - 33 - obstakel.ygrootte && 
    robot.x - 55 * robot.size < obstakel.x + obstakel.xgrootte && robot.x + 55 * robot.size > obstakel.x) {
    obstakel.stop();
    robot.stop();
    robot.velocity = 0;
    robot.isOnGround = true;
    robot.y = height - robot.size - 33 - obstakel.ygrootte;
  }
}

let wachten=3000;
let obstakel1;
let obstakel2;
let robot1;
let statusgeluid2=0;
let start=0;
let achtergrond;
let geluid;
let blokjes=[];
let aantal;
let timeData;
function preload(){
  achtergrond=loadImage('bestanden/background.avif');
  geluid1=loadSound('bestanden/sound5.mp4')
  geluid2=loadSound('bestanden/ough1.mp4')

}
function setup() {
  createCanvas(windowWidth-1, windowHeight-1);
  loadJSON('https://worldtimeapi.org/api/ip',gotTimeData);
  robot1 = new Robot(400,550,1,(0,0,255));
  x=100

  obstakel1= new Obstakel(400,windowHeight-20,20,20,'red',1);
  obstakel2= new Obstakel(400,windowHeight-30,20,30,'red',1);
  achtergrond.resize(windowWidth,windowHeight);
}

function draw() {
  background(achtergrond);
  if(timeData){
    let tijdstip=new Date(timeData.datetime);
    let timeString= tijdstip.toLocaleTimeString();
    textSize(24);
    loadJSON('https://worldtimeapi.org/api/ip',gotTimeData);
    text('Tijd: '+timeString,width-width/5, 125);
  }
  else{
    textSize(24);
    text('Loading...',width-width/5,125)
  }
  if (start==1){
    robot1.show();
  
    robot1.update();
    obstakel1.show();
    (obstakel1.move(),wachten);
    obstakel2.show();
    obstakel2.move();
    checkCollision(robot1, obstakel1);
    checkCollision(robot1,obstakel2);
    
    textSize(50);
    fill('grey');
    text("Level "+obstakel1.level,(windowWidth/2)-100,120);
    if (frameCount%500==0){
      blokjes.push(new Obstakel(0,windowHeight-20,random(10,40),20,'grey',random(2,5)));
    }
    for (let i= blokjes.length -1;i>=0; i--){
      blokjes[i].move();
      blokjes[i].show();
    }
    
  }
  else if (start==2){
    if (statusgeluid2==0){
      if(geluid1.isPlaying()){
        geluid1.stop();
      }
      geluid2.play();
      statusgeluid2=1;
    }
    
    fill(107,107,107);
    rect((windowWidth/2)-300,200,600,300);
    fill(255,255,255); 
    textSize(100);
    text("You died",(windowWidth/2)-185,300);
    textSize(50);
    text("Press 'space' to restart",(windowWidth/2)-250,375);
    text("Level "+ obstakel1.level,(windowWidth/2)-75,450);
    
  }
  else{
    fill(107,107,107);
    rect((windowWidth/2)-400,200,800,400);
    fill(255,255,255);
    textSize(50);
    
    text("Instructions:",(windowWidth/2)-120,275);    
    text("Press 'space' to start",(windowWidth/2)-225,375);
    text("Press the left mouse button to jump",(windowWidth/2)-395,475);
    text("Don't hit the red blocks",(width/2)-240,575);
  }
}
function gotTimeData(data){
  timeData=data;
}
function mousePressed() {
  robot1.jump();
  if (start==1){
  if(geluid1.isPlaying()){
}
else{
  geluid1.play();
}
}
}
function keyPressed() {
  if (key === ' ') {
    if ((start==0)||(start==2)){
    obstakel2.reset();
    obstakel1.reset();
    statusgeluid2=0;
    blokjes.length=0;
    
    }
  }
}