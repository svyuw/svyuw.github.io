function setup() {
    createCanvas(windowWidth, windowHeight);
    background(300);
    
    stroke(255, 194, 211);
    for (let i = 1; i <= 40; i++) {
      strokeWeight(i * 2);
  
      let lineX = i * 30;
      line(lineX, 0, lineX, height);
    }
    
  }
  
  
  function draw() {
    //back of hair
    noStroke();
    fill(257,34,93);
    ellipse(300, 220, 200, 250);
    
     //neck
    fill(230,158,158);
    rect(285, 260, 30, 70, 10);
    
    //face
    noStroke();
    fill(255,200,200);
    ellipse(300, 200, 150, 170);
    
    //front of hair
    noStroke();
    fill(257,34,93);
    ellipse(320, 140, 40, 70);
    ellipse(340, 140, 40, 60);
    
    //eyes
    fill(300);
    ellipse(340, 200, 40, 15);
    
    fill(300);
    ellipse(270, 200, 40, 15);
    
    fill(23,180,232);
    ellipse(350, 200, 20, 12);
    
    fill(23,180,232);
    ellipse(280, 200, 20, 12);
    
    //lips
    push();
    translate(110,40);
    fill('#e42e2e');
    noStroke();
    arc(175,200,50,20,PI,0);
    arc(225,200,50,20,PI,0);
  
  
    fill('#E21717');
    noStroke();
    arc(200,200,100,40,0,PI);
    pop();
    
    //shirt
    fill(156,242,182);
    rect(230, 320, 150, 300, 20, 15, 10, 5);
    
  }
  