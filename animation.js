var box = document.getElementById("animation1");
var grouch = document.getElementById("animation3");
var xpos = 0;
var ypos = 0;
var xstep = 1;
var ystep = 1;
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
     grouch.style.top = (ypos + 700) + 'px';
   grouch.style.left = xpos + 'px';
}
