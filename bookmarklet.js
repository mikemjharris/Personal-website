
var myElements = document.getElementsByTagName("a")

for (var i = 0; i < myElements.length; i++) {
  if (myElements[i].href.indexOf(".xml") > -1) {
    console.log (myElements[i].text + ": " + myElements[i].href );

  }

}


var node=document.createElement("p");
var textnode=document.createTextNode("Water");
// document.getElementsByTagName('body')[0].appendChild(node) 
document.getElementsByTagName('body')[0].innerHTML = "test" 


