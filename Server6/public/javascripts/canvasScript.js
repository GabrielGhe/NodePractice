var imageView;
var context;
var started = false;

$(document).ready(function(){
	//Variables
	imageView = $("#imageView");
	context = imageView[0].getContext('2d');

	//Events
	
	//http://stackoverflow.com/questions/5751458/getting-correct-mouse-position-in-a-css-scaled-canvas
	

	/**
	 * Mousemove
	 * @param  {Event} e 
	 */
	imageView.mousemove(function(ev){
		var x = ev.pageX - imageView.offset().left;
		var y = ev.pageY - imageView.offset().top;

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