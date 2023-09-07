const showDate = () => {
  document.getElementById("display_clock").innerHTML = Date();
};

var i = setInterval(showDate, 1000);

const clearDate = () => {
  clearInterval(i);
};
setTimeout(clearDate, 5000);

const showClock = () => {
  var todayDate = new Date();
  var hour = todayDate.getHours();
  var minute = todayDate.getMinutes();
  var second = todayDate.getSeconds();
  document.getElementById("display_date").innerHTML =
    hour + ":" + minute + ":" + second;
};

setInterval(showClock, 1000);
