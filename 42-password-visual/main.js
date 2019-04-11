/*exported $pswInval*/
var $pswInval = (function(){
  var DOM = ''
          +'<div class="main">'
          +'<span>密码:</span>'  
          +'<input type="password" id="password">'
          +'<input id="btn" value="可见" type="button">'
          +'<input type="text" id="pwd">'
          +'</div>';

  var view = $(DOM);

  var init = function(){
    /*
    var DOM = ''
        +'<div class="main">'
        +'<span>密码:</span>'  
        +'<input type="password" id="password">'
        +'<input id="btn" value="可见" type="button">'
        +'<input type="text" id="pwd">'
        +'</div>';

    var view = $(DOM);
    */
    $('body').append(view);

    var $pwd = view.find('#password'),
        $btn = view.find('#btn'),
        $see = view.find('#pwd');
    $pwd.on('input',function(){
      $see.val($pwd.val());
    });
    $btn.click(function(){
      if($btn.val()==='可见'){
        $see.css('top','0px');
        $see.css('z-index','10');
        $btn.val('不可见');
      }else{
        $see.css('top','-66px');
        $btn.val('可见');
      }
    });
  };
  var get = function(){
    alert(view.find('#password').val());
  };

  return {init:init,get:get};
}());
