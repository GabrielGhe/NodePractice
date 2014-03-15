var imageView;
var context;
var tool;

$(document).ready(function(){
	//Variables
	imageView = $("#imageView");
	context = imageView[0].getContext('2d');
	tool = new pencil();

	//Events
	imageView.mousemove(cursorEvent);
	imageView.mousedown(cursorEvent);
	imageView.mouseup(cursorEvent);
	//http://stackoverflow.com/questions/5751458/getting-correct-mouse-position-in-a-css-scaled-canvas

	/**
	 * Does everything
	 */
	function cursorEvent(ev){
		var x = ev.pageX - imageView.offset().left;
		var y = ev.pageY - imageView.offset().top;
		var func = tool[ev.type];
		if(func){
			func(x, y);
		}
	}
});


/**
 * Pencil Object
 */
function pencil(){
	var tool = this;
	this.started = false;

	//Mouseup
	this.mouseup = function(x, y){
		if (tool.started) {
	      tool.mousemove(x, y);
	      tool.started = false;
	    };
	};

	//Mousedown
	this.mousedown = function(x, y){
		context.beginPath();
		context.moveTo(x, y);
		tool.started = true;
	};

	//mousemove
	this.mousemove = function(x, y){
		if (tool.started) {
	      context.lineTo(x, y);
	      context.stroke();
	    }
	};
}