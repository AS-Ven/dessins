function setup() { createCanvas(windowWidth, windowHeight); noLoop(); }
function draw() {
  background(10, 10, 50);
  fill(20, 20, 80);
  for(let x=0; x<width; x+=50) {
    let h = random(100, height/2);
    rect(x, height-h, 50, h);
    fill(255, 255, 0);
    for(let by=height-h+10; by<height; by+=20) {
      if(random() > 0.5) rect(x+10, by, 5, 10);
      if(random() > 0.5) rect(x+30, by, 5, 10);
    }
    fill(30);
  }
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }