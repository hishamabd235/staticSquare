const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var hisham={
    restitution:0.6

    }
     
    ball2=Bodies.circle(390,100,25,hisham)
    World.add(world,ball2)
    ball1=Bodies.circle(200,100,50,hisham)
    World.add(world,ball1)
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball1.debug=true
    ground.debug=true
    console.log(ball1);
}

function draw(){
    background(0);
    Engine.update(engine);
    circle(ball2.position.x,ball2.position.y,25)
    circle(ball1.position.x,ball1.position.y,50)
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}