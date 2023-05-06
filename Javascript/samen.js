function checkCollision(robot1, obstacle1) {
  if (robot1.y + robot1.size > height - 33 - obstakel1.ygrootte && robot1.x - 55 * robot1.size < obstakel1.x + obstakel1.xgrootte && robot1.x + 55 * robot1.size > obstakel1.x) {
    obstakel1.stop();
    robot1.stop();
    robot1.velocity = 0;
    robot1.isOnGround = true;
    robot1.y = height - robot1.size - 33 - obstakel1.ygrootte;
  }
}
let obstakel1;
let robot1;
let kleinerobot1;
let kleinerobot2;
let start=0;
let achtergrond;
let geluid;
let kleinerobot = [];
let aantal;
function preload(){
  //hier moet het inladen van de muziekje komen
  achtergrond=loadImage('bestanden/background.avif');
  geluid=loadSound('bestanden/sound2.mp4')
}
function setup() {
  createCanvas(windowWidth-1, windowHeight-1);
  robot1 = new Robot(400,550,1,(0,0,255));
  x=100
  for (let i=0; i<8; i++){
    x+=200;
    kleinerobot.push(new Robot(x,650,0.3,(0,0,255)));
  }
  //kleinerobot1= new Robot(100,250,0.3,(234,182,118))
  //kleinerobot2= new Robot(300,250,0.3,(239,169,99))
  obstakel1= new Obstakel(400,windowHeight-20,20,20,(239,169,99),1);
  achtergrond.resize(windowWidth,windowHeight);
}
function draw() {
  background(achtergrond);
  if (start==1){
    robot1.show();
    kleinerobot[obstakel1.i].show();
    //kleinerobot1.show();
    //kleinerobot2.show();
    robot1.update();
    obstakel1.show();
    obstakel1.move();
    //rect(mouseX-60,windowHeight-240,120,240);
    checkCollision(robot1, obstakel1);
  }
  else if (start==2){
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
    rect((windowWidth/2)-400,200,800,300);
    fill(255,255,255);
    textSize(50);
    text("Instructions:",(windowWidth/2)-120,275);    
    text("Press 'space' to start",(windowWidth/2)-225,375);
    text("Press the left mouse button to jump",(windowWidth/2)-395,475);
  }
}
function mousePressed() {
  robot1.jump();
  if (start==1){
  if(geluid.isPlaying()){
}
else{
  geluid.play();
}
}
}
function keyPressed() {
  if (key === ' ') {
    if (start==0){
    obstakel1.reset();
    }
    else if(start==2){
      obstakel1.reset();
    }
  }
}