var canvas = document.getElementById("c");
var context = canvas.getContext("2d");
context.canvas.width  = window.innerWidth;
context.canvas.height  = window.innerHeight;

var backCanvas = document.createElement('canvas');
backCanvas.width = canvas.width;
backCanvas.height = canvas.height;
var backCtx = backCanvas.getContext('2d');

var downloadCanvas = document.createElement('canvas');
downloadCanvas.width = canvas.width;
downloadCanvas.height = canvas.height;
var downloadCtx = downloadCanvas.getContext('2d');

var imgdata;

var offsetX = 0;
var offsetY = 0;

var downloadOptions = [
  {label: 'Full Screen', width: canvas.width, height: canvas.height},
  {label: 'Custom', height: 100, width: 100},
  {label: 'Twitter Profile', height: 400, width: 400 }
];

var downloadOptionsHTML = "";

var baseColor = Math.floor(Math.random()*360);
var squareSize = 40;
document.getElementById('download-width').value =  window.innerWidth;
document.getElementById('download-height').value =  window.innerHeight;

var squares = [];

function Triangle ( point1, point2, point3 ) {
  this.point1 = point1;
  this.point2 = point2;
  this.point3 = point3;
  this.color = 'hsla(' + baseColor + ', ' + Math.floor((30 + 20 * Math.random())) + '%, ' +  Math.floor((40 + 20 * Math.random())) + '%, 0.7)';
}

function Downloadbox (width, height, x, y) {
  this.lineWidth = 3;
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
}

Downloadbox.prototype.draw = function () {
  this.updateSize();
  context.clearRect( 0 , 0 , canvas.width, canvas.height );
  context.drawImage(backCanvas, 0,0);
  downloadCanvas.width = this.width;
  downloadCanvas.height = this.height;
  downloadCtx = downloadCanvas.getContext('2d');
  downloadCtx.drawImage( canvas, this.x - (this.lineWidth + this.width)/2 , this.y - (this.lineWidth + this.height)/2,  this.width, this.height, 0, 0, this.width, this.height);
  
  imgdata = downloadCanvas.toDataURL('image/png');
  var newdata = imgdata.replace(/^data:image\/png/,'data:application/octet-stream');
  document.getElementById('download').setAttribute('download', 'geometric_pattern.png');
  document.getElementById('download').setAttribute('href', newdata);

  context.beginPath();
  context.lineWidth= this.lineWidth;
  context.strokeStyle= "hsla(" + (baseColor + 180)+",100%, 50%, 1)";
  context.rect( this.x - (this.lineWidth + this.width)/2 , this.y - (this.lineWidth + this.height)/2, this.width + this.lineWidth/2, this.height + this.lineWidth/2 );
  context.stroke(); 
};

Downloadbox.prototype.updateSize = function () {
 this.width = parseInt(document.getElementById('download-width').value);
 this.height = parseInt(document.getElementById('download-height').value);
}

Downloadbox.prototype.changeSize = function ( incX, incY) {
 this.width = Math.max(this.width + incX * 2, 0);
 document.getElementById('download-width').value = this.width;
  this.height = Math.max(this.height + incY * 2, 0);
 document.getElementById('download-height').value = this.height;
 this.draw();
}

Downloadbox.prototype.updateLocation = function (x, y) {
  this.x = x;
  this.y = y;
  this.draw();
}

Downloadbox.prototype.intercept = function ( x, y ) {
  if ( 
      !(x < this.x - (this.width - this.lineWidth)/2 ||
        x > this.x + (this.width - this.lineWidth)/2 ||
        y < this.y - (this.height - this.lineWidth)/2 || 
        y > this.y + (this.height - this.lineWidth)/2
      )
    ) {
    return { 
      x: x - this.x,
      y: y - this.y
    }
  } else {
    return false;
  }
}

Downloadbox.prototype.interceptLine = function ( x, y ) {
  var extraSpace = 20;
  if ( 
      !(x < this.x - (this.lineWidth + this.width + extraSpace)/2 || 
        x > this.x + (this.lineWidth + this.width + extraSpace)/2 ||
        y < this.y - (this.lineWidth + this.height + extraSpace)/2 || 
        y > this.y + (this.lineWidth + this.height + extraSpace)/2
      ) && 
       !(x > this.x - (this.width - this.lineWidth) /2 && 
        x <  this.x + (this.width - this.lineWidth )/2 &&
        y > this.y - (this.height - this.lineWidth)/2 && 
        y < this.y + (this.height - this.lineWidth)/2
      ) 
    ) {
    return { 
      x: x,
      y: y,
      dirX: Math.sign(x - this.x),
      dirY: Math.sign(y - this.y)
    }
  } else {
    return false;
  }
}



function drawTriangles(triangles, canvas, context) {
  for ( var i = 0 ; i < triangles.length; i++) {
    triangle = triangles[triangles.length - 1 - i]
    context.beginPath();
    context.lineWidth="1"
    context.strokeStyle = triangle.color ;
    context.moveTo(triangle.point1.x, triangle.point1.y);
    context.lineTo(triangle.point2.x, triangle.point2.y);
    context.lineTo(triangle.point3.x, triangle.point3.y);
    context.lineTo(triangle.point1.x, triangle.point1.y);
    context.fillStyle= triangle.color ;
    context.fill();
    context.stroke();
  }
}
 
