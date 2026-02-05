function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(0);
  stroke(255); noFill();
  let s = 40;
  for(let x=50; x<width-50; x+=s) {
    for(let y=50; y<height-50; y+=s) {
      push();
      translate(x+s/2, y+s/2);
      if(random() < 0.01) rotate(PI/20);
      rectMode(CENTER);
      rect(0, 0, s, s);
      pop();
    }
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }