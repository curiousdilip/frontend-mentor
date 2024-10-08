const projects = [
    {
        image:
            "./3-column-preview-card-component/images/screenshot.png",
        title: "3-column preview card component",
        label: ["HTML", "CSS"],
        liveLink:
            "./3-column-preview-card-component/",
        repoLink:
            "/beginner/3-column-preview-card-component",
    },{
        image:
            "./article-preview-component/images/screenshot.png",
        title: "Article preview component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./article-preview-component/",
        repoLink:
            "/beginner/article-preview-component",
    },{
        image:
            "./recipe-page-main/img/screenshot.png",
        title: "Recipe page",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./recipe-page-main/",
        repoLink:
            "/beginner/recipe-page-main",
    },{
        image:
            "./blog-preview-card-main/assets/images/screenshot.png",
        title: "Blog preview card",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./blog-preview-card-main/",
        repoLink:
            "/beginner/blog-preview-card-main",
    },
    {
        image:
            "./base-apparel-coming-soon/images/screenshot.png",
        title: "Base apparel coming soon",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./base-apparel-coming-soon/",
        repoLink:
            "/beginner/base-apparel-coming-soon",
    },
    {
        image:
            "./faq-accordion-card/images/screenshot.png",
        title: "FAQ accordion card",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./faq-accordion-card/",
        repoLink:
            "/beginner/faq-accordion-card", 
    },  {
        image:
            "./four-card-feature-section/images/screenshot.png",
        title: "Four card feature section",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./four-card-feature-section/",
        repoLink:
            "/beginner/four-card-feature-section",
    }, {
        image:
            "./huddle-landing-page-with-single-introductory-section/images/screenshot.png",
        title: "Huddle landing page",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./huddle-landing-page-with-single-introductory-section/",
        repoLink:
            "/beginner/huddle-landing-page-with-single-introductory-section",
    },{
        image:
            "./interactive-rating-component/images/screenshot.png",
        title: "Interactive rating component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./interactive-rating-component/",
        repoLink:
            "/beginner/interactive-rating-component",
    },
  
    {
        image:
            "./nft-preview-card-component/images/screenshot.png",
        title: "NFT preview card component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./nft-preview-card-component/",
        repoLink:
            "/beginner/nft-preview-card-component",
    },
    {
        image:
            "./notifications-page/assets/images/screenshot.png",
        title: "Notifications Page",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./notifications-page/",
        repoLink:
            "/beginner/notifications-page",
    },
    {
        image:
            "./order-summary-component/images/screenshot.png",
        title: "Order Summary Component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./order-summary-component/",
        repoLink:
            "/beginner/order-summary-component",
    },
    {
        image:
            "./ping-coming-soon-page/images/screenshot.png",
        title: "Ping Coming Soon Page",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./ping-coming-soon-page/",
        repoLink:
            "/beginner/ping-coming-soon-page",
    },
    {
        image:
            "./product-preview-card-component/images/screenshot.png",
        title: "Product Preview Card Component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./product-preview-card-component/",
        repoLink:
            "/beginner/product-preview-card-component",
    },
    {
        image:
            "./profile-card-component/images/screenshot.png",
        title: "Product Card Component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./profile-card-component/",
        repoLink:
            "/beginner/profile-card-component",
    },
    {
        image:
            "./qr-code-component-main/images/screenshot.png",
        title: "QR Code Component Main",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./qr-code-component-main/",
        repoLink:
            "/beginner/qr-code-component-main",
    },
    {
        image:
            "./results-summary-component/assets/images/screenshot.png",
        title: "Results Summary Component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./results-summary-component/",
        repoLink:
            "/results-summary-component",
    },
    {
        image:
            "./single-price-grid-component/images/screenshot.png",
        title: "Single Price Grid Component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./single-price-grid-component/",
        repoLink:
            "/beginner/single-price-grid-component",
    },
    {
        image:
            "./social-links-profile-main/assets/images/screenshot.png",
        title: "Social Links Profile Main",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./social-links-profile-main/",
        repoLink:
            "/beginner/social-links-profile-main",
    }, {
        image:
            "./social-proof-section/images/screenshot.png",
        title: "Social Proof Section",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./social-proof-section/",
        repoLink:
            "/beginner/social-proof-section",
    }, {
        image:
            "./stats-preview-card-component/images/screenshot.png",
        title: "Stats Preview Card Component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./stats-preview-card-component/",
        repoLink:
            "/beginner/stats-preview-card-component",
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