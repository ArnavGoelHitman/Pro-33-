const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;
var turn=0;
var gameState="play";

var divisionHeight=300;
var score =0;
var points=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
    
   
  
   

    
}

 


function draw() {
  background("black");
  textSize(40)
 text("Score : "+score,20,30);
 textSize(20)
 text("20"+points,420,500);

 text("20"+points,500,500);
 text("20"+points,340,500);
 text("20"+points,580,500);
 text("20"+points,660,500);
 text("20"+points,740,500);
 text("50"+points,260,500);
 text("50"+points,180,500);
 text("50"+points,100,500);
 text("50"+points,20,500);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
    particle.display();
    if (particle.body.position.y>760) {
      score=score+100
   
    
      if (particle.body.position.x<300) {
        score=score+400;
       
      }
        if(particle.body.position.x>301&&particle.body.position.x<600){
          score=score+100;
          
  
        }
        if(particle.body.position.x>601&&particle.body.position.x<900){
          score = score+100;
          
        }
        particle=null;
        
      }
     
     
  
    

  

  }
  
  if (turn>=5){
    text("GAME OVER",200,200);
     gameState = "end"
    
}   
  
  
   
}
function mouseReleased(){
  if(gameState!=="end"){
    turn++
    particle = new Particle(mouseX,10,10,10);

}
}
