// https://p5js.org/reference/#/p5/noise
var slider;
var noiseScale = 0.02;
var heigthOffset = 0;
var b = 0;
function setup() {
	createCanvas(600, 600);
	background(0);
	slider = createSlider(0, 200, 13, PI);
	slider.position(20, 20);


	// 	for (var y = -100; y <= height; y += 15){
	// 		// var y = -100;
	// 	for (var x = 0; x < width; x++) {
	// 		// for (var y = -100; y <= height; y += 60) {
	// 			var noiseVal = noise((y + x) * noiseScale, noiseScale);
	// 			stroke(noiseVal* 255);
	// 			line(x, noiseVal * 100 +  heigthOffset, x, height);
	// 		// }

	// 	}
	// 		heigthOffset += 40;
	// }

}

function draw() {
	var s = slider.value();
	frameRate(s);
	background(0);
	for (var y =0; y <= 1; y += 1) {
 		for (var x = 0; x < width; x+=2) {
			// for (var y = -100; y <= height; y += 60) {
			var noiseVal = noise((y + x) * noiseScale, noiseScale * b/19);
			stroke(noiseVal * 255);
			// line(x, noiseVal * 100 + heigthOffset, x, 200);
			
			// }

			 ellipse(x, (sin(x/(180)+PI) * 100 + (noiseVal *100)) +300,7,7);
			 //print(s)
			b+=10;
		}
		
		heigthOffset += 40;
	}
	heigthOffset =0;
}