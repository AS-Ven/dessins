let x, y;
function setup() { createCanvas(windowWidth, windowHeight); x=width/2; y=height/2; background(220); }
function draw() {
  stroke(0); strokeWeight(2);
  let d = int(random(4));
  let step = 10;
  if(d==0) x+=step; else if(d==1) x-=step; else if(d==2) y+=step; else y-=step;
  x = constrain(x,0,width); y = constrain(y,0,height);
  point(x,y);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); background(220); }