function setup() {
    createCanvas(windowWidth, windowHeight);
    background(300);
  
    for (let i = 0; i < 700; i++) {
      noStroke();
      fill(random(255), random(255), random(255));
      ellipse(random(width), random(height), random(50, 150),random(50, 150));
    }
    
     for (let i = 0; i < 30; i++) {
        fill(random(255), random(255), random(255));
        rect(random(width), random(height), random(50, 150),random(50, 150));
     }
    
    for (let i = 0; i < 30; i++) {
      fill(random(255), random(255), random(255));
      triangle(random(width), random(height), random(width),random(height), random(width), random(height));
    }
    
    
    //heart
    fill(300);
    translate(width / 2, height / 2);
    strokeWeight(0.1);
    scale(30);
    beginShape();
    for (let t = 0; t < TWO_PI; t += 0.01) {
      let x = 5*pow(sin(t),3);
      let y = -(4*cos(t) - 2*cos(2*t) - cos(3*t));
      vertex(x,y);  
    }
    endShape(CLOSE);
  
  }