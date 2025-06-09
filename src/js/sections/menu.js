export function menu() {
  
    new Swiper('.image-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 42,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".pagination-1",
        dynamicBullets: true,
    },
});
}