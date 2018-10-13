var photos = [
  "photos/head.png",
  "photos/table.jpg",
  "photos/school.jpg",
  "photos/kids.jpg"
];
var dots = ["photo0", "photo1", "photo2", "photo3"];
var i = 0;
var dot_picked = document.getElementById("photo0");
var autoslide;
function start() {
  autoslide = setInterval(function() {
    for (var n = 0; n < dots.length; n++) {
      document.getElementById(dots[n]).src = "photos/dot.png";
    }
    i++;
    if (i == 4) {
      i = 0;
    }
    document.getElementById("slider").src = photos[i];
    dot_picked = document.getElementById(dots[i]);
    dot_picked.src = "photos/dot_picked.png";
  }, 2000);
}
function stop() {
  clearInterval(autoslide);
}
function next() {
  stop();
  document.getElementById(dots[i]).src = "photos/dot.png";
  i++;
  if (i == 4) {
    i = 0;
  }
  document.getElementById(dots[i]).src = "photos/dot_picked.png";
  document.getElementById("slider").src = photos[i];
  start();
}
function last() {
  stop();
  document.getElementById(dots[i]).src = "photos/dot.png";

  i--;
  if (i == -1) {
    i = 3;
  }
  document.getElementById(dots[i]).src = "photos/dot_picked.png";
  document.getElementById("slider").src = photos[i];
  start();
}
start();
