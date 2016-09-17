//IMPROVE THIS CODE

(function() {

	//REGISTER ARMY
	setTimeout(function registerArmy() {
		window.registerArmy({
			name: 'USER',
			icon: 'user',
			cb: cb
		});
	}, 0);
//   -------------------------------------------------- ARRAY OF SHAPES ------------------------------------------------------------

//-------------------- ATTACK

var glider = [[0,-1],[1, 0],[-1, 1],[0, 1],[1, 1]];

var lightweight_spaceship_horizontal = [[-1, -2],[2, -2],[-2, -1],[-2, 0],[2, 0],[-2, 1],[-1, 1],[0, 1],[1, 1]];
var lightweight_spaceship_vertical = [[-2, -1],[-2, 2],[-1, -2],[0, -2],[0, 2],[1,-2],[ 1,-1],[1, 0],[1, 1]];

var ship=[[-1,-4],[0,-4],[1,-4],[2,-4],[3,-4],[4,-4],[-3,-3],[-2,-3],[4,-3],[-5,-2],[-4,-2],[-2,-2],[4,-2],[-1,-1],[3,-1],[1,0],[1,1],[2,1],[0,2],[1,2],[2,2],[3,2],[0,3],[1,3],[3,3],[4,3],[2,4],[3,4]];
var airforce=[[0,-7],[-1,-6],[1,-6],[0,-5],[-2,-3],[-1,-3],[0,-3],[1,-3],[2,-3],[-3,-2],[3,-2],[5,-2],[6,-2],[-4,-1],[-2,-1],[-1,-1],[3,-1],[5,-1],[6,-1],[-4,0],[-2,0],[1,0],[3,0],[-7,1],[-6,1],[-4,1],[0,1],[1,1],[3,1],[-7,2],[-6,2],[-4,2],[2,2],[-3,3],[-2,3],[-1,3],[0,3],[1,3],[-1,5],[-2,6],[0,6],[-1,7]];


//--------------------DEFENCE

var bigs=[[1,-3],[2,-3],[0,-2],[3,-2],[0,-1],[2,-1],[3,-1],[-3,0],[-2,0],[0,0],[-3,1],[0,1],[-2,2],[-1,2]];
var acron=[[-2,-1],[0,0],[-3,1],[-2,1],[1,1],[2,1],[3,1]];

var beehive=[[-1,-1],[0,-1],[-2,0],[1,0],[-1,1],[0,1]];

var vacum=[[-23,-21],[-22,-21],[2,-21],[3,-21],[-23,-20],[-22,-20],[2,-20],[0,-19],[2,-19],[-9,-18],[-8,-18],[0,-18],[1,-18],[-24,-17],[-23,-17],[-9,-17],[-7,-17],[-24,-16],[-23,-16],[-9,-16],[-7,-16],[-6,-16],[-8,-15],[-7,-15],[-8,-14],[20,-13],[21,-13],[-8,-12],[20,-12],[21,-12],[-8,-11],[-7,-11],[-24,-10],[-23,-10],[-9,-10],[-7,-10],[-6,-10],[8,-10],[12,-10],[-24,-9],[-23,-9],[-9,-9],[-7,-9],[7,-9],[13,-9],[21,-9],[22,-9],[-9,-8],[-8,-8],[7,-8],[21,-8],[22,-8],[7,-7],[8,-7],[12,-7],[-23,-6],[-22,-6],[9,-6],[10,-6],[11,-6],[-23,-5],[-22,-5],[9,-4],[10,-4],[11,-4],[7,-3],[8,-3],[12,-3],[7,-2],[21,-2],[22,-2],[7,-1],[13,-1],[21,-1],[22,-1],[8,0],[12,0],[20,2],[21,2],[20,3],[21,3],[13,8],[14,8],[13,9],[15,9],[23,9],[24,9],[15,10],[23,10],[24,10],[13,11],[14,11],[15,11],[-2,12],[0,12],[-3,13],[-2,13],[-1,13],[-3,14],[-2,14],[-1,14],[-3,15],[13,15],[14,15],[15,15],[1,16],[3,16],[15,16],[-3,17],[-2,17],[3,17],[13,17],[15,17],[-8,18],[-7,18],[-2,18],[2,18],[3,18],[13,18],[14,18],[-9,19],[-7,19],[0,19],[-9,20],[-10,21],[-9,21]];

	//ALGORITHM CODE

	var plan = [
		{'shape':lightweight_spaceship_vertical,c:20,r:10,flipHorizontal:true,flipVertical:true},
		{'shape':lightweight_spaceship_vertical,c:380,r:15,flipHorizontal:true,flipVertical:true},
		{'shape':lightweight_spaceship_vertical,c:360,r:15,flipHorizontal:false,flipVertical:true},
		{'shape':lightweight_spaceship_vertical,c:40,r:10,flipHorizontal:false,flipVertical:true},
	];
	var planIndex = 0;

	function cb(data) {
		var pixels = [];
		
		//console.log('ship='+ship);
		//console.log('beehive='+beehive);
		
		pixels = tryPlacePattern(data,plan[planIndex])		
		
		if (pixels.length > 0){			
			planIndex = (planIndex+1)%plan.length;			
		}
		return pixels;
	}


	function tryPlacePattern(data, patternArr) {
		var pixels = [];
		
		//console.log('shape:'+patternArr.shape);
		
		if (data.budget == getPatternSize(patternArr.shape)) {
						
			if (data.budget >= getPatternSize(patternArr.shape)) {
				pixels=insertPatternByArray(patternArr);
			}
			console.log(pixels);
		}
		return pixels;
	}

	function insertPatternByArray(pattern){
		retArray=[];
		
		//cols - 0 to 400, row - o to 100
		var col = pattern.c;
		var row = pattern.r;
		
		var flipH = pattern.flipHorizontal? -1:1;
		var flipV = pattern.flipVertical? -1:1;
		
		console.log('pattern shep'+pattern.shape);
		
		for (i in pattern.shape){

			retArray.push([col+flipH * pattern.shape[i][0],row-flipV *pattern.shape[i][1]]);
		}
		return retArray;
	}

	function getPatternSize(pixels){
		return pixels.length;
	}



})();
