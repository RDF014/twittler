$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  var title = $('<h1>Twittler</h1>');
  $('body').prepend(title);

  var d = new Date();
  // var hours = d.getHours();
  // var minutes = d.getMinutes();
  // var sec = d.getSeconds();
  var time = d.toLocaleTimeString();
  // var time = hours + ':' + minutes + ' ' + sec;
  // var $time = $('<b></b>');
  // $time.text(time);



  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + time);
    $tweet.appendTo($body);
    // $('div').first().append($time);
    // $time.appendTo('div').first()
    index -= 1;
  }


});