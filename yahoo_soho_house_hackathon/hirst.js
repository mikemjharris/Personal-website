
function setColours() {

  $('.spot').removeClass('music')
  $('.spot').removeClass('film')
  $('.spot').removeClass('art')
  $('.spot').removeClass('media')
  $('.spot').removeClass('fashion')

  var music = Math.random() / 4
  var film = (1- music) * Math.random() / 3
  var art = (1- music - film) * Math.random() / 2
  var fashion = (1- music - film - art) * Math.random() 
  var media = (1- music - film - art -fashion)
  
  $('.music').text('Music ' + Math.floor(music*100) + "%")
  $('.film').text('Film ' + Math.floor(film*100) + "%")
  $('.art').text('Art '+ Math.floor(art*100) + "%")
  $('.fashion').text('Fashion ' + Math.floor(fashion*100) + "%")
  $('.media').text('Media ' + Math.floor(media*100) + "%")



  $('.spot').each(function(index , element) {
    nos =  Math.random()

    if(nos < music) {
      var area = "music"
    } else if (nos < music + film) {
      var area = "film"
    } else if (nos < music + film + art) {
      var area = "art"
    } else if (nos < music + film + art + fashion) {
      var area = "fashion"
    } else {
      var area = "media"
    } 
    $(element).addClass(area);

  })

}



$(function() {
  

  for(var i = 0; i < 100 ; i++) {
    $('.cont').append("<div class='spot'></div>")
  }
  setColours()
  setInterval(function(){setColours()}, 2000)
})