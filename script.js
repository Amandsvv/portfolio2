function toggleMenu() {
    const navLinks = document.querySelector('.lists');
    navLinks.classList.toggle('active');
}

const projects = [
    {
        title: "My First project: Youtube clone",
        description: "A fully responsive YouTube landing page clone built while learning HTML and CSS from SuperSimpleDev. This project helped me understand layout structuring, responsive design principles, and the foundational workflow of a modern web UI. It simulates YouTube’s core design and responsiveness across all devices.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project1.png",
        liveLink: "https://amandsvv.github.io/Youtube-clone/",
        githubLink: "https://github.com/Amandsvv/Youtube-clone"
    },
    {
        title: "Facebook landing page, Login Page for FB",
        description: "A recreation of Facebook’s login interface using only HTML and CSS. Designed to mirror the original Facebook layout, this project strengthened my ability to replicate real-world UI using semantic markup and precision styling. It also emphasizes responsive layout techniques and pixel-perfect alignment.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project2.png",
        liveLink: "https://amandsvv.github.io/Fb/",
        githubLink: "https://github.com/Amandsvv/Fb"
    },
    {
        title: "A fully functionality Ludo game",
        description: "A browser-based, fully interactive Ludo game developed using HTML, CSS, and JavaScript. This project showcases my grasp on DOM manipulation, game state logic, and multi-player turn systems. It mimics the classic board game experience, adding smooth transitions, dice animations, and intuitive gameplay mechanics.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project3.png",
        liveLink: "https://amandsvv.github.io/Ludo/",
        githubLink: "https://github.com/Amandsvv/Ludo"
    },
    {
        title: "Roll Dice Game",
        description: "A simple yet addictive two-player dice game built with HTML, CSS, and JavaScript. Players compete to reach 20 points, but with a twist — rolling a 6 resets the current round score, adding strategy to each move. The game features clean UI, sound logic, and smooth transitions, offering a great showcase of interactive JS programming.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project4.png",
        liveLink: "https://roll-the-dice-eight.vercel.app/",
        githubLink: "https://github.com/Amandsvv/RollTheDice"
    },
    {
        title: "Amazon Cart System",
        description: "A functional e-commerce cart system inspired by Amazon, designed to simulate real-world cart behavior. Users can add items, update quantities, calculate totals (including tax/discounts), and experience a smooth checkout flow. This project highlights dynamic DOM updates, modular JavaScript design, and modern e-commerce UX practices.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project5.png",
        liveLink: "https://amandsvv.github.io/AmajonProject/",
        githubLink: "https://github.com/Amandsvv/AmajonProject"
    },
    {
        title: "AwGP Ecommerce Website",
        description: "A responsive e-commerce platform designed for the All World Gayatri Pariwar (AWGP) community. The store allows users to explore and purchase spiritual books, CDs, health products, and more. Built with a clean UI, wishlist and cart system, and real-time product interactions, it offers a seamless and accessible online shopping experience tailored to AWGP's mission.",
        year: "2025",
        role: "Front-end Development",
        imgSrc: "project/project6.png",
        liveLink: "https://awgp-store.vercel.app/",
        githubLink: "https://github.com/Amandsvv/AWGPStore.git"
    }
];

let currentIndex = 0;
const container = document.querySelector("#work");
const sentinel = document.querySelector("#sentinel");

function createProjectHTML(project) {
    const div = document.createElement("div");
    div.classList.add("projects", "fade-in");
    div.innerHTML = `
        <div class="project-1">
            <div class="project-1-left">
                <div class="img-container">
                    <img class="project-img" src="${project.imgSrc}" alt="project-img">
                </div>
            </div>
            <div class="project-1-right">
                <p class="project-title">${project.title}</p>
                <p class="project-desc">${project.description}</p>
                <p class="project-info">Project Info</p>
                <div class="project-time">
                    <p class="font-st">Year</p>
                    <p class="font-st">${project.year}</p>
                </div>
                <div class="role">
                    <p class="font-st">Role</p>
                    <p class="font-st">${project.role}</p>
                </div>
                <div class="links">
                    <p class="project-link"><a href="${project.liveLink}" target="_blank">Live Demo <i class="fa-solid fa-square-arrow-up-right"></i></a></p>
                    <p class="github-link"><a href="${project.githubLink}" target="_blank">See on Github <i class="fab fa-github"></i></a></p>
                </div>
            </div>
        </div>
    `;
   div.classList.add("invisible"); // 👈 Add invisible class temporarily
container.insertBefore(div, sentinel);

// Force reflow to apply animation
void div.offsetWidth;

div.classList.remove("invisible"); // 👈 Remove it to trigger fade
div.classList.add("fade-in");

}

function loadNextProject() {
    if (currentIndex < projects.length) {
        createProjectHTML(projects[currentIndex]);
        currentIndex++;
    } else {
        observer.disconnect(); // Stop observing when all projects are loaded
    }
}

// Use IntersectionObserver to watch the sentinel
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadNextProject();
    }
  });
}, {
  root: null,
  threshold: 0.8, // ⬅️ wait until MOST of sentinel is visible
  rootMargin: "0px 0px 0px 0px" // no offset — stricter triggering
});


observer.unobserve(sentinel);
observer.observe(sentinel);
