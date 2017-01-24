$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  var title = $('<h1>Twittler</h1>');
  $('body').prepend(title);

  // var d = new Date();
  // var hours = d.getHours();
  // var minutes = d.getMinutes();
  // var sec = d.getSeconds();
  // var time = d.toLocaleTimeString();
  // var time = hours + ':' + minutes + ' ' + sec;
  // var $time = $('<b></b>');
  // $time.text(time);



  var index = streams.home.length - 1;
  while(index >= 0){
    //access nested object that holds user, tweet, and time
    var $section = $('<section></section>')
    var tweet = streams.home[index];
    var $user = $('<h3><a href=\"#\">@'+tweet.user+'</a></h3>');
    var $timeCreate = $('<h6>'+ tweet.created_at +'</h6>');
    var $tweet = $('<p>'+ tweet.message +'</p>');
    // $tweet.text(tweet.message);

    $section.appendTo($body);
    $user.appendTo($section);
    $timeCreate.appendTo($section)
    $tweet.appendTo($section);

    index -= 1;
  }


});