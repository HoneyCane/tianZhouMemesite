var fr = 60; // FPS

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  frameRate(fr);
}

function draw() {
  background(200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
