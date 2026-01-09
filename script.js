function toggleMenu() {
    const navLinks = document.querySelector('.lists');
    navLinks.classList.toggle('active');
}

const projects = [
    {
        category: "frontend",
        title: "My First project: Youtube clone",
        description: "A fully responsive YouTube landing page clone built while learning HTML and CSS from SuperSimpleDev. This project helped me understand layout structuring, responsive design principles, and the foundational workflow of a modern web UI. It simulates YouTube’s core design and responsiveness across all devices.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project1.png",
        liveLink: "https://amandsvv.github.io/Youtube-clone/",
        githubLink: "https://github.com/Amandsvv/Youtube-clone"
    },
    {
        category: "frontend",
        title: "Facebook landing page, Login Page for FB",
        description: "A recreation of Facebook’s login interface using only HTML and CSS. Designed to mirror the original Facebook layout, this project strengthened my ability to replicate real-world UI using semantic markup and precision styling. It also emphasizes responsive layout techniques and pixel-perfect alignment.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project2.png",
        liveLink: "https://amandsvv.github.io/Fb/",
        githubLink: "https://github.com/Amandsvv/Fb"
    },
    {
        category: "frontend",
        title: "A fully functionality Ludo game",
        description: "A browser-based, fully interactive Ludo game developed using HTML, CSS, and JavaScript. This project showcases my grasp on DOM manipulation, game state logic, and multi-player turn systems. It mimics the classic board game experience, adding smooth transitions, dice animations, and intuitive gameplay mechanics.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project3.png",
        liveLink: "https://amandsvv.github.io/Ludo/",
        githubLink: "https://github.com/Amandsvv/Ludo"
    },
    {
        category: "frontend",
        title: "Roll Dice Game",
        description: "A simple yet addictive two-player dice game built with HTML, CSS, and JavaScript. Players compete to reach 20 points, but with a twist — rolling a 6 resets the current round score, adding strategy to each move. The game features clean UI, sound logic, and smooth transitions, offering a great showcase of interactive JS programming.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project4.png",
        liveLink: "https://roll-the-dice-eight.vercel.app/",
        githubLink: "https://github.com/Amandsvv/RollTheDice"
    },
    {
        category: "frontend",
        title: "Amazon Cart System",
        description: "A functional e-commerce cart system inspired by Amazon, designed to simulate real-world cart behavior. Users can add items, update quantities, calculate totals (including tax/discounts), and experience a smooth checkout flow. This project highlights dynamic DOM updates, modular JavaScript design, and modern e-commerce UX practices.",
        year: "2024",
        role: "Front-end Development",
        imgSrc: "project/project5.png",
        liveLink: "https://amandsvv.github.io/AmajonProject/",
        githubLink: "https://github.com/Amandsvv/AmajonProject"
    },
    {
        category: "frontend",
        title: "AwGP Ecommerce Website",
        description: "A responsive e-commerce platform designed for the All World Gayatri Pariwar (AWGP) community. The store allows users to explore and purchase spiritual books, CDs, health products, and more. Built with a clean UI, wishlist and cart system, and real-time product interactions, it offers a seamless and accessible online shopping experience tailored to AWGP's mission.",
        year: "2025",
        role: "Front-end Development",
        imgSrc: "project/project6.png",
        liveLink: "https://awgp-store.vercel.app/",
        githubLink: "https://github.com/Amandsvv/AWGPStore.git"
    },
    {
        category: "fullstack",
        title: "Expense Splitter",
        description: "A collaborative expense-splitting application designed to help roommates track shared expenses and balances in real time. Users can add expenses, view individual contributions, and settle dues transparently. The system focuses on accuracy, usability, and seamless multi-user interaction.",
        year: "2024",
        role: "Front-end & Back-end Development",
        imgSrc: "project/project7.png",
        liveLink: "https://roomie-spliter.netlify.app/",
        githubLink: "https://github.com/Amandsvv/Roomie-Split"
    },
    {
        category: "fullstack",
        title: "AWGP Event Request System",
        description: "A full-stack platform that enables users to submit, track, and manage event requests through a structured workflow. It features role-based approvals, real-time status updates, and a secure authentication system. Built to streamline organizational event coordination with clarity and efficiency.    ",
        year: "2024",
        role: "Front-end & Back-end Development",
        imgSrc: "project/project10.png",
        liveLink: "https://awgp-seva-portal.onrender.com",
        githubLink: "https://github.com/Amandsvv/AWGP_Seva_Portal"
    },
    {
        category: "fullstack",
        title: "Task Handler",
        description: "A productivity-driven task management system that allows users to create, organize, and monitor tasks efficiently. It supports authentication, task status tracking, and clean workflow management. Designed to improve daily productivity through a simple yet scalable full-stack architecture.",
        year: "2025",
        role: "Front-end Development",
        imgSrc: "project/project8.png",
        liveLink: "https://taskacheiver.netlify.app/",
        githubLink: "https://github.com/Amandsvv/TaskHandler.git"
    },
    {
        category: "figma",
        title: "AWGP Event Request System",
        description: "Designed a complete web interface for an Event Request & Management System using Figma, focused on clarity, accessibility, and user-friendly workflows. The design streamlines event submissions, approvals, and status tracking through intuitive layouts and structured information hierarchy. Emphasis was placed on responsive behavior, consistent components, and a calm, purpose-driven visual language suitable for organizational use.",
        year: "2024",
        role: "UI/UX Desginer",
        imgSrc: "project/project10.png",
        liveLink: "https://www.figma.com/design/XYKGAxHDuT8o7DP3mNEpO7/AWGP-Seva-Portal?node-id=0-1&t=vPDo0hnZ6jITKGT9-1",
        githubLink: ""
    },
    {
        category: "figma",
        title: "Codemni a Frelance Website",
        description: "A functional e-commerce cart system inspired by Amazon, designed to simulate real-world cart behavior. Users can add items, update quantities, calculate totals (including tax/discounts), and experience a smooth checkout flow. This project highlights dynamic DOM updates, modular JavaScript design, and modern e-commerce UX practices.Designed Codemni, a freelance-focused website concept aimed at showcasing AI framework documentation in a clear and developer-friendly manner. The design emphasizes structured content flow, readable code sections, and intuitive navigation to help users understand AI concepts efficiently. Visual hierarchy and modern UI patterns were used to make complex technical documentation feel accessible and engaging.",
        year: "2024",
        role: "UI/UX Desgnier",
        imgSrc: "project/project11.png",
        liveLink: "https://www.figma.com/design/VxtcI5wzNBgQzDxcvuOEmS/Untitled?node-id=5-25&t=43ox9M9LzjvAtOOP-1",
        githubLink: ""
    },
    {
        category: "figma",
        title: "AwGP Ecommerce Website",
        description: "A responsive e-commerce platform designed for the All World Gayatri Pariwar (AWGP) community. The store allows users to explore and purchase spiritual books, CDs, health products, and more. Built with a clean UI, wishlist and cart system, and real-time product interactions, it offers a seamless and accessible online shopping experience tailored to AWGP's mission.",
        year: "2025",
        role: "UI/UX Desgniner",
        imgSrc: "project/project12.png",
        liveLink: "https://www.figma.com/design/WGZAawqbPvSGwet4lZosu2/Untitled?t=70wCpHDKO13EIzcO-1",
        githubLink: ""
    }
];
let currentIndex = 0;
let selectedCategory = "frontend";

