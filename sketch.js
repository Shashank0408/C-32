const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hr;
var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg != null){
        background(backgroundImg);
    }
    Engine.update(engine);
    // write code to display time in correct format here
    if(hr>12){
    hr = hr%12;
    fill("Black");
    textSize(18);
    text("Time : "+ hr,1000,60);
    }
    else{
        fill("Black");
    textSize(18);
    text("Time : "+ hr,1000,60);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var js = await response.json();
    console.log(js);
    var dt = js.datetime;
    console.log(dt);
     hr = dt.slice(11,13);
    console.log(hr);
    // add conditions to change the background images from sunrise to sunset
    if(hr>=4 && hr<=5){
        bg ="sunrise1.png";
    }
    if(hr>=5 && hr<6){
        bg ="sunrise2.png";
    }
    if(hr>=6 && hr<7){
        bg ="sunrise3.png";
    }
    if(hr>=7 && hr<8){
        bg ="sunrise4.png";
    }
    if(hr>=8 && hr<9){
        bg ="sunrise4.png";
    }
    if(hr>=9 && hr<10){
        bg ="sunrise4.png"; 
    }
    if(hr>=10 && hr<11){
        bg ="sunrise4.png"; 
    }
    if(hr>=11 && hr<12){
        bg ="sunrise4.png";
    }
    if(hr>=12 && hr<13){
        bg ="sunrise5.png";
    }
    if(hr>=13 && hr<14){
        bg ="sunrise5.png";
    }
    if(hr>=14 && hr<15){
        bg ="sunrise6.png";
    }
    if(hr>=15 && hr<16){
        bg ="sunrise6.png";
    }
    if(hr>=16 && hr<17){
        bg ="sunset7.png";
    }
    if(hr>=17 && hr<18){
        bg ="sunset7.png";
    }
    if(hr>=18 && hr<19){
        bg ="sunset8.png";
    }
    if(hr>=19 && hr<20){
        bg ="sunset10.png";
    }
    if(hr>=20 && hr<21){
        bg ="sunset11.png";
    }
    if(hr>=21 && hr<22){
        bg ="sunset11.png";
    }
    if(hr>=22 && hr<23){
        bg ="sunset11.png";
    }
    if(hr>=23 && hr<24){
        bg ="sunset11.png";
    }
    if(hr>=24 && hr<1){
        bg ="sunset12.png";
    }
    if(hr>=1 && hr<2){
        bg ="sunset12.png";
    }
    if(hr>=2 && hr<3){
        bg ="sunset12.png";
    }
    if(hr>=3 && hr<4){
        bg ="sunset12.png";
    }
    
    backgroundImg = loadImage(bg);
}
