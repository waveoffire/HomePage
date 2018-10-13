var header = document.getElementById("header");

setInterval(function() {
  var a = window.innerHeight;
  if (a < 700) {
    a = 700;
  }
  var pos = window.scrollY;
  if (pos > a - 55) {
    header.className = "stickyScroll";
  } else {
    header.className = "sticky";
  }
}, 100);
