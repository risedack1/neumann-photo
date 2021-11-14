const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: "true",
    speed: 800,

    mousewheel: {
        invert: true,
    },
    // loop: "true",

    // Navigation arrows
    navigation: {
        nextEl: '.slider-prev',
        prevEl: '.slider-next',
    },
});