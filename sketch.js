
let dvd=[];
let names=["/images/dvd_cyan.png",
  "/images/dvd_green.png",
  "/images/dvd_magenta.png",
  "/images/dvd_red.png",
  "/images/dvd_whte.png",
  "/images/dvd_yellow.png"];

let x = 100;let y = 100;
let dx = 2; let dy = 2;
let item=0;

function preload(){
  for(var i=0;i<names.length;i++){
    dvd[i]=loadImage(names[i]);
  }
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  rect(x,y,100,50);
  fill(0,0,0);
  image(dvd[item],x,y,100,50);
  x = x + dx;
  y = y + dy;
  edgeHandling();
}

function edgeHandling(){
  if(x <= 0 || x + 100>= width){
    dx = dx*-1;  
    item = Math.floor(Math.random() * 6);
  }

  if(y+10<=0 || y+50>=height){
    dy = dy*-1;
    item = Math.floor(Math.random() * 6);
  }
}