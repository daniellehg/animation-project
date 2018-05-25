var box = document.getElementById("animation1");
var grouch = document.getElementById("animation3");
var xpos = 0;
var ypos = 0;
var xstep = 1;
var ystep = 1;

container.addEventListener("click", moveGiorvi);

function moveGiorvi(event) {
    var xPosition = event.clientX;
	var yPosition = event.clientY;
	grouch.style.left = xPosition + "px";
	grouch.style.top = yPosition + "px";
}

var id = setInterval(frame, 5);
function frame() {
    if (xpos > 400 || xpos < 0) {
        xstep = -xstep;
    }
     if (ypos > 400 || ypos < 500) {
        ystep = -ystep;
    }

    xpos = xpos + xstep;
    ypos = ypos + ystep;
    box.style.top = ypos + 'px';
    box.style.left = xpos + 'px';


}
