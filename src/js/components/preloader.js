export function preloader() {
  const preloader = document.querySelector(".preloader__white");

  gsap.to(preloader, {
    clipPath: "inset(0 0% 0 0)",
    duration: 2,
    ease: "none",
    onComplete: () => {
      document.body.classList.remove("no-scroll");
      document.body.classList.add("loaded");
      document.querySelectorAll(".iti__country-list").forEach((el) => {
        el.style.cssText = "opacity:0;visabilit:hidden";
      });
      setTimeout(() => {
        document.querySelectorAll(".iti__country-list").forEach((el) => {
          el.style.cssText = "opacity:1;visabilit:visible";
        });
      }, 1000);
    },
  });
}
