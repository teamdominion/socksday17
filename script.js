window.onload = function() {
  var img = document.getElementById('result');
  var tmp = img.src;
  img.src = './img/a.png';

  setTimeout(function(){
    img.src = tmp;
  }, 2000);
}
