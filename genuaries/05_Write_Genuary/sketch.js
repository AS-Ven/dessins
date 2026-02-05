function setup() { createCanvas(windowWidth, windowHeight); textAlign(CENTER, CENTER); textSize(min(width,height)*0.2); }
function draw() {
  background(240);
  let txt = 'Genuary';
  translate(width/2, height/2);
  for(let i=0; i<10; i++) {
    fill(0, 100 - i*10);
    text(txt, i*2, i*2);
  }
  fill(0);
  text(txt, 0, 0);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }