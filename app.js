const projects = [
    {
        id: 1,
        image:
            "./beginner/results-summary-component/design/desktop-preview.jpg",
        title: "Results summary component",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/results-summary-component/",
        repoLink:
            "/beginner/results-summary-component",
    },
    {
        id: 2,
        image:
            "./beginner/product-preview-card-component/design/desktop-preview.jpg",
        title: "3-column preview card component",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/product-preview-card-component/",
        repoLink:
            "/beginner/product-preview-card-component",
    },
    {
        id: 3,
        image:
            "./beginner/interactive-rating-component/design/desktop-preview.jpg",
        title: "Interactive rating component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./beginner/interactive-rating-component/",
        repoLink:
            "/beginner/interactive-rating-component",
    }, {
        id: 4,
        image:
            "./beginner/qr-code-component-main/design/desktop-preview.jpg",
        title: "QR code component",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/qr-code-component-main/",
        repoLink:
            "/beginner/qr-code-component-main",
    }, {
        id: 5,
        image:
            "./beginner/nft-preview-card-component/design/desktop-preview.jpg",
        title: "NFT preview card component",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/nft-preview-card-component/",
        repoLink:
            "/beginner/nft-preview-card-component",
    }, {
        id: 6,
        image:
            "./beginner/order-summary-component/design/desktop-preview.jpg",
        title: "Order summary component",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/order-summary-component/",
        repoLink:
            "/beginner/order-summary-component",
    }, {
        id: 7,
        image:
            "./beginner/stats-preview-card-component/design/desktop-preview.jpg",
        title: "Stats preview card component",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/stats-preview-card-component/",
        repoLink:
            "/beginner/stats-preview-card-component",
    }, {
        id: 8,
        image:
            "./beginner/product-preview-card-component/design/desktop-preview.jpg",
        title: "3-column preview card component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./beginner/product-preview-card-component/",
        repoLink:
            "/beginner/product-preview-card-component",
    }, {
        id: 9,
        image:
            "./beginner/profile-card-component/design/desktop-preview.jpg",
        title: "Profile card component",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/profile-card-component/",
        repoLink:
            "/beginner/profile-card-component",
    }, {
        id: 10,
        image:
            "./beginner/faq-accordion-card/design/desktop-preview.jpg",
        title: "FAQ accordion card",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./beginner/faq-accordion-card/",
        repoLink:
            "/beginner/faq-accordion-card",
    },
    {
        id: 11,
        image:
            "./beginner/social-proof-section/design/desktop-preview.jpg",
        title: "Social proof section",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/social-proof-section/",
        repoLink:
            "/beginner/social-proof-section",
    }, {
        id: 12,
        image:
            "./beginner/article-preview-component/design/desktop-preview.jpg",
        title: "Article preview component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./beginner/article-preview-component/",
        repoLink:
            "/beginner/article-preview-component",
    }, {
        id: 13,
        image:
            "./beginner/four-card-feature-section/design/desktop-preview.jpg",
        title: "Four card feature section",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/four-card-feature-section/",
        repoLink:
            "/beginner/four-card-feature-section",
    }, {
        id: 14,
        image:
            "./beginner/base-apparel-coming-soon/design/desktop-preview.jpg",
        title: "Base Apparel coming soon page",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./beginner/base-apparel-coming-soon/",
        repoLink:
            "/beginner/base-apparel-coming-soon",
    }, {
        id: 15,
        image:
            "./beginner/single-price-grid-component/design/desktop-preview.jpg",
        title: "Single price grid component",
        label: ["HTML", "CSS"],
        liveLink:
            "./beginner/single-price-grid-component/",
        repoLink:
            "/beginner/single-price-grid-component",
    }, {
        id: 16,
        image:
            "./beginner/ping-coming-soon-page/design/desktop-preview.jpg",
        title: "Ping single column coming soon page",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./beginner/ping-coming-soon-page/",
        repoLink:
            "/beginner/ping-coming-soon-page",
    }, {
        id: 17,
        image:
            "./beginner/huddle-landing-page-with-single-introductory-section/design/desktop-preview.jpg",
        title: "Huddle landing page with a single introductory section",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./beginner/huddle-landing-page-with-single-introductory-section/",
        repoLink:
            "/beginner/huddle-landing-page-with-single-introductory-section",
    },

];

function displayProjects(projects) {
    const projectsList = document.getElementById('card-container');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'card';
        projectItem.innerHTML = `
            <div class="card-img">
                <img src="${project.image}" alt="">
            </div>
            <div class="card-content">
                <h1 class="card-title">${project.title}</h1>
                <div class="card-labels">
                    ${project.label.map(label => `<span class="flair">${label}</span>`).join('')}
                </div>
                <div class="card-links">
                    <a target="_blank" class="live-url-card" href="${project.liveLink}">Live URL</a>
                    <a target="_blank" class="github-card" href="https://github.com/curiousdilip/frontend-mentor/tree/main${project.repoLink}">GitHub</a>
                </div>
            </div>
        `;
        projectsList.appendChild(projectItem);
    });
}

window.onload = function () {
    displayProjects(projects);
};

const themeToggle = document.getElementById("toggle");
const icon = document.getElementById("themeIcon");
const target = document.getElementsByTagName("body")[0];
const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
target.classList.toggle(theme);
const innerIcon = theme === "dark" ? "fa-sun" : "fa-moon";
icon.classList.add(innerIcon);
themeToggle.addEventListener("click", () => {
    const currentIcon = icon.classList.contains("fa-sun")
        ? "fa-sun"
        : "fa-moon";
    const altIcon = currentIcon === "fa-sun" ? "fa-moon" : "fa-sun";

    target.classList.toggle("dark");

    icon.classList.remove(currentIcon);
    icon.classList.add(altIcon);
});