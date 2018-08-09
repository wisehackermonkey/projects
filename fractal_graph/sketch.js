// p5.disableFriendlyErrors = true;
// Let’s draw the Mandelbrot set!
// http://jonisalonen.com/2013/lets-draw-the-mandelbrot-set/
var button;
var maximum = 5;

// https://stackoverflow.com/questions/4438131/factorial-of-a-number#4438167

// fastest version yet low resolution thogh
function fact(x) {
   if(x===0) {
      return 1;
   }
   return x * fact(x-1);
}
function mandelbrot(){
	var c_re = 0;
	var c_im = 0;
	var x = 0, y = 0;
	var iteration = 0;
	var x_new = 0;
	var WIDTH = width/2.0;
	var HIEGHT = height/2.0;
	var thing = 4.0/width;
	//note chaneg to row and col = +=2 for better performance over +=1
	for (var row = 0; row < height; row+=3) {
		    for (var col = 0; col < width; col+=3) {
		    	
		    	c_re = (col - WIDTH)*thing;
		        c_im = (row - HIEGHT)*thing;
		        x = 0, y = 0;
		        iteration = 0;
		        // trying bitwise operator
		        // x < 2 && y < 2 
		        // had weird results
		        while (iteration < maximum && x * x +y * y  <= 4 ) {
		            x_new = x * x - y * y + c_re;
		            y = 2 * x*y + c_im;
		            x = x_new;
		            iteration++;
		        }
		        
		        // fastest yet with just rendering the first point with no two color stroke
		        if (iteration < maximum){
		        	
			//	stroke(255);
				// stroke(iteration,iteration,255);
		        point(col, row);	
		        }else{
			//	stroke(0);
		      //  point(col, row);	
		        } 
		    }
		}
}

function nextIteration(){
	maximum+=1;
	mandelbrot();
}
function setup() {
// 300 px works best for speed
  createCanvas(600,600);
  background(50);
  stroke(255);
  var index = 0;
  button = createButton('Next Iteration');
  button.mousePressed(nextIteration);
}

function draw() {
	
  
}



// fastest version yet low resolution thogh
// var button;
// var maximum = 5;

// // https://stackoverflow.com/questions/4438131/factorial-of-a-number#4438167
// function fact(x) {
//   if(x===0) {
//       return 1;
//   }
//   return x * fact(x-1);
// }
// function mandelbrot(){
// 	var c_re = 0;
// 	var c_im = 0;
// 	var x = 0, y = 0;
// 	var iteration = 0;
// 	var x_new = 0;
	
// 	//note chaneg to row and col = +=2 for better performance over +=1
// 	for (var row = 0; row < height; row+=2) {
// 		    for (var col = 0; col < width; col+=2) {
// 		    	c_re = 0;
// 				c_im = 0;

// 		        c_re = (col - width/2.0)*4.0/width;
// 		        c_im = (row - height/2.0)*4.0/width;
// 		        x = 0, y = 0;
// 		        iteration = 0;
// 		        while (x*x+y*y <= 4 && iteration < maximum) {
// 		        	x_new = 0;
// 		            x_new = x*x - y*y + c_re;
// 		            y = 2*x*y + c_im;
// 		            x = x_new;
// 		            iteration++;
// 		        }
		        
// 		        // fastest yet with just rendering the first point with no two color stroke
// 		        if (iteration < maximum){
		        	
// 			//	stroke(255);
// 		        point(col, row);	
// 		        }else{
// 			//	stroke(0);
// 		      //  point(col, row);	
// 		        } 
// 		    }
// 		}
// }

// function nextIteration(){
// 	maximum+=1;
// 	mandelbrot();
// }
// function setup() {
//   createCanvas(300,300);
//   background(50);
//   stroke(255);
//   var index = 0;
//   button = createButton('Next Iteration');
//   button.mousePressed(nextIteration);
// }

// function draw() {
	
  
// }





// slow version
// p5.disableFriendlyErrors = true;

// var button;
// var maximum = 5;

// function fact(x) {
//   if(x===0) {
//       return 1;
//   }
//   return x * fact(x-1);
// }
// function mandelbrot(){
// 	var c_re = 0;
// 	var c_im = 0;
// 	var x = 0, y = 0;
// 	var iteration = 0;
// 	var x_new = 0;
// 	for (var row = 0; row < height; row++) {
// 		    for (var col = 0; col < width; col++) {
// 		    	c_re = 0;
// 				c_im = 0;

// 		        c_re = (col - width/2.0)*4.0/width;
// 		        c_im = (row - height/2.0)*4.0/width;
// 		        x = 0, y = 0;
// 		        iteration = 0;
// 		        while (x*x+y*y <= 4 && iteration < maximum) {
// 		        	x_new = 0;
// 		            x_new = x*x - y*y + c_re;
// 		            y = 2*x*y + c_im;
// 		            x = x_new;
// 		            iteration++;
// 		        }
// 		        if (iteration < maximum){
		        	
// 				stroke(255);
// 		        point(col, row);	
// 		        }else{
// 				stroke(0);
// 		        point(col, row);	
// 		        } 
// 		    }
// 		}
// }

// function nextIteration(){
// 	maximum+=1;
// 	mandelbrot();
// }
// function setup() {
//   createCanvas(300,300);
//   background(50);
//   var index = 0;
//   button = createButton('Next Iteration');
//   button.mousePressed(nextIteration);
// }

// function draw() {
	
  
// }