export function header() {
  const headerBtnMenu = document.querySelector(".header__menu-btn");
  const header = document.querySelector("header");
  let openMenu = false;
  headerBtnMenu.addEventListener("click", () => {
    header.classList.toggle("open-menu");
    if (openMenu) {
      headerBtnMenu.innerText = "Menu";
      openMenu = false;
    } else {
      headerBtnMenu.innerText = "Close";
      openMenu = true;
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro",
      start: "bottom-=50  top",
      end: "bottom-=50 top",
      onEnter: () => {
        header.classList.add("header-dark");
      },
      onEnterBack: () => {
        header.classList.remove("header-dark");
      },
    },
  });
}
