var startDate;

function stopTime() {

  var startTime = startDate.getTime();
  var date_now = new Date();
  var time_now = date_now.getTime();
  var time_diff = time_now - startTime;
  var seconds_elapsed = Math.floor(time_diff / 1000);
  alert(seconds_elapsed+" seconds");
}

function start() {
  startDate = new Date();
}

window.onload = start();
