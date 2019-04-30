$(function(){
  var $btn = $('input[type="button"]');
  
  var n = localStorage.getItem('n');
  if(!n) n=0;

  setBtnTitle(n);

  $btn.click(function(){
    var url = location.origin + location.pathname + '#/' + (++n);
    history.pushState(null,null,url);

    setBtnTitle(n);
  });

  function setBtnTitle(n){
    $btn.val('被按了'+n+'次');
  }
  
  //前进后退
  window.onpopstate = function(){
    var url = location.href;
    var n = (url).match(/(\d*)$/)[0];
    
    setBtnTitle(n);
  };

});
