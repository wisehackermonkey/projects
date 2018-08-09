 var WIDTH = 0, HEIGTH = 0 ;
 Function.new = function(){
 	var that = Object.create(this.prototype);
 	var other = this.apply(that,arguments);
 	return (typeof other === 'object' && other) || that;
 };
 	
	
	
	
	
var vector = function(x,y){
		this.x = x;
		this.y = y;
	}  
	
vector.prototype.set= function(x,y){
		this.x = x;
		this.y = y;
	}  
	
	
	
vector.prototype.add = function(v){
			this.x += v.x;
			this.y += v.y;
	}
		
	
	
	
	
vector.prototype.sub = function(v){
		this.x -= v.x;
		this.y -= v.y;
	};
		
	
	
	
	
vector.prototype.mult = function(n){
		this.x *= n;
		this.y *= n;
	};
		
	
	
	
	
vector.prototype.div = function(n){
		this.x /= n;
		this.y /= n;
	};
		
	
	
	
	
vector.prototype.mag = function(){
		return sqrt((this.x*this.x) + (this.y* this.y));
	}
		
	
	
	
	
vector.prototype.normalize = function(){
		var length = this.mag();
	
		if(length !== 0){
			this.div(length);
		}
		
	};







 var Location =  new vector(0,0);
 var velocity = new vector(1,3.5);

	

function Mover(scale){
 Location.set(random(width),random(width));
 velocity.set(random(-2,2),random(-2,2));
 Location.mult(scale);
  Location.add(velocity);
  
  if((Location.x > width) || (Location.x < 0 )){
    velocity.x = velocity.x * -1;
  }
  
  if((Location.y > height) || (Location.y < 0 )){
    velocity.y = velocity.y * -1;
  }
  
  fill(255,0,126);
  ellipse(Location.x,Location.y,16,16);
}




var slider;

	
function setup() {
createCanvas(400,400);
frameRate(60);
slider = createSlider(0,255,100);
slider.position(20,20);

}





function draw(){
  background(50)
  stroke(0);
  fill(175);

  var xVal = slider.value()/100;

  Mover(xVal);
  Mover(xVal);
  Mover(xVal);
  
 /*Location.add(Mover.velocity);
  
  if((Location.x > width) || (Location.x < 0 )){
    velocity.x = velocity.x * -1;
  }
  
  if((Location.y > height) || (Location.y < 0 )){
    velocity.y = velocity.y * -1;
  }
  
  fill(255,0,126);
  ellipse(Location.x,Location.y,16,16);
  */
} 