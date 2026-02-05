function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(255);
  let s = 30;
  for(let y=50; y<height-50; y+=s) {
    for(let x=50; x<width-50; x+=s) {
      let chaos = map(y, 0, height, 0, 10);
      push();
      translate(x + random(-chaos, chaos), y + random(-chaos, chaos));
      rotate(random(-chaos, chaos) * 0.1);
      rect(0, 0, s-2, s-2);
      pop();
    }
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }