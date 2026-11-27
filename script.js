
/* =====================================
   A PLACE WHERE WE CAN BREATHE
   A little magic for Mamma
===================================== */


/* ===== 1. OPENING BUTTON ===== */

const beginButton = document.getElementById("beginButton");
const messageSection = document.getElementById("messageSection");

beginButton.addEventListener("click", () => {

    messageSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* ===== 2. GENTLE SECTION REVEALS ===== */

const revealSections = document.querySelectorAll(
    ".message-section, .understanding-section, .possibility-section, .reflection-section, .final-section"
);
sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(35px)";
    section.style.transition =
        "opacity 1.2s ease, transform 1.2s ease";

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    revealObserver.observe(section);
});


/* ===== 3. SHOOTING STARS ===== */

function createShootingStar() {

    const sky = document.querySelector(".ambient-background");

    if (!sky) return;

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.top = Math.random() * 65 + "%";
    star.style.left = Math.random() * 85 + "%";

    star.style.width = "3px";
    star.style.height = "3px";
    star.style.borderRadius = "50%";

    star.style.background = "#ffffff";

    star.style.boxShadow =
        "0 0 12px 3px rgba(220, 195, 255, 0.9)";

    star.style.pointerEvents = "none";
    star.style.zIndex = "1";

    sky.appendChild(star);

    star.animate([

        {
            transform: "translate(0, 0)",
            opacity: 0
        },

        {
            transform: "translate(-50px, 40px)",
            opacity: 1
        },

        {
            transform: "translate(-160px, 120px)",
            opacity: 0
        }

    ], {

        duration: 1500,
        easing: "ease-out"

    });

    setTimeout(() => {
        star.remove();
    }, 1600);

}


/* A shooting star appears occasionally. */

setInterval(createShootingStar, 5000);


/* ===== 4. FINAL SECTION GLOW ===== */

const finalSection = document.querySelector(".final-section");

const finalObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            finalSection.classList.add("final-glow-active");

            finalObserver.unobserve(finalSection);

        }

    });

}, {
    threshold: 0.4
});

finalObserver.observe(finalSection);


/* ===== 5. RESPECT REDUCED MOTION ===== */

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    document.documentElement.style.scrollBehavior = "auto";

}

/* =====================================
   6. INTERACTIVE REFLECTION CARDS
===================================== */

const reflectionButtons = document.querySelectorAll(
    ".reflection-toggle"
);

reflectionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        const isOpen =
            button.getAttribute("aria-expanded") === "true";

        // Close the other cards first.
        reflectionButtons.forEach(otherButton => {

            otherButton.setAttribute("aria-expanded", "false");

            otherButton.nextElementSibling.hidden = true;

        });

        // Open the selected card if it was previously closed.
        if (!isOpen) {

            button.setAttribute("aria-expanded", "true");

            content.hidden = false;

        }

    });

});
