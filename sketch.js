//Create variables here
var dog,happyDog,eatingDog;
var database;
var foodS,foodStoke;

function preload()
{
  happyDog=loadImage("images/dogImg1.png");
  eatingDog=loadImage("images/dogImg.png");
}

function setup()
{
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,300,20,20);
  dog.addImage("hdog",happyDog);
  dog.scale=0.2;

  foodStoke=database.ref('Food');
  foodStoke.on("value",readStoke);
  
}


function draw() 
{  
  background(46,139,87)

  if(keyWentDown(UP_ARROW))
  {
    writeStoke(foodS);
    dog.addImage("dogeating",eatingDog);
  }

  drawSprites();

  fill("white");
  stroke("black");
  text("foodStoke : "+foodS,50,150);
  textSize(50);
  


}

function readStoke(data)
{
  foodS=data.val();
}

function writeStoke(x)
{

  if(x<=0)
  {
    x=0;
  }else
  {
    x=x-1
  }
  database.ref('/').update({
    Food : x
  })
}



