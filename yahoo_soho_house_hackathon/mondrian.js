

var art
var fashion 
var media 

var setSquare = function () {
  var factor = 20000
      var art = Math.random()
      var fashion = (1 - art) * Math.random()
      var media = (1 - art - fashion)

      var art_height = 50 + Math.floor(Math.random()*100)

      var large =  Math.floor(Math.random()*100) -1
      var largeWidth = Math.min(Math.max(art * factor / art_height, 20), 250)

      var bottom_height = (fashion * factor / largeWidth )* 2

      var mediaWidth = Math.min(Math.max(media * factor / bottom_height, 20), 270 - largeWidth )

      var mediumWidth = (270 - largeWidth) * Math.random();
      var smallWidth = 270 - largeWidth - mediaWidth

      $('#top').height(Math.max(art_height, 20))
      $('#bottom').height(Math.max(bottom_height, 40))

      $('.lg').width(largeWidth)
      $('.md').width(mediaWidth)
      $('.sm').width(smallWidth)

      $('.art').text('Art : ' + Math.floor(art*100) +'%')
      $('.fashion').text('Fashion: ' + Math.floor(fashion*100) +'%')
      $('.media').text('Media: ' + Math.floor(media*100) +'%')
}
$(function(){
  // setSquare();


  $('#change').on('click' , function() {    
    setSquare();
  })

  $('#run').on('click' , function() { 
    setSquare()   
      setInterval(function() {setSquare()}, 3000);
  })



})