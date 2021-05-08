//Create variables here

var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;


function preload()
{
	//load images here

  dogImage = loadImage ("images/dogImg.png");
  dogImage1 = loadImage ("images/dogImg1.png");
}

function setup() {

  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

 feed= createButton("feed the dog")
 feed.position(700,95)
 feed.mousePressed (feedDog);


 addFood= createButton("add Food");
 addFood.position(800,95);
 addFood.mousePressed(addFood);
}


function draw() {  
background(46,139,87);

fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
 
  drawSprites();
}

function readStock (data) {
  foods= data. val();
}

function feedDog(){
  dog.addImage(dogimg1.png);
   
  foodObj.updatefoodStock(foodObj.getfoodStock(-1));
  database.ref('/').update({
    food:foodObj.getfoodStock()
    FeedTime:hour()
  })
}

function addfoods(){
  foodS++;
  database.ref('/').update({
    food:foodS;
  })
}


