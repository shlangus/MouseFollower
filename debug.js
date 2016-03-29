//Write message at the top of canvas
function writeMessage(message) {
    ctx.save();
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, 10, 25);
    ctx.restore();
}

//Simply draw line from point (x1,y1) to (x2,y2)
function drawLine(x1, y1, x2, y2) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = "#0000FF";
    ctx.stroke();
    ctx.restore();
}
