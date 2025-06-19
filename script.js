// Cursor Trailer
const trailer = document.querySelector(".cursor-trailer");
const face = document.getElementById("face");

window.addEventListener("mousemove", e => {
    const { clientX, clientY } = e;
    
    // Cursor trailer effect
    trailer.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
    
    // Face rotation effect
    if(face) {
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 30;
        face.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    }
});

// Floating icons animation
const floatingIcons = document.querySelectorAll(".floating-icon");
floatingIcons.forEach(icon => {
    const delay = icon.style.getPropertyValue("--delay") || "0s";
    icon.style.animation = `float 6s ease-in-out infinite ${delay}`;
});

// Marquee effect
const marquee = document.querySelector(".marquee-content");
let marqueeContent = marquee.innerHTML;
marquee.innerHTML = marqueeContent.repeat(4);
