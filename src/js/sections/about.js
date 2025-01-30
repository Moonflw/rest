import { queryMatches } from "../components/utils.js";
export function about() {
  const mob = queryMatches(768, "max");
  if (mob) {
    var swiper = new Swiper(".about-swiper", {
      slidesPerView: 1.1,
      spaceBetween: 10,
      pagination: {
        // el: ".swiper-pagination",
        // clickable: true,
      },
    });
  }
}
