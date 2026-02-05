let shapes = [];
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  let x = random(width), y = random(height), r = random(10, 50);
  let valid = true;
  for(let s of shapes) {
    if(dist(x,y,s.x,s.y) < r + s.r) { valid = false; break; }
  }
  if(valid) {
    shapes.push({x,y,r});
    fill(random(255), 100, 100);
    circle(x,y,r*2);
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }