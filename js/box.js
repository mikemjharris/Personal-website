	function htmltoadd(i,l) 
	{
			return '<div class="face sq1"><br><br>BOX ' + (i + (l*4)) + '<div class="face sq121"><br><a href="#test1">Link1</a><br><br><a href="#test1">Link2</a></div><div class="face sq12"><br><div class="face sq121"></div><a href="#test1">Link1</a><br><br><a href="#test1">Link2</a></div></div><div class="face sq2"></div><div class="face sq3">BOX ' +(i + (l*4))+'</div>'
	}
	
	function jsversion() {
	console.log("running...");
		var j =  document.querySelectorAll('.box').length;
		var cont = document.getElementById('cont');
		var maxwidth =  Math.floor(parseInt(window.getComputedStyle(document.getElementById('envo')).width,10) / 102) - 1;
		var newWidth =  parseInt(window.getComputedStyle(document.getElementById('cont')).width,10) + 102
		
		
		var l = Math.floor(j / maxwidth)
		var m = j % maxwidth 
		
		if ( j < maxwidth){		
					document.getElementById("cont").style.width = newWidth + "px";
				}
				
		var newBox = document.createElement("div")
		newBox.className ="box hidden show"
		var createID = "box" + (m + (l*4))
		newBox.id = createID
		newBox.style.cssText = 'left:' + m * 102 + 'px; top:' + ((l * 102)+1)+'px'
		newBox.innerHTML = htmltoadd(m,l) 
		
		cont.appendChild(newBox)
		
				
		setTimeout(function()
			{
			var elem = document.getElementById(createID);
				 elem.className = "box show";
			}, 500);
				
	}
		/*
	$("#add2").click(function(){
			jsversion()
			});*/
	
		