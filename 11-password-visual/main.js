$(function(){
  var $pwd = $('#password'),
      $btn = $('#btn'),
      $see = $('#pwd');
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
});
