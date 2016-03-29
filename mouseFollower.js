//We need only 2 arguments - image source and canvas
function MouseFollower(imgSrc, canvas) {
    this.image = new Image();
    this.image.src = imgSrc;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    //Add mouse move event listener
    this.canvas.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
}

MouseFollower.prototype = {
    //Start position and angle
    x: 200, y: 200, angle: 0,
    //Speed of movement to the mouse pointer
    speed: 2,
    //Rotational speed
    rotateSpeed: 5,
    //Minimum distance between mouse pointer and bind point at which the object is moved
    sensetivity: 5,
    //It's must be an Image object, so use a constructor for properly initialize it
    image: null,
    //It's must be a canvas and corresponding context, they are initialize through constructor
    canvas: null, ctx: null,
    //You can change the bind point (the closest to the mouse pointer, point of object).
    //This values must be between 0 and 1, where
    // x = 0 - top edge,
    // x = 1 bottom edge,
    // y = 0 - left edge,
    // y = 1 - right edge
    bindOffsetX: 0.5, bindOffsetY: 0,

    mousePos: undefined,

    draw: function () {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(-this.angle + Math.PI);
        this.ctx.drawImage(this.image,
            -this.image.width * this.bindOffsetX, -this.image.height * this.bindOffsetY);
        this.ctx.restore();
    },
    move: function () {
        if (this.mousePos === undefined) {
            return;
        }
        var x = this.mousePos.x - this.x;
        var y = this.mousePos.y - this.y;
        if (Math.pow(x, 2) + Math.pow(y, 2) > Math.pow(this.sensetivity, 2)) {
            var mouseAngle = Math.atan2(x, y);
            this.x += Math.sin(mouseAngle) * this.speed;
            this.y += Math.cos(mouseAngle) * this.speed;
            var deltaAngle = mouseAngle - this.angle;
            if (deltaAngle > Math.PI) {
                deltaAngle += -(Math.PI * 2);
            }
            else if (deltaAngle < -Math.PI) {
                deltaAngle += Math.PI * 2;
            }
            this.angle += deltaAngle * this.rotateSpeed/100;
            if (Math.abs(this.angle) > Math.PI) {
                this.angle *= -1;
            }
        }
    },
    mouseMoveHandler: function (evt) {
        var rect = this.canvas.getBoundingClientRect();
        this.mousePos = {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
};
