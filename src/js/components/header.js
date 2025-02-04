export function header() {
  const headerBtnMenu = document.querySelector(".header__menu-btn");
  const header = document.querySelector("header");
  let openMenu = false;
  headerBtnMenu.addEventListener("click", () => {
    header.classList.toggle("open-menu");
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "bottom  top",
      end: "bottom top",
      onEnter: () => {
        header.classList.add("header-dark");
      },
      onEnterBack: () => {
        header.classList.remove("header-dark");
        header.classList.remove("hidden");
      },
    },
  });
  const dataScrollLinks = document.querySelectorAll("[data-scroll]");
  dataScrollLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const section = document.querySelector(`.${link.dataset.scroll}`);
      gsap.to(window, {
        duration: 0.3,
        scrollTo: section,
        ease: "none",
      });
    });
  });

  let lastScrollY = 0;
  const threshold = 50;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) > threshold) {
      if (currentScrollY > lastScrollY) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
      lastScrollY = currentScrollY;
    }
  });
}
