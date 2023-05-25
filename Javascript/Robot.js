class Robot {
  constructor(x,y,size,color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = 0;
    this.isOnGround = true;
    this.color=color;
  }
  
  jump() {
    if (this.isOnGround) {
      this.velocity = -15;
      this.isOnGround = false;
    }
  }

  update() {
    this.velocity += 0.5;
    this.y += this.velocity;
    if (this.y + this.size > height-33) {
      this.y = height - this.size-33;
      this.velocity = 0;
      this.isOnGround = true;
    }
    this.x=mouseX; //volgen van de muis
  }

  show() {
    fill(this.color);
    ellipse((this.x-80)*this.size, (this.y-120)*this.size, 25*this.size, 30*this.size);
    ellipse((this.x+80)*this.size, (this.y-120)*this.size, 25*this.size, 30*this.size);
    ellipse((this.x-68)*this.size, (this.y-120)*this.size, 25*this.size, 40*this.size);
    ellipse((this.x+68)*this.size, (this.y-120)*this.size, 25*this.size, 40*this.size);
    ellipse((this.x-60)*this.size, (this.y-120)*this.size, 25*this.size, 50*this.size);
    ellipse((this.x+60)*this.size, (this.y-120)*this.size, 25*this.size, 50*this.size);
    ellipse((this.x-52)*this.size, (this.y-120)*this.size, 25*this.size, 50*this.size);
    ellipse((this.x+52)*this.size, (this.y-120)*this.size, 25*this.size, 50*this.size);

    //linkerbeen
    ellipse((this.x-30)*this.size, (this.y+20)*this.size, 45*this.size, 30*this.size);
    ellipse((this.x-30)*this.size, (this.y+10)*this.size, 53*this.size, 20*this.size);
    ellipse((this.x-30)*this.size, (this.y)*this.size, 53*this.size, 20*this.size);
    ellipse((this.x-30)*this.size, (this.y-10)*this.size, 55*this.size, 20*this.size);
    ellipse((this.x-30)*this.size, (this.y-20)*this.size, 60*this.size, 20*this.size);
    ellipse((this.x-30)*this.size, (this.y-30)*this.size, 65*this.size, 20*this.size);
    ellipse((this.x-30)*this.size, (this.y-40)*this.size, 70*this.size, 20*this.size);

    //rechterbeen
    ellipse((this.x+24)*this.size, (this.y+20)*this.size, 45*this.size, 30*this.size);
    ellipse((this.x+24)*this.size, (this.y+10)*this.size, 53*this.size, 20*this.size);
    ellipse((this.x+24)*this.size, (this.y)*this.size, 53*this.size, 20*this.size);
    ellipse((this.x+24)*this.size, (this.y-10)*this.size, 55*this.size, 20*this.size);
    ellipse((this.x+24)*this.size, (this.y-20)*this.size, 60*this.size, 20*this.size);
    ellipse((this.x+25)*this.size, (this.y-30)*this.size, 65*this.size, 20*this.size);
    ellipse((this.x+26)*this.size, (this.y-40)*this.size, 70*this.size, 20*this.size);

    //lichaam 
    ellipse((this.x)*this.size, (this.y-60)*this.size, 125*this.size, 60*this.size);
    ellipse((this.x)*this.size, (this.y-85)*this.size, 130*this.size, 65*this.size);
    ellipse((this.x)*this.size, (this.y-110)*this.size, 125*this.size, 60*this.size);
    ellipse((this.x)*this.size, (this.y-135)*this.size, 100*this.size, 50*this.size);

    //hoofd
    circle((this.x)*this.size, (this.y-185)*this.size, 75*this.size);
    push();
    fill(150);
    ellipse((this.x)*this.size, (this.y-170)*this.size, 50*this.size, 10*this.size);
    pop();
    if (frameCount % 120 < 5 || (frameCount % 120 > 30 && frameCount % 120 < 5)) {    
      ellipse((this.x-14)*this.size,(this.y-193)*this.size,15*this.size,1*this.size);
      ellipse((this.x+14)*this.size,(this.y-193)*this.size,15*this.size,1*this.size);
    }
    else{
      fill(150);
      circle((this.x-14)*this.size, (this.y-193)*this.size,15*this.size);
      circle((this.x+14)*this.size, (this.y-193)*this.size, 15*this.size);
    }
  }
  stop(){
      this.isOnGround = true;

  }
}
