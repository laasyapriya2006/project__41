const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var walking,umbrellaImg;
var thunder1,thunder2,thunder3,thunder4;
var maxDrops = 100;
var drops = [];
var umbrella;
var boy,thunder;
var thunderFrame = 0;

function preload(){
    walking = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png",
                            "walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    
    umbrellaImg = loadImage("umbrella.jpg");
}

function setup(){
    var canvas = createCanvas(420,570);
    engine = Engine.create();
    world = engine.world;

   /*umbrella = createSprite(200,300);
    umbrella.scale = 0.5;
    umbrella.addImage(umbrellaImg);*/

    boy = createSprite(100,410);
    boy.addAnimation("walking",walking);
    boy.scale = 0.5;

    

    for(var i = 0; i < maxDrops; i++)
    {
        drops.push(new Drop(random(0,400),random(0,400)));
    }
   
}

function draw(){
    background("black");

    Engine.update(engine);

    for (var i = 0; i < drops.length; i++) {
     
        drops[i].display();
        drops[i].update();
        
    }


   if(frameCount%50 === 0){
    var rand = Math.round(random(1,4));
    thunderFrame = frameCount;
    thunder = createSprite(random(10,370),random(10,30));
    
    switch(rand){
        case 1 :
            thunder.addImage(thunder1);
            break;
        case 2 :
            thunder.addImage(thunder2);
            break; 
        case 3 :
            thunder.addImage(thunder3);
            break; 
        case 4 :
            thunder.addImage(thunder4);
            break;
        default:
            break;          
    }
    thunder.scale = random(0.2,0.6);
}
    //console.log(rand);

    if(thunderFrame + 30 === frameCount && thunder)
    {
        thunder.destroy();
    }

    drawSprites();
}   

