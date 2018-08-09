Array.reduce = function(f,value){
	var i;
	for(i = 0; i < this.length; i +=1){
		value = f(this[i],value);
	}
	return value;
};




Array.init = function(SIZE, initial){
	var a =[],i;
	for(i = 0; i <SIZE; i+= 1){
		a[i] = initial;
	}
	return a;
};



Array.matrix = function(m,n, initial){
	var array,i,j,mat = [];
	for(i = 0; i < m; i+=1){
		array = [];
		for(j = 0; j < n; j+=1){
			array[j] = initial;
		}
		mat[i] = array;
	}
	return mat;
};






Array.identity = function(n){
	var i, mat = Array.matrix(n,n,0);
	for(i = 0; i < n; i += 1){
		mat[i][i] = 1;
	}
	return mat;
};


function Print(matrix){
	var i,z,printRows='';
	for(i = 0; i <= matrix.length-1; i++) {
	 for(z = 0; z <= matrix[i].length-1; z++) {
	  printRows+=matrix[z][i] + " ";
	  //EX "0 0 0 0 "
	 }
	 console.log(printRows);
	 printRows ='';
	 //clear row storage string
	}	
}

function multiply(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}


 	
var math = {
	value:0,
	cookies:0,
	array:[3,2,0,2,7,6],
	alt:[1,3,2,4,5,6,7,8,9],
	addition:function(num, cookies){
		if((typeof num === 'number') && (typeof cookies === 'number')){
			this.value = num +cookies;
		}else{
			this.value = 1;
		}
		console.log(this.value);
	},
	print:function(){
		var i;
		for(i in this){
			if(typeof this !== 'function'){
				console.log(i + ':' + this[i]);
			}			
		}
	},
	add:function(a,b){
		if(typeof a !== 'number' || typeof b !== 'number'){
			
			throw{
				name:'typeError',
				message:'Add needs numbers'
			};
			
		}
		return a+b;
	}
	
}





var add = function(a,b){
	return a+b;
}

var a = [[8, 3], 
		[2, 4]];
function matrixRotate(){
	var grid = [[8, 3], 
		[2, 4]];
var newGrid = [];
var rowLength = Math.sqrt(grid.length);
newGrid.length = grid.length

for (var i = 0; i < grid.length; i++)
{
    //convert to x/y
    var x = i % rowLength;
    var y = Math.floor(i / rowLength);

    //find new x/y
    var newX = rowLength - y - 1;
    var newY = x;

    //convert back to index
    var newPosition = newY * rowLength + newX;
    newGrid[newPosition] = grid[i];
}
return newGrid;
}



var cols = 10;
var rows = 10;
var boxSize = 30;

var colors = Array.matrix(cols,rows,0);
	
function setup() {
	createCanvas(600,600,WEBGL);
	
	for(var i = 0; i < cols; i+=1){
		for(var j = 0; j < rows; j+=1){
			colors[i][j] = random(255);
		}
	}
}

function draw() {
  
	for(var i = 0; i < cols; i+=1){
		for(var j = 0; j < rows; j+=1){
			var x = i * boxSize;
			var y = j * boxSize;
			stroke(0);
			
			fill(random(255));
			rect(x,y,boxSize,boxSize);
		}
	}	
	noLoop();
}