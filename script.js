$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  var title = $('<h1>Twittler</h1>');
  $('body').prepend(title);

  var index = streams.home.length - 1;
  while(index >= 0){
    var $section = $('<section class=\"userName\"></section>');
    var tweet = streams.home[index];
    var $user = $('<h3><a href=\"#\">@' + tweet.user + '</a></h3>');
    var $timeCreate = $('<h6>'+ tweet.created_at +'</h6>');
    var $tweet = $('<p>'+ tweet.message +'</p>');
    var $pastList = $('<ul></ul>').hide();
    // $tweet.text(tweet.message);

    $section.appendTo($body);
    $user.appendTo($section);
    $timeCreate.appendTo($section)
    $tweet.appendTo($section);
    $pastList.appendTo($section);


    var userIndex = streams.users[tweet.user];
    for(var i = userIndex.length-2; i >= 0; i--){
      //iterate through the user array: pulling the message and time
        //do as above except with li element
      var userPast = userIndex[i];
      var $pastTime = $('<h6>'+ userPast.created_at +'</h6>');
      var $pastTweet = $('<p>'+ userPast.message +'</p>');
      var $unorder = $('<li></li>');

      $unorder.appendTo($pastList);
      $pastTime.appendTo($unorder);
      $pastTweet.appendTo($unorder);
    }


    index -= 1;
  }

  $('.userName').on('click', function(event){
    event.preventDefault();
    $(this).find('ul').fadeToggle();
  })


});