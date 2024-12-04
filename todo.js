
let popup = document.getElementById("popup");
let addTaskBtn = document.getElementById("addTaskBtn");
let overlay =document.getElementById("overlay");
let themeToggleBtn = document.getElementById("themeToggleBtn");

function openPopup() {
    popup.classList.add("open-popup");
    overlay.classList.add("open-overlay");

}
addTaskBtn.addEventListener("click", openPopup);

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
});