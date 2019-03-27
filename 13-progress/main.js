var $progress = $('progress');
var val = $progress.val();
var timer = 0;

$(function(){
  var $start = $('#start');
  var $stop = $('#stop');
  var $reset = $('#reset');
  var $progress = $('progress');

  $start.click(function(){
    //console.log('start');
    val=$progress.val();
    timer = window.setInterval(function(){
      val++;
      $progress.val(val);                
    },500);
  });

  $reset.click(function(){
    val = 0;
    $progress.val(val);
  });

  $stop.click(function(){    
    window.clearInterval(timer);
    timer = 0;
  });

});


