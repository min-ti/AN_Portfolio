// Typewriter loader
const text = "loading terminal:_  ";
let i = 0;
const el = document.getElementById("loader");
function type() {
  el.textContent = text.slice(0, i % (text.length + 1));
  i++;
  setTimeout(type, 100);
}
type();

// Click sound
const button = document.getElementById("view-work-btn");
button.addEventListener("click", () => {
  const audio = new Audio("click.mp3"); // Add a click.mp3 in your assets folder
  audio.play();
  setTimeout(() => {
    window.location.href = "projects.html";
  }, 300);
});
