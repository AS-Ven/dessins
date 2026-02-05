function setup() { createCanvas(windowWidth, windowHeight); noLoop(); blendMode(MULTIPLY); }
function draw() {
  background(255);
  fill(255, 0, 0, 100); circle(width/2-50, height/2, 200);
  fill(0, 255, 0, 100); circle(width/2+50, height/2, 200);
  fill(0, 0, 255, 100); circle(width/2, height/2+80, 200);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }