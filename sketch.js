
let dvd=[];
let names=["/images/dvd_cyan.png",
  "/images/dvd_green.png",
  "/images/dvd_magenta.png",
  "/images/dvd_red.png",
  "/images/dvd_whte.png",
  "/images/dvd_yellow.png"];

let x = 500;let y = 100;
let dx = 2; let dy = 2;
let item=0;
let R=255;
let G=0;
let B=0;

function preload(){
  for(var i=0;i<names.length;i++){
    dvd[i]=loadImage(names[i]);
  }
}

function setup() {
  createCanvas(1290, 600);
}

function draw() {
  background(0);
  rect(x,y,100,50);
  fill(0,0,0);
  image(dvd[4],x,y,100,50);
  tint(R,G,B,255);
  x = x + dx;
  y = y + dy;
  edgeHandling();
}

function edgeHandling(){
  if(x <= 0 || x + 100>= width){
    dx = dx*-1;  
    item = Math.floor(Math.random() * 6);
    changeColor();
  }

  if(y+10<=0 || y+50>=height){
    dy = dy*-1;
    item = Math.floor(Math.random() * 6);
    changeColor();
  }
}

function changeColor(){
  R=Math.floor(Math.random()*255);
  G=Math.floor(Math.random()*255);
  B=Math.floor(Math.random()*255);
  while(R<100){
    R=Math.floor(Math.random()*255);
  }
  while(G<100){
    G=Math.floor(Math.random()*255);
  }
  while(B<100){
    B=Math.floor(Math.random()*255);
  }
}