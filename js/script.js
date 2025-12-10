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

// Page transition on nav click (for multi-page links)
document.querySelectorAll(".nav-link").forEach((link) => {
  const targetHref = link.getAttribute("href");

  link.addEventListener("click", (e) => {
    // Ignore if it's a hash link or already on this page
    if (!targetHref || targetHref.startsWith("#") || link.dataset.page === currentPage) {
      return;
    }

    e.preventDefault();

    // Close mobile menu if open
    if (navMenu) {
      navMenu.classList.remove("open");
    }

    // Trigger exit animation
    document.body.classList.add("page-exit");

    // Navigate after the animation
    setTimeout(() => {
      window.location.href = targetHref;
    }, 220); // matches .22s in CSS
  });
});

// Dynamic footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
