const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies



function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world
var options = {
  isStatic:true
}
ground=Bodies.rectangle(400,370,800,30,options)
World.add(world,ground)
var ball_options = {
  restitution:0.8
}
ball = Bodies.circle(400,200,40,ball_options)
World.add(world,ball)
}
function draw() {
  background("yellow");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,30)
  ellipse(ball.position.x,ball.position.y,80,80)
  drawSprites();
}