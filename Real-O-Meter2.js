var x,y,z,n=0,ny=0,rotINT,rotYINT

function rot () {
rotateDIV()
/*
if (document.getElementById("IECheck").checked) {
	document.getElementById("topbox").style.background= "transparent"
	document.getElementById("botbox").style.background= "transparent"
	document.getElementById("triangle-up").style.display= "none"
	document.getElementById("spin").style.background="white"
	setTimeout(function() {rotateJS()},1000)
	} else {
	rotateDIV()
	}
	*/
	
}

function rotateDIV()
{
document.getElementById("topbox").style.background="transparent"
document.getElementById("botbox").style.background="transparent"
x=document.getElementById("arrow")
y=(Math.random() * 5000)
x.style.webkitTransform="rotate("+ y +"deg)"
setTimeout(function() {document.getElementById("real").innerHTML=""}, 2000)
setTimeout(function() {flashbox(y)},2000)
}

function flashbox(y)
{
	if(y % 360 <= 180) {
	document.getElementById("topbox").style.background="red"
	} else {
	document.getElementById("botbox").style.background="red"
	}	
}

function rotateCancel(){
	document.getElementById("arrow").style.webkitTransition="none"	
}

function rotateJS() {
	x=document.getElementById("arrow")
	z=document.getElementById("triangle-up")
	y=(Math.random() * 360)
	
	x.style.width="4px"
	x.style.height="200px"
	x.style.top="0px"
	x.style.left="100px"
	
	if (y < 180) {
	z.style.borderBottom = "40px solid black"
	z.style.borderLeft = "20px solid transparent"
	z.style.borderRight = "20px solid transparent"
	z.style.borderTop = "1px solid transparent"
	z.style.left = "-18px"
	z.style.top = "10px"
	document.getElementById("topbox").style.background= "red"
	document.getElementById("botbox").style.background= "transparent"
	} else {
	z.style.borderTop = "40px solid black"
	z.style.borderLeft = "20px solid transparent"
	z.style.borderRight = "20px solid transparent"
	z.style.borderBottom = "1px solid transparent"
	z.style.left = "-18px"
	z.style.top = "150px"
	document.getElementById("topbox").style.background= "transparent"
	document.getElementById("botbox").style.background= "red"
	}
	document.getElementById("triangle-up").style.display= "inline"
	document.getElementById("spin").style.background="grey"
	}