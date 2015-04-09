$(document).ready(function() {
	var myTrans = new Array();
		//(
		//alert("hello");
		//alert($(this).css("background-color"));
		//$(this).toggleClass("rd")
		//myTrans[$(this).html()] = "200px";
		
	//});
	
	
	$("#go").click(function() {
		var Trans ="";
		for (var i in myTrans) {
			$(".obj").css( i, myTrans[i])		
					
			};
		});
	
	$("#submit").click(function() {
		$('input').each( function( index ){
			$(".obj").css( $(this).attr("name"), $(this).val())		
			console.log( index, $(this).val() , $(this).attr("name") );
			});
		$('select').each( function( index ){
			$(".obj").css( $(this).attr("name"), $(this).val())		
			console.log( index, $(this).val() , $(this).attr("name") );
			});
		});
	
	$("#reset").click(function() {
		$(".obj").css( {"height" : "20px", "width":"20px","margin-left":"0px", "margin-top":"0px", "-webkit-transform":"rotate(0deg)"})		
	});
});
