var i = 0;
// var txt = "Lorem ipsum typing effect!"; /* The text */
var speed = 15; /* The speed/duration of the effect in milliseconds */

function typeWriter(txt) {
  let printing = document.getElementById("game-instructions");
  printing.innerHTML = ''
  let typingId = setInterval(() => {
    if (i < txt.length) {
      printing.innerHTML += txt.charAt(i);
      i++;
    } else {clearInterval(typingId)}
  }, speed);
}
typeWriter("");
