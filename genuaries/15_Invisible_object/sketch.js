function setup() { createCanvas(windowWidth, windowHeight); drawingContext.shadowBlur = 50; drawingContext.shadowColor = 'black'; }
function draw() {
  background(255);
  noStroke();
  fill(255);
  circle(mouseX, mouseY, 100);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }