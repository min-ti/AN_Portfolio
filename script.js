

// Click sound
const button = document.getElementById("view-work-btn");
button.addEventListener("click", () => {
  const audio = new Audio("click.mp3"); // Add a click.mp3 in your assets folder
  audio.play();
  setTimeout(() => {
    window.location.href = "projects.html";
  }, 300);
});
