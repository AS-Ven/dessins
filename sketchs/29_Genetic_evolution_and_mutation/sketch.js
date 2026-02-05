let popu = [];
function setup() { createCanvas(windowWidth, windowHeight); for(let i=0; i<10; i++) popu.push({x: random(width), y: random(height)}); }
function draw() {
  background(0, 10);
  for(let p of popu) {
    p.x += random(-2, 2); p.y += random(-2, 2);
    fill(255); circle(p.x, p.y, 5);
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); background(0); }