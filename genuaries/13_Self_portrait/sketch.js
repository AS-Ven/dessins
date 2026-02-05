function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(220);
  translate(width/2, height/2);
  fill(255, 200, 150);
  ellipse(0, 0, 200, 250);
  fill(255);
  ellipse(-40, -20, 40, 30);
  ellipse(40, -20, 40, 30);
  fill(0);
  circle(-40, -20, 10);
  circle(40, -20, 10);
  noFill(); stroke(0); strokeWeight(3);
  arc(0, 50, 60, 40, 0, PI);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }