import confetti from "https://cdn.skypack.dev/canvas-confetti";

function makeConfetti() {
  confetti();
}

const btn = document.getElementById("btn")
btn.addEventListener("click", makeConfetti)

function reset() {
  window.location.href = "index.html";
}
