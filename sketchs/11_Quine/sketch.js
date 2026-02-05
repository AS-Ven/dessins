let code = "This is a quine (conceptually)";
function setup() { createCanvas(windowWidth, windowHeight); }
function draw() {
  background(0);
  fill(0, 255, 0);
  textSize(14);
  text("function setup() {\n  createCanvas(windowWidth, windowHeight);\n}\n// ... recursive ...", 50, 50);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }