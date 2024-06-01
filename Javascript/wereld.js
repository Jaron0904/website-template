function checkCollision(robot, obstakel) { //Controleert ofdat de obstakels en robot in elkaars buurt komen
  if (robot.y + robot.size > height - 33 - obstakel.ygrootte && 
    robot.x - 55 * robot.size < obstakel.x + obstakel.xgrootte && robot.x + 55 * robot.size > obstakel.x) {
    obstakel.stop();
    robot.stop();
    robot.velocity = 0;
    robot.isOnGround = true;
    robot.y = height - robot.size - 33 - obstakel.ygrootte;
  }
}

let obstakel1; //Eerste obstakel declareren
let obstakel2; // tweede obstakel declareren
let robot1; // robot declareren
let start=0; 
let achtergrond;
let geluid; //springgeluid
let blokjes=[]; //variabele van fake blokken
let timeData; // declareren tijd
function preload(){ //waar de verschillende bestanden ingelezen moeten worden
  achtergrond=loadImage('bestanden/background.avif');
  geluid1=loadSound('bestanden/sound5.mp4')
  geluid2=loadSound('bestanden/ough1.mp4')
}
function setup() {
  createCanvas(windowWidth-4.5, windowHeight-4.5);
  loadJSON('https://worldtimeapi.org/api/ip',gotTimeData); // tijd aflezen uit een online databron
  robot1 = new Robot(400,550,1,(0,0,255)); // robot maken met de variabelen die de class nodig heeft
  obstakel1= new Obstakel(400,windowHeight-20,20,20,'red',random(2,5)); //obstakel 1 met de nodige variabelen
  obstakel2= new Obstakel(400,windowHeight-30,20,30,'red',random(3,6)); //obstakel 2 met de nodige variabelen
  achtergrond.resize(windowWidth,windowHeight); // grote van achtergrondfoto vergroten
}

function draw() {
  background(achtergrond); // plaatsen van achtergrond
  if(timeData){ // uitlezen van de tijd
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
  if (start==1){ //Enkel als variabele start gelijk aan 1 is mag dit stuk code starten
    robot1.show(); //robot tekenen
    robot1.update(); // robot laten bewegen in x richting met muis
    obstakel1.show(); 
    obstakel1.move(); // blokjes beginnen met bewegen
    obstakel2.show(); 
    obstakel2.move(); 
    checkCollision(robot1, obstakel1); // functie checkCollision wordt aangeroepen
    checkCollision(robot1,obstakel2);
    textSize(50);
    fill('grey');
    text("Level "+obstakel1.level,(windowWidth/2)-100,120);
    if (frameCount%500==0){ // als frameCount deelbaar is door 500 wordt een nieuw fake blokje toegevoegd 
      blokjes.push(new Obstakel(0,windowHeight-20,random(10,40),20,'grey',random(2,5)));
    }
    for (let i= blokjes.length -1;i>=0; i--){
      blokjes[i].move();
      blokjes[i].show();
    }
    
  }
  else if (start==2){ // Dit is wanneer obstakel en robot elkaar raken dat er een uhm geluid komt en dat er tevoorschijn komt dat het game over is
    if (statusgeluid2==0){
      if(geluid1.isPlaying()){ // als springgeluid nog bezig is terwijl robot al dood is moet het stoppen met afspelen
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
  else{ //Startscherm- komt maar 1 keer voor
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
  if(geluid1.isPlaying()){ //springeluid laten afspelen
}
else{
  geluid1.play();
}
}
}
function keyPressed() {
  if (key === ' ') { //spatiebar
    if ((start==0)||(start==2)){
    obstakel2.reset();
    obstakel1.reset();
    statusgeluid2=0;
    blokjes.length=0;
    }
  }
}