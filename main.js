// if ("ontouchstart" in window) {
//     cursor.style.display = "none";
//     return;
// }
const cursor = document.querySelector(".custom-cursor");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let posX = mouseX;
let posY = mouseY;

// fast setters = smoother
const setX = gsap.quickSetter(cursor, "x", "px");
const setY = gsap.quickSetter(cursor, "y", "px");

// ✅ initially hidden
cursor.style.opacity = "0";

// Track mouse movement
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth follow
gsap.ticker.add(() => {
    const speed = 0.15; // higher = faster follow
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;

    setX(posX);
    setY(posY);
});

// ✅ Show cursor only when mouse is inside page
document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
});

// ✅ Optional: hide when user changes tab
document.addEventListener("visibilitychange", () => {
    if (document.hidden) cursor.style.opacity = "0";
});

document.addEventListener("mouseover", (e) => {
    if (e.target.matches(".project-img, img")) {
        gsap.to(cursor, {
            scale: 2.2,
            duration: 0.25,
            ease: "power3.out"
        });
    }
});

document.addEventListener("mouseout", (e) => {
    if (e.target.matches(".project-img, img")) {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.25,
            ease: "power3.out"
        });
    }
});
