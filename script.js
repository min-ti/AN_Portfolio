document.addEventListener("mousemove", (e) => {
  const face = document.getElementById("face");
  const { clientX, clientY } = e;

  const x = (clientX / window.innerWidth - 0.5) * 30;
  const y = (clientY / window.innerHeight - 0.5) * 30;

  face.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

document.getElementById("view-work-btn").addEventListener("click", () => {
  window.location.href = "projects.html";
});
