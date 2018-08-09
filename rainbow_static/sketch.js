//var math = require('mathjs');
var quantity = 100;
var SIZE  = 0;
var matrix = math.eye(quantity, quantity, 'sparse');
var m = math.zeros(quantity,quantity);
var Min = 0;
var Max = 255
function setup() {
  createCanvas(600,600);
  background(50);
  noStroke();
  smooth();
  SIZE  = width/quantity;




}

function draw() {
	if(random() > 0.95){
	m.forEach(function(value,index,matrix){
		fill( color((Math.random()*210|0), (Math.random()*255|0),(Math.random()*210|0) ));
		rect(index[0]*SIZE, index[1]*SIZE, SIZE,SIZE);
	});
}
	fill(0);
	rect(mouseX,mouseY, 100,100);
}

console.log("running");

