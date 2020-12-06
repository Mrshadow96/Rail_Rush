const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var gem1;
var ground;
var backImg;
var track;
var bob;
var obstacle1;
var cart, cartImg;
var rail;

function preload(){
    backImg = loadImage("oldMines.jpg");
    cartImg = loadImage("cart Str.png");
}

function setup(){

 var canvas = createCanvas(1600, 1600);

 engine = Engine.create();
 world = engine.world;

 gem1 = new Box(725, 320, 70, 70);
 ground = new Ground(630, height, 1900, 20);
//  track = new Track(700, 700, 200, 100);
 bob = new Boy(745, 1120, 200, 200);
 obstacle1 = new Enemy(800, 800, 120, 120);
 
}

function draw(){
background(backImg);

Engine.update(engine);

gem1.display();
ground.display();
// track.display();
obstacle1.display();
bob.display();

}