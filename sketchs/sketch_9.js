// Variation 9 : Changement de l'angle A1
let NP=480, PI = Math.PI;
let K1=6,N=32,K=16,H=5,R1=NP*.36,R=NP*.14,RR=.9;
let DX=NP/2,DY=NP/2,A1=PI/6,AD=PI/4; // A1 changé de 0 à PI/6
let CX,CY,R2,R3;

// ----------------------------------------------------

K1=6
N=22
K=15
H=28
R1=NP*.9
R=NP*.35
RR=.78

// ----------------------------------------------------
function setup() 
{
  INIT({svg:true});

  for (let I1 = 0; I1 < N; I1++) {
    R2 = 1.1 * R1*pow(RR,I1);
    R3 = R*pow(RR,I1);
    
    CX = 3 * DX+R2*cos(2*PI*I1/K1+A1);
    CY = 1.5* DY+R2*sin(2*PI*I1/K1+A1);
    
    GOSUB_ETOILES_REGULIERES();
    
  }
  
  TRACE();
}

// ----------------------------------------------------
function GOSUB_ETOILES_REGULIERES()
{
  for (let I = 0; I < K; I++) {
    let X = int(CX+R3*cos(2*I*H*PI/K+AD));
    let Y = int(CY+R3*sin(2*I*H*PI/K+AD));
    if (I == 0) LPRINT(`M${X},${Y}`);
    if (I > 0) LPRINT(`D${X},${Y}`);
  }
}