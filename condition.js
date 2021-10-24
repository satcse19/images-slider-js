var photos = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
var ima = document.querySelector("img");

var cn = 0;
function next() {
  cn++;
  if (cn >= photos.length) {
    cn = 0;
    ima.src = photos[cn];
  } else {
    ima.src = photos[cn];
  }
}

function previous() {
  cn--;
  if (cn < 0) {
    cn = photos.length - 1;
    ima.src = photos[cn];
  } else {
    ima.src = photos[cn];
  }
}
