$(document).ready(function() {


		for (var i = 1; i < 42; i++) {
		var imgadd = "img_" + i + ".jpg";
		var linkadd = '<img class="allpic" src=../img/' + imgadd + ' />';

		$(".picbox").append(linkadd);

		}

                $('.allpic').hide();
                 $('.allpic:nth-child(1)').show();


                var p = 1;

                function displayimage(p,q) {

                if (p === 1) {
                    q = 1
                }
                if (p === 41) {
                    q = -1
                }

                var $thischild = $(".allpic:nth-child(" + p + ")")
                 var $nextchild = $(".allpic:nth-child(" + (p + q) + ")")
                var timeInt = 300;

                        $($thischild).fadeOut(500);
                        $($nextchild).fadeIn(500, function() {
                          displayimage(p + q, q);
                        } );
                 }

                 displayimage(1,1);





	});
