// main.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});
