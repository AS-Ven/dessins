function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(255);
  divide(0, 0, width, height, 4);
}
function divide(x, y, w, h, depth) {
  if(depth == 0) { 
    fill(random(255)); rect(x, y, w, h); 
    return; 
  }
  let n = int(random(2));
  if(n==0) {
    divide(x, y, w/2, h, depth-1);
    divide(x+w/2, y, w/2, h, depth-1);
  } else {
    divide(x, y, w, h/2, depth-1);
    divide(x, y+h/2, w, h/2, depth-1);
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }