let angle = 0; 
let spacing = 100; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER); 
  textSize(100); 
  angleMode(DEGREES); 
}

function draw() {
  background("#f2e9e4"); 

  
  let circleSize = map(mouseY, 0, height, 20, 60); 

  
  for (let x = 0; x <= width; x += spacing) {  
    for (let y = 0; y <= height; y += spacing) { 
      
      fill(150, 200, 250, 100); 
      noStroke();
      ellipse(x, y, circleSize); 

      
      stroke(100, 150, 200);
      strokeWeight(2);
      line(x - spacing / 2, y, x + spacing / 2, y); 
      line(x, y - spacing / 2, x, y + spacing / 2); 
    }
  }

 
  push();
  translate(width / 2, height / 2); 
  rotate(angle); 
  angle += 1; 

  fill(random(255), random(255), random(255)); 
  text("CHUNWEI", 0, 0); 
  pop();
}