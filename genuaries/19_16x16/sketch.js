function setup() { createCanvas(windowWidth, windowHeight); noLoop(); noSmooth(); }
function draw() {
  let s = min(width/16, height/16);
  for(let x=0; x<16; x++) {
    for(let y=0; y<16; y++) {
      fill(random(255), random(255), random(255));
      noStroke();
      rect(x*s, y*s, s, s);
    }
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }