const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar")

toggleBtn.addEventListener("click", ()=> {
  sidebar.classList.toggle("active");
})

document.addEventListener("click", (e) => {
    if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }
});