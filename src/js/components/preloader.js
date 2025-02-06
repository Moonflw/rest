export function preloader() {
  const preloader = document.querySelector(".preloader__white");
  const introPhoneOrigin = document.querySelector(".intro__form-input__wrapper-wrap")

  gsap.to(preloader, {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.5,
    ease: "none",
    onComplete: () => {
      document.body.classList.remove("no-scroll");
      document.body.classList.add("loaded");
      setTimeout(() => {
        introPhoneOrigin.classList.add("loaded-intro-input")
      }, 3000);
    },
  });
}
