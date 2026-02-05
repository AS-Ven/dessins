function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(200, 220, 200);
  for(let i=0; i<50; i++) {
    fill(100, 150+random(50), 100, 150);
    noStroke();
    let r = random(20, 80);
    circle(random(width), random(height), r);
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }