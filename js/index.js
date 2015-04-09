$(document).ready(function() {
    /*hide other cont boxes not the main one */
    /*$(".cont").not("#bod1").hide();*/
	
	
	
    /*option box buttons - adjust widths and heights of elements*/
    $("#submit1").click(function(){
		var newWidth = $("#newWidth").val() + "px";

        $(".cont").fadeOut(500, function() {
                $("#all").animate( {"width" : newWidth}, 100, function(){
                        $(".cont").fadeIn(500)

                });
            });
        });


		$("#submit2").click(function(){
		var newHeight = $("#subodHeight").val() + "px";

		$(".subbod").animate( {
				"height" : newHeight}, 1000);
	});


	/* readjust title square */
	$("#enter").click(function() {
	
		$("a").click(function() {
			var $this = $(this)
			
						
			$("body").fadeOut(500, function() {
				var newLocation = $this.attr("href")
				document.location = newLocation;
				});
			return false;
			});
		
		$("#bod1").animate({
			"width" : "300px",
			    }, 1000 , function() {
			    $(".cont").not("#bod1").show(10, function() {
				  	$("#bod1").addClass("hov");
				});
	    });
				
		 $("#bod1 .subbod").animate({"height": "220px"} ,1000 );
		
		    /*$("#all").animate({
			    	"width" : "664px" } , 1000 );*/
		
		 $("#desc").animate({"opacity" : "0"}, 200, $("#desc").remove());
	});
		
	/*adjust box heights when header clicked*/
	$(".head").click(function() {
			var $this = $(this);
			
			var newHeight = ($this.siblings(".subbod").css("height") === "0px" ? "250px" : "0px" );
			
			$this.siblings(".subbod").animate({
		        "height" : newHeight } , 1000);
			});
    });
	
	
	
	
	
	