const container = document.querySelector("#work");
const sentinel = document.querySelector("#sentinel");

// ✅ filter function
function getFilteredProjects() {
    return projects.filter(p => p.category === selectedCategory);
}

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
          ${project.liveLink ? `<p class="project-link"><a href="${project.liveLink}" target="_blank">Live Demo <i class="fa-solid fa-square-arrow-up-right"></i></a></p>` : ""}

          ${project.githubLink ? `<p class="github-link"><a href="${project.githubLink}" target="_blank">See on Github <i class="fab fa-github"></i></a></p>` : ""}
        </div>
      </div>
    </div>
  `;

    div.classList.add("invisible");
    container.insertBefore(div, sentinel);

    void div.offsetWidth;

    div.classList.remove("invisible");
    div.classList.add("fade-in");
}

function loadNextProject() {
    const filtered = getFilteredProjects();

    if (currentIndex < filtered.length) {
        createProjectHTML(filtered[currentIndex]);
        currentIndex++;
    }
}

// ✅ reset when switching tabs
function resetProjects() {
    currentIndex = 0;

    // remove old cards
    document.querySelectorAll("#work .projects").forEach(el => el.remove());

    // restart observer
    observer.disconnect();
    observer.observe(sentinel);

    // load first project instantly
    loadNextProject();
}

// ✅ Observer (infinite reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadNextProject();
        }
    });
}, {
    threshold: 0.8
});

observer.observe(sentinel);
loadNextProject(); // initial render

const tabBtns = document.querySelectorAll(".tab-btn");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    selectedCategory = btn.dataset.cat;
    resetProjects();
  });
});
