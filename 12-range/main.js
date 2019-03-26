$(function(){
  var $range = $('input[type="range"]');
  var $txtage = $('#age');

  $range.change(function(){
    $txtage.html($range.val());
  });
});
