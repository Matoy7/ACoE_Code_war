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

	//ALGORITHM CODE
	var plan = [
	'glider'		
	];
	var planIndex = 0;

	function cb(data) {
		var pixels = [];

		if (plan[planIndex] === 'glider') {
			pixels = tryPlaceGlider(data);
		}
		if (pixels.length > 0) {
			planIndex = (planIndex + 1) % plan.length;
		}
		return pixels;
	}


	function tryPlaceGlider(data) {
		var pixels = [];
		var r, c;		

		c = Math.floor(Math.random() * (data.cols - 2));
		r = 0;
if (data.budget >= 36) {
pixels.push([c+0, r+0]);
pixels.push([c+0, r+1]);
pixels.push([c+0, r+2]);
pixels.push([c+1, r+0]);
pixels.push([c+1, r+10]);
pixels.push([c+1, r+11]);
pixels.push([c+2, r+1]);
pixels.push([c+2, r+8]);
pixels.push([c+2, r+9]);
pixels.push([c+2, r+10]);
pixels.push([c+2, r+12]);
pixels.push([c+3, r+3]);
pixels.push([c+3, r+4]);
pixels.push([c+3, r+7]);
pixels.push([c+3, r+8]);
pixels.push([c+4, r+4]);
pixels.push([c+5, r+8]);
pixels.push([c+6, r+4]);
pixels.push([c+6, r+5]);
pixels.push([c+6, r+9]);
pixels.push([c+7, r+3]);
pixels.push([c+7, r+5]);
pixels.push([c+7, r+7]);
pixels.push([c+7, r+8]);
pixels.push([c+8, r+3]);
pixels.push([c+8, r+5]);
pixels.push([c+8, r+8]);
pixels.push([c+8, r+10]);
pixels.push([c+8, r+11]);
pixels.push([c+9, r+2]);
pixels.push([c+9, r+7]);
pixels.push([c+9, r+8]);
pixels.push([c+10, r+2]);
pixels.push([c+10, r+3]);
pixels.push([c+11, r+2]);
pixels.push([c+11, r+3]);
}







		return pixels;
	}

})();
