function setup() {
  noCanvas();
  let container = createDiv();
  container.style('display', 'grid');
  container.style('grid-template-columns', 'repeat(10, 1fr)');
  for(let i=0; i<100; i++) {
    let d = createDiv();
    d.style('height', '50px');
    d.style('background', 'hsl('+random(360)+', 70%, 50%)');
    container.child(d);
  }
}