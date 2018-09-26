// Canvas metadata
var canvas;
var bgColor;

// text elements
var greeting;

// Object elements
var colorButton;
var ellipseSlider;
var inp;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");

  bgColor = 25;

  homePage();
}

function homePage() {
  greeting = createElement('h1', 'Abandon all hope ye who enter here');
  greeting.position(CENTER);

  colorButton = createButton("Change color");
  colorButton.mouseClicked(randomColor);

  ellipseSlider = createSlider(0, 255, 100);

  inp = createInput('');
  inp.input(inputEvent);
}

function draw() {
  background(bgColor);

  var val = ellipseSlider.value();
  ellipse(width/2, height/2, val, val);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function randomColor() {
  bgColor = random(0, 255);
}

function inputEvent() {
  username.html(this.value());
}
