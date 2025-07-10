document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // Highlight active link
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href');

    if (linkPath === currentPath) {
      link.classList.add('text-yellow-400', 'border-b-2', 'border-yellow-400', 'pb-1');
    } else {
      link.classList.remove('text-yellow-400', 'border-b-2', 'border-yellow-400', 'pb-1');
    }
  });

  // Mobile toggle
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  navToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});
