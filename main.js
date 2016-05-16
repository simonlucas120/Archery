"use strict";

var target = document.getElementById("target");
var 	targetPosition=0;
var direction=2;


charset= moveTarget(){
	if (targetPosition > window.innerWidth-5000) {
		direction=-1;
	} 

if (targetPosition < 0) {
		direction=1;
}

	targetPosition += 10*direction;
	target.style.left= targetPosition + "px";

	
}

setInterval(moveTarget,1000/60)
