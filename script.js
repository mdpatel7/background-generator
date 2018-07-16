var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

button.addEventListener("click",randomColorGenerator);

function randomColorGenerator(){
	var letters = '0123456789ABCDEF';
	col1 = '#';
	col2 = '#';
	for(var i = 0; i < 6; i++){
		col1 = col1 + letters[Math.floor(Math.random() * 16)]; 
		col2 = col2 + letters[Math.floor(Math.random() * 16)]; 
	}
	body.style.background = 
	"linear-gradient(to right, " 
	+ col1
	+ ", " 
	+ col2
	+ ")";

	css.textContent = body.style.background + ";";
}
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

