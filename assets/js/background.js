var canvas = document.getElementById("background-canvas");
var ctx = canvas.getContext("2d");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

var rects = new Array();
var totalRects = 15;

for (var i = 0; i < totalRects; i++) {
  createNewRect();
}

/* Load */
window.onload = function() {

}

/* Loop */
setInterval(loop, 1000/60);
function loop() {
  /* Assign canvas size */
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  /* Updates */
  updateSquares();

  /* Draws */
  drawSquares();
}

/* Updates all squares */
function updateSquares() {
  for (var i = 0; i < rects.length; i++) {
    rects[i].update();
  }
}

/* Draws all squares */
function drawSquares() {
  for (var i = 0; i < rects.length; i++) {
    rects[i].draw();
  }
}

function createNewRect() {
  var rect = {
    size: Math.floor(Math.random() * 200),
    speed: Math.floor(Math.random() * 5) + 3,
    x: -200 - Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * canvas.height),

    draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#f7f7f7";
      ctx.rect(this.x, this.y, this.size, this.size);
      ctx.fill();
    },

    update() {
      this.x += this.speed;

      if (this.x > canvas.width) {
        createNewRect();
        rects.splice(rects.indexOf(this), 1);
      }
    }
  }

  rects.push(rect);
}
