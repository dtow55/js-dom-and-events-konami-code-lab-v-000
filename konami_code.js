

function init() {
  // Write your JavaScript code inside the init() function
  var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  var counter = 0;

  document.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e) {
    var key = parseInt(e.detail || e.which);
    if (key === code[counter]) {
      counter++;

      if (counter === 10) {
        alert('I was clicked!');
        counter = 0;
      } 
    } else {
      counter = 0;
    }
  }

}