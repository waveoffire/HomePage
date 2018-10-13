var header = document.getElementById("header");
var logo = document.getElementById("logo");
setInterval(function() {
  var a = window.innerHeight;
  if (a < 700) {
    a = 700;
  }
  var pos = window.scrollY;
  if (pos > a - 55) {
    header.className = "stickyScroll";
    logo.className = "logo";
  } else {
    header.className = "sticky";
    logo.className = "";
  }
}, 100);
