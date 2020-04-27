var hec=0

function setup() {
  createCanvas(500,500);
}

function draw() {
  background("#8524C4");
  fill("#83D2F2");
  stroke("#D4D1D1");
  strokeWeight(7);
  ellipse(250,250,hec,hec);
  
  fill("white");
  stroke("#52FFFA");
  strokeWeight(5);
  rect(random(width),random(height),5,20);
  
  fill("white");
  stroke("#52FFFA");
  strokeWeight(5);
  ellipse(random(width),random(height),7,30);
  fill("#83D2F2");
  stroke("black");
  rect(240,445,209,50);
  
  fill("white");
  stroke("#8524C4");
  textSize (24);
  textFont ("Helvetica");
  textStyle (ITALIC);
  text ("Stormy Blue Moon",250,483);
  
  
  
  
}

function mousePressed() {
  if (hec>250){
    hec=0
  }else{
hec= hec+20;
  }
}
