/*exported $timerBtn*/
var $timerBtn = (function(){
  var n = 6;
  var init = function(){

    //first method
    var $container = $('.main');
    var DOM = '<input type="button" class="timer-button" value="同意（6s）" disabled>';
    $container.html(DOM);

    //second method
    /*
    var $timerBtn = $('<input class="timer-button" type="button" value="同意（6s）" disabled>');
    //$timerBtn.appendTo($container);
    $container.append($timerBtn);
    */
    
    /*外部样式
    $btnAgree.css({
      'font-size':'1.2em',
      'height':'60px',
      'width':'200px'
    });
    */
                      
    var $btnAgree = $container.find('.timer-button');
                     
    var timer = window.setInterval(function(){
      n--;
      if(n === 0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val('同意');                                                    
      }else{
        $btnAgree.val('同意 (' + n +'s)');                            
      }                                       
    },1000);

    $btnAgree.click(function(){
      alert('SPA! 10-timer-button task!');                            
    });
  };

  var remove = function(){
    var $btn = $('.main').find('.timer-button');

    $btn.remove();
  };
 
  return {init:init,remove:remove};
}());

