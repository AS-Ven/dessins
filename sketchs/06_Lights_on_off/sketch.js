let on = true;
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(on ? 240 : 20);
  fill(on ? 20 : 240);
  circle(width/2, height/2, 100);
  fill(on ? 100 : 200);
  textAlign(CENTER);
  text("Click to toggle", width/2, height/2 + 80);
}
function mousePressed() { on = !on; }
function windowResized() { resizeCanvas(windowWidth, windowHeight); }