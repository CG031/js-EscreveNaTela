function setup() {
  createCanvas(600 , 600);
  background("black");
} 
//desenha o tamanho da tela e pinta a tela

function draw() {
  
  stroke ("pink");
  fill ("silver");
  
 // console.log(mouseIsPressed)
  if(mouseIsPressed){rect (mouseX, mouseY, 20, 30)};
} 
//só funciona quando o mouse está pressionado 