$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  var title = $('<h1>Twittler</h1>');
  $('body').prepend(title);


  var d = new Date();
  var hours = d.getHours() - 12;
  var minutes = d. getMinutes();
  var time = hours + ':' + minutes;




  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + time);
    $tweet.appendTo($body);
    index -= 1;
  }


});