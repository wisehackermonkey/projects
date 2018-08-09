var lengthR1;
var lengthR2;

var arm = function (x,y){
	this.x;
	this.y;
	if(typeof x === null){this.x = 0;}
	if(typeof y === null){this.y = 0;}
	var setPos = function(x,y){
		this.x = x;
		this.y = y;
		print("WORKED!!, (", x,",",y,")");
	}
}

function armDraw(x,y, l1,l2){
	
  var angle1 = map(x,0,width,0,180);
  var angle2 = map(y,0,height,0,180);
  var length1 = l1;
  var length2 = l2;
  
  var tx1 = cos(angle1) * length1;
  var ty1 = sin(angle1) * length1;
  var tx2 = tx1 + cos(angle1 + angle2 - 180) * length2;
  var ty2 = ty1 + sin(angle1 + angle2 - 180) * length2;
  
  stroke(200,0,200);
  
  line(0,0,tx1,ty1);
    stroke(200,0,0);

  line(tx1,ty1,tx2,ty2);
  print(tx1,ty1,tx2,ty2);
}

function setup() {
  createCanvas(600,600);
  background(50);
  //var hand = arm;
  //todo calc arm pos class
  angleMode(DEGREES);
    
   
  var slr = 10;//scalar
  var x = 14 ;
  var y = 5;
  
  var x0 = 0;
  var y0 = 0;
  
  var x1 = 6*slr;
  var y1 = 5*slr;
  
  var x2 = x*slr;
  var y2 = y*slr;
  

  var line1 = sqrt(sq(x1 - x0) + sq(y1 - y0));
  var line2 = sqrt(sq(x2 - x1) + sq(y2 - y1));
  var theta1 = 0; //base angle  
  var theta2 = 0; // elbow angle
  
  
  /*
  theta1 = cos-1(
  	(line1^2 + (x^2 + y ^2) - line2^2)/
  	(2 * line1 * root(x^2 + y^2))
  	) + tan -1(y/x);
  theta2 = cos-1(
  		(line1^2 + line2^2 - (x^2 + x^2))/
  		(2*line1*line2)
  	);
  */
  //radians base angle
  
  theta1 = acos((sq(line1) + ( sq(x) + sq(y) ) - sq(line2) )/(2 * line1 * sqrt(sq(x) + sq(y)))) + atan(y/x);
  //radians elbow angle
  theta2 = acos((sq(line1) + sq(line2) - ( sq(x) + sq(y) ) )/ ( 2 * line1 * line2) );
  
  baseAngle = theta1;
  elbowAngle = theta2;

  //start lines
  stroke(0,255,255);
  
  line(x0,y0,x1,y1);
  line(x1,y1,x2,y2);
  
  
  //test lines
  stroke(0,255,0);
  //translate(100,0);
  rotate(baseAngle-elbowAngle-90);
  line(x0,y0,line1,y0);
  
  //line(,,,);
  
  
  print(`${theta1},${theta2},${line1},${line2}`);
  print(`${baseAngle},${elbowAngle}`);
   //lengthR1 = createSlider(0,100,0);
   //lengthR1.position(20,60);
   //lengthR2 = createSlider(0,100,0);
   //lengthR12.position(40,60);
}

function draw() {
  background(50);
  armDraw(mouseX,mouseY,100,100/*lengthR1.value(),lengthR2.value()*/);
}