canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
Width_of_line = 1;
var mouseEvent = "empty";
var lpox, lpoy;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color = document.getElementById("color").value;
Width_of_line = document.getElementById("wol").value;
mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
     mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;
if(mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = Width_of_line;
    ctx.moveTo(lpox, lpoy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();
  }
 lpox = cpx;
 lpoy = cpy;
}

function clear_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}


