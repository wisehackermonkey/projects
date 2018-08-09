var wordString = 'W';

var wordOffSetX = 50;
var wordOffSetY = 25;


var font;
//var img;
var counter = 0;






function randomChar(){
  var RandCharacterCode = 0x30A0 + round(random(0,96));
  
  var createChar = ''+String.fromCharCode(RandCharacterCode);
  return createChar;
}





function drawMatrixChar(){
  fill(color(30, random(197,255),0,random(0,255)));
  //translate(0, 0);
  
  
 rotate(90);


  wordOffSetY-=10;
  
  text(randString(random(0,height/12)), 0, wordOffSetY);
  
  if(wordOffSetY < -width){
    
    wordOffSetY = 0;
    counter++;
    
    if((counter%2) === 0){
     background(color(0,0,0,100));
     
    }
  }
}



function randString(len){
    var randStr = '';
    for(var i = 0; i < len; i++){
      randStr += randomChar();
    }
    return randStr;
}


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  
 // pixelDensity(1);
 background(0);
 
 
  angleMode(DEGREES);
 
   //textFont(font);

   fill(0).strokeWeight(1).textSize(10);
  
  

}

function draw() {
   
  
  drawMatrixChar();
  if(counter === 100){
    noLoop();
  }
  
  print(counter);
}