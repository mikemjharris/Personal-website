

var drawCircle = function (offset_angle) {
  
  var list_items = $('li')
  var distanceFromCenter = 200;
  var angle = 2 * Math.PI / 12

  for(var i = 0; i < list_items.length; i++) {
    offset_x = Math.sin( angle * i + offset_angle) * distanceFromCenter + 50
    offset_y = Math.cos(angle * i + offset_angle) * distanceFromCenter - 45
    $(list_items[i]).css("left", offset_x + "px");
    $(list_items[i]).css("top", offset_y + "px");
  }
};

var animateCircle = function(startAngle, chgAngle, time) {
  var fps = 60; 
  drawCircle(startAngle)
  
  if (time > 0) {
    time--
    startAngle = startAngle + chgAngle
    setTimeout(function(){
        animateCircle(startAngle, chgAngle, time)
      }, 1000 / 60 )
    }
  }
    

$('li').hover(function() {
    var student_name = $($(this).children()[0]).html()
    $('#details').html(student_name)  
  } , function() {
    $('#details').html("WDI March 2014")
  })


$('li').on("click" , function() {   
    var position_start = $('#highlighted').index() -1
    var position_end = $(this).index() -1
    var startAngle = Math.PI - position_start * (Math.PI / 6)
    var endAngle =  Math.PI - position_end * (Math.PI / 6)
    
    if((startAngle - endAngle) > Math.PI ) {
      startAngle = startAngle - 2 * Math.PI
    } 

    if((startAngle - endAngle) < -Math.PI) {
      startAngle = startAngle + 2 * Math.PI

    }

    var fps = 60
    var time_round = 0.5
    var nos_times = time_round * fps
    var chgAngle =  (endAngle - startAngle) / nos_times
    
    $('#highlighted').attr("id", "")
    $(this).attr("id" , "highlighted")

    $('#intro').html("")
    $('#intro').html($($(this).children()[1]).html())
    animateCircle(startAngle, chgAngle , nos_times)
  
});


$(document).ready(function() {
      // var mq = window.matchMedia("(min-width: 950px)");
      $('li').addClass('withjs_li')
      $('ul').addClass('withjs_ul')
      // if (mq.matches) {
      //   $('li').css("position", "absolute")
      //   $('li').css("width", "100px")
      //   $('li').css("height", "100px")
      //   $('li').css("line-height", "90px")
      //   $('li').css("border-radius", "100%")

      //   $('ul').css("margin", "300px auto")
      // }

      drawCircle(Math.PI);
}())

 







    