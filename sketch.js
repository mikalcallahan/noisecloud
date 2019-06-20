// Create a cloud of noise

var inc = 0.01 // set increment variable
var start = 0 // set starting place

function setup() {
  createCanvas(200,200)
  pixelDensity(1) // so hdpi displays are treated the same
}

function draw() {
  noiseDetail(4,0.9)
  var yoff = start // y offset gets 0
  loadPixels() // initiate pixels
  for(var y=0; y<height; y++) { // loop through column first
    var xoff=0 // initliaze x offset
    for(var x=0; x<width; x++) { // loop through rows next
      var index = (x+y*width) * 4 // get next pixel (remember pixels[r0,g0,b0,a0...]
      var r = noise(xoff, yoff) * 255 // set noise

      // each pixel's RGB is set to noise
      pixels[index+0] = r
      pixels[index+1] = r 
      pixels[index+2] = r
      pixels[index+3] = 255
      xoff += inc // go to next x position
    }
    yoff += inc // go to next y position
  }
  updatePixels()
  noLoop()
}
