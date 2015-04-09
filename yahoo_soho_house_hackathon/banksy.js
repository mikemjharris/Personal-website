function floatBalloons() {
  var music = Math.random() / 4
  var film = (1- music) * Math.random() / 3
  var art = (1- music - film) * Math.random() / 2
  var fashion = (1- music - film - art) * Math.random() 
  var media = (1- music - film - art -fashion)
  

  $('.art').css('bottom', art * 120 + 'vh')
  $('.music').css('bottom', music * 120 + 'vh')
  $('.film').css('bottom', film * 120 + 'vh')
  $('.fashion').css('bottom', fashion * 120 + 'vh')
  $('.media').css('bottom', media * 120 + 'vh')
}

$(function() {

floatBalloons();
setInterval(function() { floatBalloons()} , 3000)





})