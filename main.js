
canvas=document.getElementById("jeef");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue" ;
ctx.lineWidth=3;
ctx.arc(100, 100, 40, 0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black" ;
ctx.lineWidth=3;
ctx.arc(200, 100, 40, 0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red" ;
ctx.lineWidth=3;
ctx.arc(300, 100, 40, 0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="gold" ;
ctx.lineWidth=3;
ctx.arc(150, 150, 40, 0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green" ;
ctx.lineWidth=3;
ctx.arc(250, 150, 40, 0, 2*Math.PI );
ctx.stroke();

