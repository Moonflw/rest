export function gallery() {
    
 const gallery = document.querySelector('.gallery');
  const itemTl = gsap.timeline({
    scrollTrigger: {
      trigger: gallery,
      start: 'top center',
      end: 'bottom bottom',
    //   markers: true,
      once: true,
      onEnter: () => {
        gallery.classList.add('show');
      },
      
    },
    
});
console.log("asdas");
}