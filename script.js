// Add this to your script.js file

// Number grid interaction
const numberItems = document.querySelectorAll('.number-item');

numberItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Random slight rotation and translation
    const rotation = (Math.random() * 10) - 5; // -5 to 5 degrees
    const translateX = (Math.random() * 10) - 5; // -5 to 5px
    const translateY = (Math.random() * 10) - 5; // -5 to 5px
    
    item.style.transform = `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'rotate(0deg) translate(0, 0)';
  });

  item.addEventListener('click', () => {
    // Change color briefly when clicked
    item.style.color = '#fff';
    item.style.textShadow = '0 0 10px #39ff14';
    setTimeout(() => {
      item.style.color = '#39ff14';
      item.style.textShadow = 'none';
    }, 300);
  });
});

// Keep your existing mouse move and button click code
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
