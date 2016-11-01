var mirror; 

var vScale = 16;

function preload(){
  diesIrae = loadSound('assets/dies_irae.mp3');
}

function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  mirror = createCapture(VIDEO);
  mirror.size(640,480);
  
  diesIrae.setVolume(0.1);
  diesIrae.play();
  
  mirror.hide();
  
  //DecimalFormat df = new DecimalFormat("#.##");
}


function draw() {
  background(75);
  var bcounter = 1600;
  
  
  mirror.loadPixels();
  loadPixels();
  for (var y = 0; y <height; y++){
    for (var x = 0; x < width; x++){
      var index = (x + y * width)*4;
    
      var r = mirror.pixels[index+0];
      var g = mirror.pixels[index+1];
      var b = mirror.pixels[index+2];
      
      
      
      if(y>mouseY && y<mouseY+80 && x>mouseX && x<mouseX+200){
        
        if(r < 66 && g < 66 && b < 66){
          r = 255;
          g = 255;
          b = 255;
          bcounter = bcounter + 1;
        }
          
          
        
      }
      
      
      
      pixels[index + 0] = r
      pixels[index + 1] = g
      pixels[index + 2] = b
      pixels[index + 3] = 255;
      
      
    }
  }
  
  updatePixels();
  noStroke()
  fill(255,255,255,100);
  rect(mouseX,mouseY, 200, 80);
  
  diesIrae.setVolume(1/20000 * bcounter);
  fill(255);
  text(1/20000 * bcounter, 100, 100);
  
  

  
}
