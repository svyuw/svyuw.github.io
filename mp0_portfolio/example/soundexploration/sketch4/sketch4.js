let circles = [];
let hue = 0;
var fade;
var fadeAmount = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  fade = 1;
}

function draw() {
  clear();
  background(0);
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].show();
  }
  if (mouseIsPressed) {
    circles.push(new Circle(mouseX, mouseY));
  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(5, 20);
    this.fade = 1;
  }

  update() {
    if (this.radius < 50) {
      this.radius += 0.5;
    }
  }

  show() {
    hue = (hue + .002) % 360;
    fill(hue, 100, 100, this.fade);
    stroke(hue, 100, 100, this.fade);
    ellipse(this.x, this.y, this.radius, this.radius);
    this.fade -= 0.004;
  }
}