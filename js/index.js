console.log("Hello world!");
var box = document.createElement('div');
box.style.width = '100px';
box.style.height = '100px';
box.style.backgroundColor = 'blue';
box.style.position = 'absolute';
box.style.left = '0px';
box.style.top = '0px';
document.body.appendChild(box);
box.addEventListener('click', function() {
  var left = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (left == 350) {
      clearInterval(id);
    } else {
      left++;
      box.style.left = left + 'px';
    }
  }
});
