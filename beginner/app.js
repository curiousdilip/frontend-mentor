const projects = [
    {
        id: 1,
        image:
            "./3-column-preview-card-component/images/screenshot.png",
        title: "3-column preview card component",
        label: ["HTML", "CSS"],
        liveLink:
            "./3-column-preview-card-component/",
        repoLink:
            "/beginner/3-column-preview-card-component",
    },{
        id: 2,
        image:
            "./article-preview-component/images/screenshot.png",
        title: "Article preview component",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./article-preview-component/",
        repoLink:
            "/beginner/article-preview-component",
    },{
        id: 3,
        image:
            "./recipe-page-main/img/screenshot.png",
        title: "Recipe page",
        label: ["HTML", "CSS", "JS"],
        liveLink:
            "./recipe-page-main/",
        repoLink:
            "/beginner/recipe-page-main",
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