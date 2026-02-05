function setup() { createCanvas(windowWidth, windowHeight); blendMode(EXCLUSION); noLoop(); }
function draw() {
  background(255);
  fill(255, 0, 0);
  circle(width/2 - 50, height/2, 200);
  fill(0, 0, 255);
  circle(width/2 + 50, height/2, 200);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }