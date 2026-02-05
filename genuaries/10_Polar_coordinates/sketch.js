function setup() { createCanvas(windowWidth, windowHeight); noFill(); stroke(255); background(0); }
function draw() {
  translate(width/2, height/2);
  beginShape();
  for(let a=0; a<TWO_PI*5; a+=0.01) {
    let r = 200 * cos(4*a + frameCount*0.01);
    vertex(r*cos(a), r*sin(a));
  }
  endShape();
  background(0, 10);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); background(0); }