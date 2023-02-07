let heartSize = 9000;
let maxSize = 20000;
let minSize = 800;
let growing = true;
let hue = 0;

function setup() {
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  translate(width/2, height/2);
  scale(heartSize/300);
  
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let x = 16 * pow(sin(a), 3);
    let y = 13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a);
    vertex(x, -y);
  }
  endShape(CLOSE);
  
  if (growing) {
    heartSize += 50;
  } else {
    heartSize -= 50;
  }
  
  if (heartSize >= maxSize) {
    growing = false;
  } else if (heartSize <= minSize) {
    growing = true;
  }
  
  hue = (hue + 1) % 360;
  fill(hue, 100, 100);
  stroke(hue, 100, 100);
}