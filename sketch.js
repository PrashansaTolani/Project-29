const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;


function preload(){
  polygonImg=loadImage("polygon.png");
  
}
function setup() {
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  block1=new Block(480,275);
  block2=new Block(510,275);
  block3=new Block(540,275);
  block4=new Block(570,275);
  block5=new Block(600,275);
  block6=new Block(450,275);
  block7=new Block(630,275);
  block8=new Block(480,235);
  block9=new Block(510,235);
  block10=new Block(540,235);
  block11=new Block(570,235);
  block12=new Block(600,235);
  block13=new Block(500,195);
  block14=new Block(530,195);
  block15=new Block(560,195);
  block16=new Block(530,155);
  block17=new Block(800,100);
  block18=new Block(800,140);
  block19=new Block(830,140);
  block20=new Block(770,140);
  block21=new Block(800,180);
  block22=new Block(830,180);
  block23=new Block(860,180);
  block24=new Block(770,180);
  block25=new Block(740,180);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {
  background("black")
  Engine.update(engine);
  fill(135,206,234);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(254,192,203);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(63,224,208);
  block13.display();
  block14.display();
  block15.display();
  fill(128,128,128);
  block16.display();
  fill(254,192,203);
  block17.display();
  fill(63,224,208);
  block18.display();
  block19.display();
  block20.display();
  fill(135,206,234);
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}