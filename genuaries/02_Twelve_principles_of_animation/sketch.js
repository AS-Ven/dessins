let y = 0, speed = 0, gravity = 0.5;
function setup() { createCanvas(windowWidth, windowHeight); y = height/2; }
function draw() {
  background(240);
  speed += gravity;
  y += speed;
  if (y > height - 50) { y = height - 50; speed *= -0.8; }
  
  let stretch = map(abs(speed), 0, 20, 1, 1.3);
  let squash = 1/stretch;
  
  fill(50, 150, 255);
  noStroke();
  ellipse(width/2, y, 100 * squash, 100 * stretch);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }