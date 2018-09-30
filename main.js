// Canvas metadata
var canvas;

// text elements
var greeting;

// Object elements
var colorButton;
var ellipseSlider;
var inp;

// Audio data
var WANOMusic;

// visual images
var WANOPhoto;

function preload() {
  WANOMusic = loadSound("assets/WANO-FULL-INSTRUMENTAL.mp3");
  WANOPhoto = loadImage("assets/We_Are_Number_One.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");

  homePage();
}

function homePage() {
  background(WANOPhoto);

  greeting = createElement('h1', 'Abandon all hope ye who enter here');

  colorButton = createButton("Enter anyways");
  colorButton.mouseClicked(startMusic);

  ellipseSlider = createSlider(0, 255, 100);

  // inp = createInput('');
  // inp.input(inputEvent);
}

function draw() {
  var val = ellipseSlider.value();
  fill(map(val, 0 , 255));
  ellipse(width/2, height/2, val, val);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function startMusic() {
  if (!WANOMusic.isPlaying()) {
    WANOMusic.play();
  }
}

// function inputEvent() {
//   username.html(this.value());
// }
