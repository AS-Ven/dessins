function setup() { createCanvas(windowWidth, windowHeight, WEBGL); }
function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  box(100);
  translate(150, 0, 0);
  box(50);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }