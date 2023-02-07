let song;

function setup() {
  song = loadSound('beyourgirl.mp3');
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(350, 25, 100);
  text("click me to party!", width / 2, height / 2);
  const inc = height/100;
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(350, 25, 100);
    text("click me to party!", width / 2, height / 2);
  } else {
    song.play();
    }
  }

function draw() {
  let h = map(mouseX, 0, width, 0, 360);
  if (song.isPlaying()) {
    background(h, 90, 90);
  }
}



