export function preloader() {
  const preloader = document.querySelector(".preloader__white");
  const inner = document.querySelector(".intro");
  const nav = document.querySelector(".header");
  const btn = document.querySelector('.read-more-btn');
  const text = document.querySelector('.text-block');

  btn.addEventListener('click', () => {
    text.classList.toggle('expanded');
    btn.textContent = text.classList.contains('expanded') ? 'Скрыть' : 'Читать далее';
  });
  gsap.to(preloader, {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.5,
    ease: "none",
    onComplete: () => {
      document.body.classList.add("loaded");
      inner.classList.add('active')
      nav.classList.add('active')
    },
  });
}
