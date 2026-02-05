function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(255);
  noFill(); stroke(0);
  beginShape();
  for(let i=0; i<100; i++) {
    curveVertex(random(width), random(height));
  }
  endShape();
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }