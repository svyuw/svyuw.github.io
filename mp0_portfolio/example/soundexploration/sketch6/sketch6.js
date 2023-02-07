let mic, fft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  colorMode(HSB);
}

function draw() {
  background(255);
  let spectrum = fft.analyze();
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, 360);
    let s = map(spectrum[i], 0, 255, 100, 200);
    let b = map(spectrum[i], 0, 255, 100, 200);
    let h;
    if (spectrum[i] < 150) {
      h = map(spectrum[i], 0, 150, 200, 100);
    } else {
      h = map(spectrum[i], 150, 255, 50, 0);
    }
    fill(h, s, b);
    let r = map(spectrum[i], 0, 255, 20, 200);
    let x = width / 2 + r * cos(angle);
    let y = height / 2 + r * sin(angle);
    ellipse(x, y, r, r);
  }
}
