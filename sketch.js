var dog, database, foodS, foodStock,database,position,happydog;

function preload()
{ Dog=loadImage("images/dogImg.png");
	Happydog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 800);
  database = firebase.database();

 dog = createSprite(400,500,5,5);
 dog.addImage(Dog);
dog.scale=0.5;
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
 dog.addImage(Happydog);
 
}
  drawSprites();
  //add styles here
  stroke(255);
  textSize(40);
  fill("black");
text("Press Up Arrow key to feed the dog",100,40);

stroke(255);
textSize(20);
fill("black");
textFont("algerian");
text("food: " + foodS,350,80);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref('/').update({
    'Food':x
  })
}



