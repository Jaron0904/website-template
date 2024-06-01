class Obstakel{
    constructor(x,y,xgrootte,ygrootte,obstakelkleur,obstakelsnelheid){ // de declaratie van de robot, wat hoort bij wat als het aangeropen wordt
      this.x=x; //plaats op het scherm op de x-as
      this.y=y; //plaats op het scherm op de y-as
      this.xgrootte=xgrootte; //hoe breed moet het blokje zijn in het begin?
      this.ygrootte=ygrootte; //hoe hoog moet het blokje zijn in het begin?
      this.obstakelkleur=obstakelkleur;
      this.obstakelsnelheid=obstakelsnelheid;
      this.level=1; //dient om het spel te laten starten
      this.isStopped=false;
    }
    move(){ //wanneer deze functie wordt aangeroepen in de wereld zal het blokje beginnen met bewegen
      this.x+=this.obstakelsnelheid; //Zorgt ervoor dat het blokje van links naar rechts beweegt
      if(this.isStopped==false){ // zolang de variabele 'isStopped' niet gelijk is true blijven de blokjes vergroten en verplaatsen
      if(this.x>width){ //als het blokje zich buiten het scherm bevindt zullen de volgende functies uitgevoerd worden
        if(this.ygrootte>120){
          this.ygrootte=20
          this.y=windowHeight-20;
        }
        this.obstakelsnelheid=random(3,7);
        this.x=0;
        this.ygrootte+=10;
        this.y-=10;
        this.xgrootte+=5;
        this.level+=1;
        // if (this.level%5==0){
        //   this.i+=1;
        // }
      }
      }
      else{
        this.obstakelsnelheid=0;
      }
    }
    show(){
      fill(this.obstakelkleur);
      rect(this.x,this.y,this.xgrootte,this.ygrootte);
    }  
    stop(){
      start=2;
      this.color='grey'
    }
    reset(){
      start=1;
      this.level=1;
      this.ygrootte=20;
      this.xgrootte=20;
      this.x=0;
      this.y=windowHeight-20;

    }
  }