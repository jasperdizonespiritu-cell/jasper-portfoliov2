const titles = [
    "Executive Assistant",
    "Virtual Assistant",
    "Customer Support Specialist",
    "Workflow Automation Enthusiast",
    "GoHighLevel CRM Support"
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

const heading = document.querySelector(".hero h2");

function typeEffect() {

    const current = titles[titleIndex];

    if (!deleting) {

        heading.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        heading.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
