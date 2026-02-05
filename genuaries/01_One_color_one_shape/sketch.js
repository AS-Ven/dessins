function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}
function draw() {
  background(240);
  fill(255, 69, 0);
  noStroke();
  let s = min(width, height) * 0.5;
  circle(width/2, height/2, s);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }