// import Swiper from "swiper";
import { plugins } from "./components/plugins.js";
import { lenis } from "./components/lenis.js";
import { header } from "./components/header.js";
import { intro } from "./sections/intro.js";
import { about } from "./sections/about.js";
import { invest } from "./sections/invest.js";
import { developer } from "./sections/developer.js";
import { location } from "./sections/location.js";
import { popups } from "./components/popups.js";






import { validationPhoneInput } from "./components/validation-phone-input.js";
import form from "./components/form.js";



window.addEventListener("onbeforeunload", function () {
  window.scrollTo(0, 0);
  gsap.to(window, { duration: 0, scrollTo: 0 });
});
window.addEventListener("unload", function () {
  window.scrollTo(0, 0);
  gsap.to(window, { duration: 0, scrollTo: 0 });
});

window.addEventListener("load", () => {
  plugins();
  lenis();
  // Swiper.use([Navigation, Autoplay])

  validationPhoneInput();
  header()
  intro();
  about();
  invest();
  developer();
  location();
  popups()
  form()
  // Zoom Site Disabled
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    document.body.style.zoom = 1;
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    document.body.style.zoom = 1;
  });

  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    document.body.style.zoom = 1;
  });
});
