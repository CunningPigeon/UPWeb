setInterval(function() {
  var time = new Date();
  if(time.getHours() < 10) var getHours = "0" + time.getHours(); else getHours = time.getHours();
  if(time.getMinutes() < 10) var getMinutes = "0" + time.getMinutes(); else getMinutes = time.getMinutes();
  if(time.getSeconds() < 10) var getSeconds = "0" + time.getSeconds(); else getSeconds = time.getSeconds();
  time = getHours + ":" + getMinutes + ":" + getSeconds;
  document.querySelector('.trfed').innerHTML = time;
  }, 1000);