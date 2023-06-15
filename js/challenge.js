// As a user, I can:

// See the timer increment every second once the page has loaded.
// Manually increment and decrement the counter using the plus and minus buttons.
// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "resume" button to restart the counter and re-enable the buttons.
// Leave comments on my gameplay, such as: "Wow, what a fun game this is."

document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...
  
    let pauseButton = document.getElementById('pause');
    let buttons = document.querySelectorAll('button:not(#pause)');
  
    let intervalId;
  
    pauseButton.addEventListener('click', function () {
      if (pauseButton.innerText === 'pause') {
        clearInterval(intervalId);
        pauseButton.innerText = 'resume';
        buttons.forEach(function (button) {
          button.disabled = true;
        });
      } else {
        intervalId = setInterval(function () {
          count++;
          counter.innerText = count;
        }, 1000);
        pauseButton.innerText = 'pause';
        buttons.forEach(function (button) {
          button.disabled = false;
        });
      }
    });
  });