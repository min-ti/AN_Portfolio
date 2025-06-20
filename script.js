// Cursor effects
const trailer = document.querySelector(".cursor-trailer");
const face = document.getElementById("face");

window.addEventListener("mousemove", e => {
    const { clientX, clientY } = e;
    
    // Face rotation
    if(face) {
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 30;
        face.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    }
});
