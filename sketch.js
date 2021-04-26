const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var bArray=[];

function preload() {
  bgig = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(700, 700, 1200, 15);
  hero = new Hero(400,800,250);
  fly = new SlingShot(hero.body,{x:500,y:50});
  monster = new Monster(1100,650,300);

  for(i=0;i<21;i=i+1){
    if(i<=6)
      bArray.push(new Box(600,100,70,70))
    else if(i>7 && i<=14)
      bArray.push(new Box(700,100,70,70))
    else 
      bArray.push(new Box(800,100,70,70))
  }

 
}

function draw() {
  background(bgig);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  monster.display();

  for(i=0;i<21;i=i+1){
    bArray[i].display();
  }
  

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY });
}