function createSquare( x , y, size) {
  squares = squares.concat([
    new Triangle( {x: x, y: y}, {x: x + size, y: y} , {x: x + size/2, y: y  + size/2}),
    new Triangle( {x: x + size, y: y }, {x: x + size, y: y + size} , {x: x + size/2, y: y  + size/2}),
    new Triangle( {x: x + size, y: y + size}, {x: x, y: y + size } , {x: x + size/2, y: y  + size/2}),
    new Triangle( {x: x, y: y + size}, {x: x, y: y} , {x: x + size/2, y: y  + size/2})
  ])
}

function createAllSquares() {
  squares = [];
  for ( var j = 0; j < Math.floor(canvas.height / squareSize) + 1; j++) {
    for ( var i = 0; i < Math.floor(canvas.width / squareSize) + 1; i++) {
      createSquare( i  * squareSize, j * squareSize, squareSize);
    }
  }
}

function draw() {
  context.clearRect( 0 , 0 , canvas.width, canvas.height );
  backCtx.clearRect( 0 , 0 , canvas.width, canvas.height );
  createAllSquares()
  drawTriangles(squares, canvas, context);
  backCtx.drawImage(canvas, 0,0);
  downloadBox.draw();
}

downloadBox = new Downloadbox ( canvas.width, canvas.height, canvas.width/2, canvas.height/2)
draw();


var colorPickerDivs = ""
for (var i = 0; i < 360; i ++) {
  colorPickerDivs += '<div style="background: hsla(' + i +', 70%, 70%, 1)" data-color="'+ i +'"></div>'
}

document.getElementById('color-picker').innerHTML = colorPickerDivs;
var divs = document.getElementById('color-picker').childNodes;

for(var i = 0 ; i < divs.length; i++ ) {
  if ( i == baseColor ) {
    divs[i].className = "selected"
  }
  divs[i].onclick = function () {
    divs[baseColor].className = "";
    baseColor = this.getAttribute('data-color');
    this.className = "selected"
    draw();
  };
};

for (var i=0; i < downloadOptions.length; i++) {
  downloadOptionsHTML += '<option value="' + i + '">' +  downloadOptions[i].label + '</option>';
}

document.getElementById('downloadOptions').innerHTML = downloadOptionsHTML;

//event listeners
document.getElementById('size').onchange = function () { 
  squareSize =  parseInt(this.value);
  document.getElementById('size-value').innerHTML = this.value;
  draw();
}
document.getElementById('download-width').onchange = function () {
  downloadBox.draw();
}
document.getElementById('download-width').onkeyup = function () {
  downloadBox.draw();
}

document.getElementById('download-height').onchange = function () {
  downloadBox.draw();
}
document.getElementById('download-height').onkeyup = function () {
  downloadBox.draw();
}

document.getElementById('downloadOptions').onchange = function () {
  if( this.value == 0 ) {
    downloadBox.updateLocation( canvas.width/2, canvas.height/2);
  }
  document.getElementById('download-width').value =  downloadOptions[ this.value ].width;
  document.getElementById('download-height').value =  downloadOptions[ this.value ].height;
  downloadBox.draw();
}

var offset = false;
var sizeOffset = false;


canvas.addEventListener("mousedown", function (e) {
  boxInteraction('down', e)
}, false);

 canvas.addEventListener("mousemove", function (e) {
    boxInteraction('move', e)
}, false);

canvas.addEventListener("mouseup", function (e) {
    boxInteraction('up', e)
}, false);

function boxInteraction(res, e) {
  if ( res == 'down') {
    offset = downloadBox.intercept(e.x, e.y);
    sizeOffset = downloadBox.interceptLine(e.x, e.y);
  } 
 
  if ( res === 'up') {
    offset = false;
    sizeOffset = false;
  }
  
  if ( res === 'move' ) {
    if ( offset ) {
      downloadBox.updateLocation( e.x - offset.x, e.y - offset.y )
    } else if (sizeOffset) {
      downloadBox.changeSize( sizeOffset.dirX*(e.x - sizeOffset.x),sizeOffset.dirY *  (e.y - sizeOffset.y) );
      sizeOffset.x = e.x;
      sizeOffset.y = e.y;
    } else {
      if ( downloadBox.interceptLine(e.x, e.y) ) {
        var direction = downloadBox.interceptLine(e.x, e.y);
        if (direction.dirX > 0 && direction.dirY > 0 ) {
          canvas.style.cursor = 'se-resize';
        } else if ( direction.dirX > 0 && direction.dirY < 0 ) {
          canvas.style.cursor = 'ne-resize';
        } else if ( direction.dirX < 0 && direction.dirY < 0 ) {
          canvas.style.cursor = 'nw-resize';
        } else {
          canvas.style.cursor = 'nw-resize';
        }
      } else if ( downloadBox.intercept(e.x, e.y) ) {
        canvas.style.cursor = 'move';
      } else {
        canvas.style.cursor = 'default';
      }
    }
  } 
}


