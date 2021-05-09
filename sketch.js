const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    hammer = new Hammer(10,100);
    
    stone = new Stone(600, 300, 90, 90)
    stone2 = new Stone(950, 300, 105, 105)
    stone3 = new Stone(600, 250, 15, 20)
    stone4 = new Stone(945, 285, 35, 50)

    rubber = new Rubber(300, 300, 50)
    rubber2 = new Rubber(150, 300, 65)
    rubber4 = new Rubber(400, 300, 35)
    
    iron = new Iron(900, 300, 95, 50)
    iron2 = new Iron(1050, 300, 80, 105)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    stone2.display();
    rubber2.display();
    iron.display();
    iron2.display();
    rubber4.display();
    stone3.display();
    stone4.display();
}