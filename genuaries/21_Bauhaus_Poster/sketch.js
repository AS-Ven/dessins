function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(240);
  let palette = ['#E30022', '#FFF000', '#0000FF'];
  fill(random(palette));
  rect(100, 100, 200, 400);
  fill(random(palette));
  circle(400, 200, 150);
  stroke(0); strokeWeight(10);
  line(0, 500, width, 100);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }