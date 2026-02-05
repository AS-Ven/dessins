function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0);
  fill(0, 255, 0);
  rect(100, 100, 200, 200);
  if(frameCount % 10 == 0) {
    filter(POSTERIZE, 3);
    let slice = get(0, random(height), width, 10);
    image(slice, random(-10, 10), random(height));
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }