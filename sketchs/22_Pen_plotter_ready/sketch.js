function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(255);
  stroke(0); noFill();
  let step = 10;
  for(let y=50; y<height-50; y+=step) {
    beginShape();
    for(let x=50; x<width-50; x+=step) {
      vertex(x, y + noise(x*0.01, y*0.1)*50);
    }
    endShape();
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }