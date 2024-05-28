

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