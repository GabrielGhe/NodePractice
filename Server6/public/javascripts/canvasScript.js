var imageView;
var context;
var started = false;

$(document).ready(function(){
	//Variables
	imageView = $("#imageView");
	context = imageView[0].getContext('2d');

	//Events
	
	/**
	 * Mousemove
	 * @param  {Event} e 
	 */
	imageView.mousemove(function(e){
		var x = e.offsetX
		var y = e.offsetY;

		if(!started){
			//place initial position
			context.beginPath();
			context.moveTo(x, y);
			started = true;
		} else {
			//draw
			context.lineTo(x, y);
			context.stroke();
		}
	});
});