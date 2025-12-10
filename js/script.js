// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Highlight active nav based on body data-page
const currentPage = document.body.dataset.page;

document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add("active");
  }
});

// Dynamic footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
