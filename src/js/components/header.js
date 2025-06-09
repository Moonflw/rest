export function header() {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  if (window.matchMedia("(max-width: 767px)").matches) {
    const mobBtn = document.querySelector(".header__mob-btn");
    const mob = document.querySelector(".header__mob");
    mobBtn.addEventListener("click", () => {
      mob.classList.toggle("active");
      mobBtn.classList.toggle("active");
    });
  }
}
