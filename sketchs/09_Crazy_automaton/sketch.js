let cells = [], w = 10;
function setup() { createCanvas(windowWidth, windowHeight); for(let i=0; i<width/w; i++) cells[i] = random() > 0.5 ? 1 : 0; background(0); }
function draw() {
  for(let i=0; i<cells.length; i++) {
    if(cells[i]) { fill(255); rect(i*w, frameCount%height, w, w); }
  }
  let next = [];
  for(let i=0; i<cells.length; i++) {
    let l = cells[(i-1+cells.length)%cells.length];
    let c = cells[i];
    let r = cells[(i+1)%cells.length];
    let rule = 30; 
    next[i] = (rule >> (l*4 + c*2 + r)) & 1;
  }
  cells = next;
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); background(0); }