var pet, petImage, petImage2;
var foodStock, foodS;
var database;
var position;

function preload()
{
  petImage=loadImage("Dog.png");
  petImage2=loadImage("happydog.png");
}

function setup() {
  createCanvas(500,500);
  database=firebase.database();
  console.log(database);
  pet=createSprite(250,250,10,50);
  pet.addImage(petImage);
  pet.scale=0.2;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

fill("pink");
text("NOTE:Press UP_ARROW key to feed Drago Milk!",100,30);
text("Food:"+foodS,200,150);
//pet.display();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  pet.addImage(petImage2);
}

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

 database.ref('/').update({
    food:x
  })
}
