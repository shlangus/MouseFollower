# MouseFollower
Simple js code for drawing some images into the canvas and makes them follow the mouse pointer

##Examples
See the example files: [http://shlangus.github.io/MouseFollower](http://shlangus.github.io/MouseFollower)

##Usage
First you need to include MouseFollowed.js file into your page. Just paste code below and correct path to the file if needed.
```
<script src="mouseFollower.js"></script>
```

Next you need to place the <canvas> into you page and get an object in you script:
```
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
```

Now you can create a MouseFollower object. Give an image source path and the canvas object to the MouseFollower conscructor:
```
var mouseFollower = new MouseFollower('iamge.png', canvas);
```

You can change some parameters of the MouseFollower object — check comments in source file

MouseFollower already listen mousemove event, so last thing that you need to do is create animation loop.
```
function animationLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        mouseFollower.draw();
        mouseFollower.move();
        requestId = requestAnimationFrame(animationLoop);
  }
```
  
Now you can start you animation by execute in your script this:
```
requestId = requestAnimationFrame(animationLoop);
```

You probably want to do this in some event handler, use example files for look how you can implement this.
