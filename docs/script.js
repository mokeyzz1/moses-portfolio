/* ===== Dark Mode Toggle ===== */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Load User Preference
const selectedTheme = localStorage.getItem("selected-theme");
if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[selectedTheme === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Toggle Theme
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", document.body.classList.contains(darkTheme) ? "dark" : "light");
});

/* ===== Smooth Scrolling ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
