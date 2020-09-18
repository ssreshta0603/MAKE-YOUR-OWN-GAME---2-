var manFroViewImg,manBackViewImg,manRightViewImg,manLeftViewImg;
var saniImg,virus1Img,virus2Img,virus3Img;
var man,sanitizer1,sanitizer2,sanitizer3,sanitizer4;
var virus1,virus2,virus3;

function preload(){
manFroViewImg = loadAnimation("manfroviews/manfroview1.png","manfroviews/manfroview2.png","manfroviews/manfroview3.png",
"manfroviews/manfroview4.png","manfroviews/manfroview5.png","manfroviews/manfroview6.png","manfroviews/manfroview7.png",
"manfroviews/manfroview8.png","manfroviews/manfroview9.png");

manBackViewImg = loadAnimation("mantopviews/mantopview1.png","mantopviews/mantopview2.png","mantopviews/mantopview3.png"
,"mantopviews/mantopview4.png","mantopviews/mantopview5.png","mantopviews/mantopview6.png","mantopviews/mantopview7.png"
,"mantopviews/mantopview8.png","mantopviews/mantopview9.png");

manRightViewImg  = loadAnimation("manrightviews/manrightview1.png","manrightviews/manrightview2.png",
"manrightviews/manrightview3.png","manrightviews/manrightview4.png","manrightviews/manrightview5.png",
"manrightviews/manrightview6.png","manrightviews/manrightview7.png","manrightviews/manrightview8.png",
"manrightviews/manrightview9.png");

manLeftViewImg = loadAnimation("manleftviews/manleftview1.png","manleftviews/manleftview2.png","manleftviews/manleftview3.png"
,"manleftviews/manleftview4.png","manleftviews/manleftview5.png","manleftviews/manleftview6.png","manleftviews/manleftview7.png"
,"manleftviews/manleftview8.png","manleftviews/manleftview9.png");

saniImg = loadImage("power/sanitizer.png");
virus1Img = loadImage("viruses/virus1.png");
virus2Img = loadImage("viruses/virus2.png");
virus3Img = loadImage("viruses/virus3.png");

}
function setup() {
  createCanvas(1000,600);
 
  wall1 = createSprite(500,595,1000,10);
  wall2 = createSprite(500,5,1000,10);
  wall3= createSprite(5,10,10,400);
  wall4= createSprite(995,70,10,300);
  wall5= createSprite(5,480,10,250);
  wall6= createSprite(995,480,10,250);
  wall7= createSprite(5,220,320,50);
  wall8= createSprite(995,220,320,50);
  wall9= createSprite(5,350,320,50);
  wall10= createSprite(995,350,320,50);
  wall11= createSprite(130,80,100,50);
  wall12= createSprite(330,80,100,50);
  wall13= createSprite(860,80,100,50);
  wall14= createSprite(660,80,100,50);
  wall15= createSprite(130,150,100,20);
  wall16= createSprite(860,150,100,20);
  wall17= createSprite(500,60,50,100);
  wall18= createSprite(500,185,50,60);
  wall19= createSprite(500,150,200,25);
  wall20= createSprite(280,200,35,130);
  wall21= createSprite(340,200,150,30);
  wall22= createSprite(720,210,35,130);
  wall23= createSprite(660,210,150,25);
  wall24= createSprite(720,350,35,70);
  wall25= createSprite(280,350,35,70);
  wall26= createSprite(660,430,100,20);
  wall27= createSprite(330,430,100,20);
  wall28= createSprite(500,370,200,25);
  wall29= createSprite(500,400,45,80);
  wall30= createSprite(500,480,200,25);
  wall31= createSprite(500,510,45,80);
  wall32= createSprite(500,370,200,25);
  wall33= createSprite(500,400,45,80);
  wall34= createSprite(240,540,300,20);
  wall35= createSprite(270,510,45,60);
  wall36= createSprite(750,540,300,20);
  wall37= createSprite(710,510,45,60);
  wall38= createSprite(140,440,80,15);
  wall39= createSprite(165,460,30,50);
  wall40= createSprite(850,430,80,15);
  wall41= createSprite(825,460,30,50);
  wall42= createSprite(10,485,80,20);
  wall43= createSprite(990,480,80,20);

  box1 = createSprite(410,265,90,10);
  box2 = createSprite(370,300,10,70);
  box3 = createSprite(500,330,250,10);
  box4 = createSprite(620,300,10,70);
  box5 = createSprite(580,265,90,10);
  box1.shapeColor = "lightBlue";
  box2.shapeColor = "lightBlue";
  box3.shapeColor = "lightBlue";
  box4.shapeColor = "lightBlue";
  box5.shapeColor = "lightBlue";
  man = createSprite(200,450,20,20);
 man.addAnimation("frontView",manFroViewImg);
 
 virus1 = createSprite(50,270,20,20);
virus1.addImage(virus1Img);
virus1.scale = 0.15;

 virus2 = createSprite(100,270,20,20);
 virus2.addImage(virus2Img);
 virus2.scale = 0.5;

 virus3 = createSprite(950,270,20,20);
virus3.addImage(virus3Img);
virus3.scale = 0.5;

 sanitizer1 =createSprite(50,100,20,20);
 sanitizer1.addImage(saniImg);
 sanitizer1.scale = 0.15;

 sanitizer2 = createSprite(950,100,20,20);
sanitizer2.addImage(saniImg);
sanitizer2.scale = 0.15;

 sanitizer3 = createSprite(50,530,20,20);
sanitizer3.addImage(saniImg);
sanitizer3.scale = 0.15; 

 sanitizer4 = createSprite(950,530,20,20);
 sanitizer4.addImage(saniImg);
sanitizer4.scale = 0.15;

 walls = new Group()
  walls.add(wall1)
  walls.add(wall2)
  walls.add(wall3)
  walls.add(wall4)
  walls.add(wall5)
  walls.add(wall6)
  walls.add(wall7)
  walls.add(wall8)
  walls.add(wall9)
  walls.add(wall10)
  walls.add(wall11)
  walls.add(wall12)
  walls.add(wall13)
  walls.add(wall14)
  walls.add(wall15)
  walls.add(wall16)
  walls.add(wall17)
  walls.add(wall18)
  walls.add(wall19)
  walls.add(wall20)
  walls.add(wall21)
  walls.add(wall22)
  walls.add(wall23)
  walls.add(wall24)
  walls.add(wall25)
  walls.add(wall26)
  walls.add(wall27)
  walls.add(wall28)
  walls.add(wall29)
  walls.add(wall30)
  walls.add(wall31)
  walls.add(wall32)
  walls.add(wall33)
  walls.add(wall34)
  walls.add(wall35)
  walls.add(wall36)
  walls.add(wall37)
  walls.add(wall38)
  walls.add(wall39)
  walls.add(wall40)
  walls.add(wall41)
  walls.add(wall42)
  walls.add(wall43)
 
man.collide(wall1);
}

function draw() {
  background("blue");  
 
  drawSprites();
}
