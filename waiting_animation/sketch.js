var anim = ["/","|","\\","-"];
var i = 0;

//https://stackoverflow.com/questions/1183872/put-a-delay-in-javascript

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}





function setup() {
  createCanvas(400,400);
  background(50);
  frameRate(10);
  textSize(100);
  print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

}

function draw() {
background(50);
   var test = anim[i];
  translate(width/2,height/2);

    text(anim[i],50,50);
   print( anim[i]);

   
   
         i++;
    if(i > 3){
      i=0;
    }
    
  
}