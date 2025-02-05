export function preloader() {
  const preloader = document.querySelector(".preloader__white");

  gsap.to(preloader, {
    clipPath: "inset(0 0% 0 0)",
    duration: 1,
    ease: "none",
    onComplete: () => {
      document.body.classList.remove("no-scroll");
      document.body.classList.add("loaded");
    },
  });
}
