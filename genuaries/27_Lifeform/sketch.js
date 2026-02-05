let t=0;
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0);
  translate(width/2, height/2);
  noStroke(); fill(100, 255, 100);
  beginShape();
  for(let a=0; a<TWO_PI; a+=0.1) {
    let r = 100 + 30*noise(cos(a)+1, sin(a)+1, t);
    vertex(r*cos(a), r*sin(a));
  }
  endShape(CLOSE);
  t+=0.05;
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }