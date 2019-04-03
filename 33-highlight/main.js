/*global hljs: true*/
$(function(){
  var $btnAddCode = $('input[type="button"]');
  var list=[];
  $btnAddCode.click(function(){
    var $code = $('<div>'+
        '<pre class="javascript"></pre>'+
        '<input type="button" class="btn" value="delete">'+
        '</div>');
    $code.find('pre').html($('.code').val());
    list.push($('.code').val());
    $('div.main').append($code);
    hljs.highlightBlock($code.find('pre').get(0));
    var $del = $code.find('input');
    $del.click(function(){
      $code.remove();
    });
  });
});
