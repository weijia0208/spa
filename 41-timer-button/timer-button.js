/*exported TimerBtn*/
/**
var $timerBtn = (function(){
  var cfg = {
    container:'.main',
    title:'确定',
    time:9,
    enable:false,
    clickHandler:null
  };
  var n = cfg.time;
  var init = function(conf){
    $.extend(cfg,conf);
*/
//first method
/*
    var $container = $(cfg.container);
    var DOM = '<input type="button" class="timer-button" value="'+cfg.title+'('+n+'s)" disabled>';
    $container.html(DOM);
    */
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
/*
    var $btnAgree = $container.find('.timer-button');
                     
    var timer = window.setInterval(function(){
      n--;
      if(n === 0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);                                                    
      }else{
        $btnAgree.val(cfg.title +' (' + n +'s)');                            
      }                                       
    },1000);

    $btnAgree.click(function(){
      cfg.clickHandler();
      //$btnAgree.trigger('timer-btn-click');
      //alert('SPA! 10-timer-button task!');                            
    });
    return $btnAgree;
  };
  */
  
/*
  var remove = function(){
    var $btn = $(cfg.container).find('.timer-button');

    $btn.remove();
  };
  */
/*
  return {init:init};
}());
**/

function TimerBtn(){
  var cfg = {
    container:'.main',
    title:'确定',
    time:9,
    enable:false,
    clickHandler:null                        
  };
  //var n = cfg.time;
  
  /*
  if(cfg.enable){
    console.log(cfg.enable);
    cfg.time=1;
  }
  */
  

  this.init = function(conf){
    $.extend(cfg,conf);
    if(cfg.enable==='true'){
      //console.log(cfg.enable);
      cfg.time=1;          
    }
    var $container = $(cfg.container);
    var DOM = '<input type="button" class="time-button" value="'+cfg.title+'('+cfg.time+'s)" disabled>';
    $container.html(DOM);
    var $btnAgree = $container.find('.time-button');
                         
    var timer = window.setInterval(function(){
      cfg.time--;
      if(cfg.time === 0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);                                                                                        
      }else{
        $btnAgree.val(cfg.title +' (' + cfg.time +'s)');                           
      }                                                
    },1000);
    $btnAgree.click(function(){
      cfg.clickHandler();              
    });
    return $btnAgree;      

  };
}

