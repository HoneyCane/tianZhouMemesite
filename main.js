// Canvas metadata
var canvas;

// text elements
var greeting;
var exposition;

// Object elements
var opt1Button;
var opt2Button;
var memeButton;
var volumeSlider;

// Audio data
var WANOMusic;

// visual images
var WANOPhoto;
var guyLookingBackPhoto;

function preload() {
  WANOMusic = loadSound("assets/WANO-FULL-INSTRUMENTAL.mp3");
  WANOPhoto = loadImage("assets/We_Are_Number_One.png");
  guyLookingBackPhoto = loadImage("assets/guyLookingBack.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");

  background(0);

  // allocate the text elements
  greeting = createElement("h1");
  exposition = createP();

  // allocate the interactive elements, seperated by new lines
  memeButton = createButton();
  createElement("br");
  opt1Button = createButton();
  createElement("br");
  opt2Button = createButton();
  createElement("br");
  volumeSlider = createSlider(0, 100, 50);

  homePage();
}

// the beginning of the narrative
function homePage() {
  memeButton.hide();
  volumeSlider.hide();

  greeting.html("Abandon all hope, ye who enter here");
  exposition.html("Ahead lies the allegory of hell told through the medium of memes");

  opt1Button.html("Screw you! I'm entering anyways");
  opt1Button.mouseReleased(limbo);

  opt2Button.html("Get me outta here!");
  opt2Button.mouseReleased(remove);
}

// -----------------------------------------------------------------------------
// the first circle of hell
function limbo() {
  greeting.html("Welcome to Limbo");
  exposition.html("The memes that were never actually intended to become memes reside here");

  memeButton.html("Who's that over there?");
  memeButton.mouseReleased(wano);
  memeButton.show();

  opt1Button.html("Quickly move along and avoid eye contact");
  opt1Button.mouseReleased(lust);

  opt2Button.hide();
}

// handles We Are Number One's images and music
function wano() {
  exposition.html("RIP in peace Stefán Karl Stefánsson");

  opt1Button.html("Move along");

  memeButton.hide();

  volumeSlider.input(volumeChanged);
  volumeSlider.show();

  background(WANOPhoto);
  if (!WANOMusic.isPlaying()) {
    WANOMusic.play();
  }
}

// -----------------------------------------------------------------------------
// the second circle of hell
function lust() {
  WANOMusic.stop();
  volumeSlider.hide();
  background(guyLookingBackPhoto);

  greeting.html("Bienvenido a Lust");
  exposition.html("As the lovers drifted into self-indulgence and were carried sway by their passions, so now they drift for ever. The bright, voluptuous sin is now seen as it is – a howling darkness of helpless discomfort");

  // memeButton.html(""); // TODO: add interactivity to lust
  memeButton.hide();

  opt1Button.html("This is a christian server! Next!");
  opt1Button.mouseReleased(gluttony);

  opt2Button.hide();
}

// -----------------------------------------------------------------------------
// the third circle of hell
function gluttony() {
  background(125); // TODO: find gluttony background

  greeting.html("Willkommen zu Gluttony");
  exposition.html("Memes which include not only overindulgence in food and drink, but also other kinds of addiction");

  // memeButton.html(""); // TODO: add interactivity to gluttony
  memeButton.hide();

  opt1Button.html("DLC not included");
  // opt1Button.mouseReleased(lust); // TODO: add greed

  opt2Button.hide();
}

// -----------------------------------------------------------------------------
function draw() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function volumeChanged() {
  masterVolume(volumeSlider.value() / 100);
}
