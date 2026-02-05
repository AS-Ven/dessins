function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(240);
  let s = 100;
  for(let x=0; x<width; x+=s) {
    for(let y=0; y<height; y+=s) {
      push();
      translate(x+s/2, y+s/2);
      if((x/s + y/s)%2 == 0) rotate(PI/4);
      rectMode(CENTER);
      fill(100, 50, 150);
      rect(0, 0, s*0.6, s*0.6);
      pop();
    }
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }