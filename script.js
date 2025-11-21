document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     1. IMAGE BUTTON HOVER – swap static image <-> GIF
  ========================================================= */
  const staticImg = 'Media/Button Paper.png';
  const buttons = document.querySelectorAll('.image-btn');

  buttons.forEach(button => {
    const img = button.querySelector('img');
    const hoverGif = button.dataset.hover;

    button.addEventListener('mouseenter', () => {
      if (hoverGif) img.src = hoverGif;
    });

    button.addEventListener('mouseleave', () => {
      img.src = staticImg;
    });
  });

  /* =========================================================
     2. SIDEBAR INTERACTION SCRIPT
  ========================================================= */
  const sidebar = document.querySelector(".sidebar");
  const sidebarNav = document.querySelector(".sidebar-nav");
  const hero = document.querySelector("#project-hero");
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  const sections = document.querySelectorAll("main section");
  const backToTop = document.querySelector(".sticky4 a.Description");

  if (sidebar && hero && sidebarNav) {
    const revealSidebarNav = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom < window.innerHeight * 0.3) {
        sidebarNav.classList.add("is-visible");
      } else {
        sidebarNav.classList.remove("is-visible");
      }
    };
    window.addEventListener("scroll", revealSidebarNav);
    revealSidebarNav();

    const highlightActiveLink = () => {
      let currentSection = null;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom > 200) {
          currentSection = section;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (currentSection && link.getAttribute("href") === `#${currentSection.id}`) {
          link.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", highlightActiveLink);
    highlightActiveLink();

    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if (!target) return;

        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      });
    });

    const wiggleBackToTop = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const bottomReached = scrollY + viewportHeight >= pageHeight - 20;

      if (bottomReached && backToTop) {
        backToTop.classList.add("wiggle");
        setTimeout(() => backToTop.classList.remove("wiggle"), 800);
      }
    };
    window.addEventListener("scroll", wiggleBackToTop);
  }

  /* =========================================================
     6. AUTO UPDATE YEAR IN FOOTER
  ========================================================= */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
