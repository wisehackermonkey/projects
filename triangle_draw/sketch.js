var slider ;

/* changes color of object to random color*/
function randomFill(slow) {
    return fill(random(0, 255), random(0,255), random(0, 255));
}

/*if check is 1 than delay runs else not
*/
function delay(check){
    var i, x;
    
    if (check) {
        for (i = 0; i < 500000; i += 1) {
            x = Math.sqrt(300);
        }
    }
  
  
}

/*
calculates a rotation on a vector corridantes
https://stackoverflow.com/questions/17410809/how-to-calculate-rotation-in-2d-in-javascript
*/
function rotateVector(cx, cy, x, y, angle) {
  var result = [0,0];
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
        result[0] = Math.round(nx);
        result[1] = Math.round(ny);
        //console.log(result);
    return result;
}


/*takes in a shape array where the points are stored 
as such
in the shape array that contains 
the points for the triangle
    a(0,1),b(2,3),c(4,5)
shape[0,1,   2,3,   4,5]
*/
function rotateShape(shape,Height,Width,angle){
    
    var midPointx, midPointy, x;
    var rotatedVector = [0,0];
    
    pointOfRotationX = Width/2;

    pointOfRotationY = Height/2;
    //iterate over the pairs of points

    for( x = 0; x <= 4; x+=2){

        rotatedVector = rotateVector(pointOfRotationX, pointOfRotationY, shape[x], shape[x+1], angle);

        shape[x] = rotatedVector[0];  //X or rotatedVector[0] = x
        shape[x+1] = rotatedVector[1]; //Y or rotatedVector[1] = y
   
    }
    
    return shape;
    
}





/*
returns an array with points for a
equilatral triangle
 ------b-------> x
|      /\
|     /  \
|    /    \
|   /      \
|  /        \
| a----------c
V
y
a = (0,        height )
b = ( width/2, 0)
c = ( width,   height)
*/

function triangleCalcPoints(originX,originY,Width,Height){
  var a_x,a_y,b_x,b_y,c_x,c_y;
  
  a_x = originX;
  a_y = Height +originY;
  
  b_x = (Width / 2) + originX;
  b_y = originY;
  
  c_x = Width + originX;
  c_y = Height + originY;
//         0   1   2   3   4   5
  return [a_x,a_y,b_x,b_y,c_x,c_y];
}



/*draws a triangle that has height, and width 
that starts at x,y = (originX,originY)
(originX,originY)
         ------b-------> x
        |      /\
        |     /  \
        |    /    \
        |   /      \
        |  /        \
        | a----------c
        V            (Width,Height)
*/
function drawTriangle(originX,originY,Width,Height,angle){
  
  var triAng = triangleCalcPoints(originX,originY,Width,Height);
  var rotatedTriangle = rotateShape(triAng,Width,Height,angle);
    
  triangle(rotatedTriangle[0], rotatedTriangle[1],
           rotatedTriangle[2], rotatedTriangle[3],
           rotatedTriangle[4], rotatedTriangle[5]);
}






function setup() {

    createCanvas(600, 600);
    background(50);

    
    
    slider = createSlider(0,180,0);
    slider.position(20,20);








    
    
    /*
    for(var i = 0; i < total; i++ ){
         x = 0;
        for(var j = 0; j < total; j++ ){
            drawTriangle(x,y,numTrianglesX,numTrianglesY,60); 
            x += numTrianglesX;
        }
       
        y += numTrianglesY;
        
    }
    */
}

function draw() {
    background(color(50,50,50,25));

    translate(width/2,height/2);

        var total  = 60;
    var x = 0, y = 0,a = 0;
    var numTrianglesX = Math.round(width /total);
    var numTrianglesY = Math.round(height /total);
for(var i = 0; i < 60; i++){
    x += numTrianglesX;
    a += slider.value();
    drawTriangle(x+0,y+0,numTrianglesX,numTrianglesY,0+a); 
fill(color(0,0,255)); 
drawTriangle(x+0,y+0,numTrianglesX,numTrianglesY,90+a); 
fill(color(0,255,255)); 
drawTriangle(x+0,y+0,numTrianglesX,numTrianglesY,180+a); 
fill(color(255,0,255)); 
drawTriangle(x+0,y+0,numTrianglesX,numTrianglesY,270+a); 
fill(color(111,11,111)); 
}
}