// Main navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (if you add one later)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const nav = document.querySelector('nav ul');
            nav.classList.toggle('active');
        });
    }

    // Add active class to current navigation item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Project page specific functionality
    if (window.location.pathname.includes('projects/')) {
        // Add any project-specific JavaScript here
        console.log('Project page loaded');
    }
});

// Function to handle Power BI dashboard embedding
function embedPowerBIDashboard() {
    // This would be replaced with actual Power BI embedding code
    console.log('Power BI dashboard embedded');
}


/* =========================================================
   ADVANCED PORTFOLIO MOTION
========================================================= */


/* -----------------------------
   CURSOR GLOW
------------------------------ */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;

    });

}


/* -----------------------------
   SCROLL PROGRESS
------------------------------ */

const scrollProgress =
    document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    if (scrollProgress) {

        scrollProgress.style.width =
            `${progress}%`;

    }

});


/* -----------------------------
   PROJECT CARD MOUSE EFFECT
------------------------------ */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        card.style.setProperty(
            "--mouse-y",
            `${y}px`
        );

        card.style.transform =
            `translateY(-15px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "";

    });

});


/* -----------------------------
   SCROLL REVEAL
------------------------------ */

const revealElements =
    document.querySelectorAll(
        ".section h2, .about-content, .project-card, .skill-column, .contact-form"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* -----------------------------
   IMAGE MODAL
------------------------------ */

function openImage(src) {

    const modal =
        document.getElementById("imageModal");

    const fullImage =
        document.getElementById("fullImage");

    fullImage.src = src;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";

}


function closeImage() {

    const modal =
        document.getElementById("imageModal");

    modal.style.display = "none";

    document.body.style.overflow = "";

}


/* Close modal with ESC */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeImage();

    }

});


// Initialize any additional components
document.addEventListener('DOMContentLoaded', embedPowerBIDashboard);
