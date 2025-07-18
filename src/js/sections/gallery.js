export function gallery() {
    
 const gallery = document.querySelector('.gallery');
 const items = document.querySelectorAll('.item');
  const itemTl = gsap.timeline({
    scrollTrigger: {
      trigger: gallery,
      start: 'top center',
      end: 'bottom bottom',
      markers: true,
      once: true,
      onEnter: () => {
        gallery.classList.add('show');
      },
      
    },
});
items.forEach((item) => {
     const itemT = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom bottom',
          markers: true,
          once: true,
          onEnter: () => {
            item.classList.add('show');
            console.log('====================================');
            console.log("dada");
            console.log('====================================');
          },
        }
      });
    });
}