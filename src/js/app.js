
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
import { preloader } from "./components/preloader.js";
import { header } from "./components/header.js";
import { menu } from "./sections/menu.js";
import { map} from "./sections/map.js";
import { gallery} from "./sections/gallery.js";

// window.addEventListener("onbeforeunload", function () {
//   window.scrollTo(0, 0);
//   gsap.to(window, { duration: 0, scrollTo: 0 });
// });
// window.addEventListener("unload", function () {
//   window.scrollTo(0, 0);
//   gsap.to(window, { duration: 0, scrollTo: 0 });
// });

window.addEventListener("DOMContentLoaded", () => {
  
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.ScrollToPlugin = ScrollToPlugin;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  preloader();
  header();
  menu()
  gallery()
  map()
});

