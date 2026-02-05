// Variation 28 : Augmentation de K1 (branches)
let NP=520, PI = Math.PI;
let K1=11,N=32,K=16,H=5,R1=NP*.36,R=NP*.14,RR=.9; // K1 changé de 9 à 11
let DX=NP/2.2,DY=NP/1.8,A1=-PI/6,AD=0;
let CX,CY,R2,R3;

// ----------------------------------------------------

K1=11 // Changé ici aussi
N=15
K=20
H=10
R1=NP*.85
R=NP*.45
RR=.82

// ----------------------------------------------------
function setup() 
{
  INIT({svg:true});

  for (let I1 = 0; I1 < N; I1++) {
    R2 = 1.3 * R1*pow(RR,I1);
    R3 = R*pow(RR,I1);
    
    CX = 3 * DX+R2*cos(2*PI*I1/K1+A1);
    CY = 1.8 * DY+R2*sin(2*PI*I1/K1+A1);
    
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