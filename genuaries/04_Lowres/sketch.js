function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(255);
  let s = 40;
  for(let x=0; x<width; x+=s) {
    for(let y=0; y<height; y+=s) {
      fill(random(255), random(255), random(255));
      noStroke();
      rect(x, y, s, s);
    }
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }