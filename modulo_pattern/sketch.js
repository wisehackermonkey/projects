
var j = 0;
function setup() {
  createCanvas(600,400);
  fill(255);
    
}

function draw() {
   var x = 10;
     var y = 10;
  for(var i =0 ; i < width/10; i += 10){
     if(j < height+10){
       j+=10;
       rect(i,j, x ,y);
     }
  }
  
}