function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(20);
  translate(width/2, height/2);
  let phi = (sqrt(5) + 1) / 2;
  let len = min(width, height) * 0.45;
  for (let i = 0; i < 1000; i++) {
    let r = map(i, 0, 1000, 0, len);
    let angle = i * 2 * PI / (phi * phi);
    let x = r * cos(angle);
    let y = r * sin(angle);
    fill(255, 200, 100);
    noStroke();
    circle(x, y, map(i,0,1000, 2, 8));
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }