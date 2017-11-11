window.onload = function() {
  var img = document.getElementById('result');
  var tmp = img.src;
  img.src = './img/a.png';

  img.style.display = "block";

  setTimeout(function(){
    img.src = tmp;
  }, 2000);
}
