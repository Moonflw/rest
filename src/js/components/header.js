export function header() {
  const headerBtnMenu = document.querySelector(".header__menu-btn");
  const header = document.querySelector("header");
  // const headerSocial = document.querySelectorAll(".header__social .social");
  // const headerSocialBtn = document.querySelector(".header-social-btn");
  headerBtnMenu.addEventListener("click", () => {
    header.classList.toggle("open-menu");
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "bottom-=50  top",
      end: "bottom-=50 top",
      onEnter: () => {
        header.classList.add("header-dark");
        // headerSocial.forEach((el) => el.classList.remove("social-white"));
        // headerSocial.forEach((el) => el.classList.add("social-dark"));
        // headerSocialBtn.classList.add("dark");
        // headerSocialBtn.classList.remove("white");
      },
      onEnterBack: () => {
        header.classList.remove("header-dark");
        // headerSocial.forEach((el) => el.classList.add("social-white"));
        // headerSocial.forEach((el) => el.classList.remove("social-dark"));
        // headerSocialBtn.classList.remove("dark");
        // headerSocialBtn.classList.add("white");
      },
    },
  });
}
