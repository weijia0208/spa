$(function(){
  var $url = $('input[type="url"]'),
      $btnStore = $('input[type="button"]'),
      $img = $('img'),
      $tmpImg = $('<img>');



  var imgURL = localStorage.getItem('url');

  showImg(imgURL);

  $btnStore.click(function(){
    var url = $url.val();
    if(url==='') return;

    $tmpImg.attr('src',url);

    showImg(url);
  });

  $tmpImg.load(function(){
    var can = $('<canvas>').get(0);
    var ctx = can.getContext('2d');

    can.width = this.width;
    can.height = this.height;

    ctx.drawImage(this,0,0,can.width,can.height);
    var data = can.toDataURL();

    localStorage.setItem('url',data);

  });

  function showImg(url){
    $img.attr('src',url);
    $img.css({'display':'block'});
  }
});
