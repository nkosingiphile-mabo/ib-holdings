/* Pre loader */
window.addEventListener("load", () => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => {
          preloader.remove(); // remove it fully after fade out
        }, 500); // allow fade-out animation
      }
    }, 1500); // show for at least 1.5 seconds even if page is ready earlier
  });

/* Scroll To Top */
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("opacity-100", "pointer-events-auto");
      scrollToTopBtn.classList.remove("opacity-0", "pointer-events-none");
    } else {
      scrollToTopBtn.classList.add("opacity-0", "pointer-events-none");
      scrollToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const hiddenGrids = document.getElementById('hidden-grids');
    const grids = hiddenGrids.querySelectorAll('.grid');
    let currentGrid = 0;

    loadMoreBtn.addEventListener('click', () => {
      if (currentGrid < grids.length) {
        // Show next grid
        grids[currentGrid].classList.remove('hidden');
        grids[currentGrid].classList.add('grid-animate');
        currentGrid++;
        
        // Hide button if no more grids
        if (currentGrid >= grids.length) {
          loadMoreBtn.classList.add('hidden');
        }
      }
    });
  });
