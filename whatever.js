var expect = [59, 59, 59];
var buffer = [];
var next = 0;

function showTheThing() {
  var e = document.activeElement;
  if (e.value && e.value.length) {
    e.value = e.value.toString().slice(0, -2) + "¯\\_(ツ)_/¯";
  }
}

document.onkeypress = function (e) {
  var key = e.which;
  
  if (key === expect[next]) {
    next++;
    if (next === expect.length) {
      showTheThing();
      next = 0;
      return false;
    }
  } else {
    next = 0;
  }
};