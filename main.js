
var lastpositionofX= ""
var currentpositionofX =""
var lastpositionofY = ""
var currentpositionofY =""
var canvas = document.getElementById ("myCanvas") ;
ctx=canvas.getContext("2d")
var width = screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
var colour=""
var width_of_line=""
if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", mytouchstart) ;
function mytouchstart(e){
    colour= document.getElementById("inputcolour").value ;
    console.log(colour)
    width_of_line = document.getElementById("inputlinewidth").value;
    console.log(width_of_line)
    lastpositionofX=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove) ;
function mytouchmove(e){
    currentpositionofX =e.touches[0].clientX-canvas.offsetLeft;
    currentpositionofY =e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle= colour; 
        ctx.lineWidth=width_of_line;
        ctx.moveTo(lastpositionofX,lastpositionofY)
        ctx.lineTo(currentpositionofX,currentpositionofY);
        ctx.stroke();
    lastpositionofX=currentpositionofX;
    lastpositionofY=currentpositionofY;
}
function clear_area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}