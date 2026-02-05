function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  loadPixels();
  for (let x = 0; x < width; x+=5) {
    for (let y = 0; y < height; y+=5) {
      let i = 4 * (y * width + x);
      let r = x / width * 255;
      let g = y / height * 255;
      let b = ((x+y) / (width+height)) * 255;
      
      // Manual simple fill for speed in loop
      fill(r, g, b);
      noStroke();
      rect(x, y, 5, 5);
    }
  }
  noLoop();
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }